const authService = require("../services/authService");
const { v4: uuidv4 } = require('uuid');


const signIn = async (req, res) => {
  console.log(req);
  const { username, password } = req.body;
  try {
    const token = await authService.signIn({ username, password });
    res.status(200).send({ status: "OK", data: token });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const createdUser = await authService.signUp({ username, email, password });
    res.send({ status: "OK", data: createdUser });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  signIn,
  signUp,
};
