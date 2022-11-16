const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader;
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err)
        return res.status(400).json({ message: 'Une erreur est survenue' });
      req.user = user;
      next();
    });
  } else {
    return res.status(400).json({ message: 'Accès interdit' });
  }
};

module.exports = { verifyToken };
