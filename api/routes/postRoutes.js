const router = require('express').Router();
const postController = require('../controllers/postController');
const { verifyToken } = require('../middleware/verifyToken');

router
  .route('/')
  .post(verifyToken, postController.newPost)
  .get(verifyToken, postController.postsByUser);

router
  .route('/:id')
  .put(verifyToken, postController.updatePost)
  .delete(verifyToken, postController.deletePost);

router.route('/:id/like').put(verifyToken, postController.likePost);

router.route('/:id/dislike').put(verifyToken, postController.dislikePost);

router.route('/comment/post').put(verifyToken, postController.commentPost);

module.exports = router;
