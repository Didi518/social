const User = require('../models/User');
const Post = require('../models/Post');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const newUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ message: 'Une erreur est survenue' });
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: 'Cet utilisateur existe déjà' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      profile: req.body.profile,
      phoneNumber: req.body.phoneNumber,
    });
    const accessToken = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET_KEY
    );
    await user.save();
    res.status(201).json({ user, accessToken });
  } catch (err) {
    if (err.code === 11000)
      return res.status(400).json({ message: 'Cet e-mail est déjà utilisé' });
    res.status(400).json(err);
  }
};

const login = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ message: 'Une erreur est survenue' });
  }
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: 'Utilisateur introuvable' });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ message: 'Mot de passe invalide' });
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET_KEY
    );
    const { password, ...other } = user._doc;
    res.status(200).json({ other, accessToken });
  } catch (err) {
    res.status(400).json({ message: 'Identifiants invalides' });
  }
};

const following = async (req, res) => {
  if (req.params.id !== req.body.user) {
    const user = await User.findById(req.params.id);
    const otherUser = await User.findById(req.body.user);
    if (!user.followers.includes(req.body.user)) {
      await user.updateOne({ $push: { followers: req.body.user } });
      await otherUser.updateOne({ $push: { followings: req.params.id } });
      return res.status(200).json({ message: 'Tu suis ce compte' });
    } else {
      return res.status(400).json({ message: 'Tu suis déjà ce compte' });
    }
  } else {
    return res
      .status(400)
      .json({ message: 'Tu ne peux pas suivre ton propre compte' });
  }
};

const followerPosts = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const followerPosts = await Promise.all(
      user.followings.map((item) => {
        return Post.find({ user: item });
      })
    );
    res.status(200).json(followerPosts);
  } catch (error) {
    return res.status(400).json({ message: 'Une erreur est survenue' });
  }
};

const updateProfile = async (req, res) => {
  try {
    if (req.params.id === req.user.id) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        await updatedUser.save();
        res.status(200).json(updatedUser);
      }
    } else {
      return res.status(400).json({ message: 'Action interdite' });
    }
  } catch (error) {
    return res.status(400).json({ message: 'Une erreur est survenue' });
  }
};

const deleteUser = async (req, res) => {
  try {
    if (req.params.id !== req.user.id) {
      return res.status(403).json({ message: 'Action interdite' });
    } else {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: 'Compte supprimé' });
    }
  } catch (error) {
    return res.status(400).json({ message: 'Une erreur est survenue' });
  }
};

const postDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({ message: 'Utilisateur introuvable' });
    }
    const {
      email,
      password,
      phoneNumber,
      followers,
      followings,
      createdAt,
      updatedAt,
      ...others
    } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    return res.status(400).json({ message: 'Une erreur est survenue' });
  }
};

module.exports = {
  deleteUser,
  followerPosts,
  following,
  login,
  postDetails,
  newUser,
  updateProfile,
};
