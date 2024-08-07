const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  console.log(req.headers)
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    try {
      if (err) {
        return res.status(200).send({ message: "Auth Failed ", success: false });
      } else {
        req.body.userId = decode.id;
        next();
      }
    } catch (error) {
      console.log(error);
      return res.status(401).send({ message: "Auth Failed ", success: false });
    }
  });
};
