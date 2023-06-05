const {Admin} = require("../models/Admin.model");
const jwt = require("jsonwebtoken");

const checkAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const usuario = await Admin.findByPk(decoded.id, {
        attributes: { exclude: ["password", "token", "confirmado"] }
      });

      if (usuario) {
        req.usuario = usuario;
        return next();
      }
    } catch (error) {
      const e = new Error("Token no valido");
      res.status(401).json({ msg: e.message });     
    }
  }

  if(!token){
    const error = new Error('Token no valido o inexistente');
    return res.status(403).json({ msg: error.message });
  
  }

  next();
};

module.exports = checkAuth;
