const Post = require('../models/Post');

const newPost = async (req, res) => {
  try {
    const { title, image, video } = req.body;
    const newPost = new Post({
      title,
      image,
      video,
      user: req.user.id,
    });
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json({ message: 'Une erreur est survenue' });
  }
};

const postsByUser = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.id });
    if (!posts) {
      return res
        .status(200)
        .json({ message: "Tu n'as aucun message en historique" });
    }
    res.status(200).json(posts);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const updatePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(400).json({ message: 'Message introuvable' });
    }
    post = await Post.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    const updatedPost = await post.save();
    res.status(200).json(updatedPost);
  } catch (error) {
    return res.status(400).json({ message: 'Mise à jour impossible' });
  }
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.like.includes(req.user.id)) {
      if (post.dislike.includes(req.user.id)) {
        await post.updateOne({ $pull: { dislike: req.user.id } });
      }
      await post.updateOne({ $push: { like: req.user.id } });
      return res.status(200).json({ message: 'Tu aimes ce message' });
    } else {
      await post.updateOne({ $pull: { like: req.user.id } });
      return res.status(200).json({ message: "Tu as retiré ton j'aime" });
    }
  } catch (error) {
    return res.status(400).json({ message: 'Une erreur est survenue' });
  }
};

const dislikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.dislike.includes(req.user.id)) {
      if (post.like.includes(req.user.id)) {
        await post.updateOne({ $pull: { like: req.user.id } });
      }
      await post.updateOne({ $push: { dislike: req.user.id } });
      return res.status(200).json({ message: "Tu n'aimes pas ce message" });
    } else {
      await post.updateOne({ $pull: { dislike: req.user.id } });
      return res.status(200).json({ message: 'Tu as retiré ton dislike' });
    }
  } catch (error) {
    return res.status(400).json({ message: 'Une erreur est survenue' });
  }
};

const commentPost = async (req, res) => {
  try {
    const { comment, postId } = req.body;
    const comments = {
      user: req.user.id,
      username: req.user.username,
      comment,
    };
    const post = await Post.findById(postId);
    post.comments.push(comments);
    await post.save();
    res.status(200).json({ message: 'Commentaire enregistré' });
  } catch (error) {
    return res.status(400).json({ message: 'Une erreur est survenue' });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.user == req.user.id) {
      await Post.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Ton message a été supprimé' });
    } else {
      res.status(400).json({ message: 'Action interdite' });
    }
  } catch (error) {
    return res.status(400).json({ message: 'Une erreur est survenue' });
  }
};

module.exports = {
  commentPost,
  deletePost,
  dislikePost,
  likePost,
  newPost,
  postsByUser,
  updatePost,
};
