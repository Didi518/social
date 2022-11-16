const router = require('express').Router();
const userController = require('../controllers/userController');
const { body } = require('express-validator');
const { verifyToken } = require('../middleware/verifyToken');

router
  .route('/register')
  .post(
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
    body('username').isLength({ min: 3 }),
    body('phoneNumber').isLength({ min: 10 }),
    userController.newUser
  );

router
  .route('/login')
  .post(
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
    userController.login
  );

router
  .route('/:id')
  .put(verifyToken, userController.updateProfile)
  .delete(verifyToken, userController.deleteUser);

router.route('/following/:id').put(verifyToken, userController.following);

router.route('/follower/:id').get(verifyToken, userController.followerPosts);

router.route('/post/:id').get(verifyToken, userController.postDetails);

module.exports = router;
