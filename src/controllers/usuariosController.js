const { Admin } = require("../models/Admin.model");
const generarJWT = require("../helpers/generarJWT");
const generarId = require("../helpers/generarId");

const registrar = async (req, res) => {
  //   const { nombre, email, password } = req.body;

  // Prevenir Admin duplicados
  const existeEmail = await Admin.findOne({ where: { email: req.body.email } });
  if (existeEmail) {
    const error = new Error("El usuario ya está registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    // Guardar
    const usuarioguardado = await Admin.create(req.body);
    res.json(usuarioguardado);
  } catch (error) {
    console.log(error);
  }
};

const perfil = (req, res) => {
  const { usuario } = req;
  res.json({ perfil: usuario });
};

const confirmar = async (req, res) => {
  const { token } = req.params;

  const usuarioConfirmar = await Admin.findOne({ where: { token } });
  if (!usuarioConfirmar) {
    const error = new Error("Token no válido");
    return res.status(400).json({ msg: error.message });
  }

  try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    await usuarioConfirmar.save();

    res.json({ msg: "Usuario confirmado correctamente" });
  } catch (error) {}
};

const autenticar = async (req, res) => {
  const { email, password } = req.body;

  // Comprobar si el usuario existe
  const usuario = await Admin.findOne({ where: { email } });

  if (!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ msg: error.message });
  }

  // Comprobar si el usuario está confirmado
  if (!usuario.confirmado) {
    const error = new Error("Tu cuenta no ha sido confirmada");
    return res.status(403).json({ msg: error.message });
  }

  //  Revisar el password
  if (await usuario.comprobarPassword(password)) {
    // Autenticar
    res.json({ token: generarJWT(usuario.id) });
  } else {
    const error = new Error("El password es incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};

const olvidePassword = async (req, res) => {
  const { email } = req.body;

  const existeUsuario = await Admin.findOne({ where: { email } });
  if (!existeUsuario) {
    const error = new Error("El usuario no existe");
    return res.status(400).json({ msg: error.message });
  }

  try {
    existeUsuario.token = generarId();
    await existeUsuario.save();
    res.json({ msg: "Hemos enviado un email con las instrucciones" });

    // Enviar email con instrucciones
  } catch (error) {
    console.log(error);
  }
};
const comprobarToken = async (req, res) => {
  const { token } = req.params;
  const tokenValido = await Admin.findOne({ where: { token } });
  if (tokenValido) {
    res.json({ msg: "Token válido y el usuario existe" });
  } else {
    const error = new Error("Token no valido");
    return res.status(400).json({ msg: error.message });
  }
};
const nuevoPassword = async (req, res) => {
  const {token} = req.params;
  const {password} = req.body;
  const usuario = await Admin.findOne({token});
  if(!usuario){
    const error = new Error("Hubo un error");
    return res.status(400).json({msg: error.message});
     
  }
  try {
    usuario.token = null;
    usuario.password = password;
    await usuario.save();
    res.json({msg: "Password modificado correctamente"});
  }
   catch (error) {
    console.log(error);
    
  
  }
}

module.exports = {
  registrar,
  perfil,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
};
