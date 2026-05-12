const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {
  // const token=req.cookies.token
  const authHeader = req.headers.authorization;

  if (!authHeader && !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Access Denied. No Bearer token provided." });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "Unauthrized access",
    });
  }
  let decode;
  try {
    decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    return res.status(401).json({
      message: "Something went wrong or Unauthrized access",
    });
  }
  req.user = decode;
  next();
}

module.exports = { authUser };
