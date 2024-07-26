const asyncHandler = require("express-async-handler");
const User = require("../models/models");

const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ message: "Obter todos os Usuarios", data: users });
});

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404).json({ message: "Usuario não encontrado" });
  }

  res.status(200).json({ message: 'Obter Usuario ${user}' });
});

const signup = asyncHandler(async (req, res) => {
  const users = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirmation: req.body.passwordConfirmation,
  });

  res.status(201).json({ message: "Usuario criado com sucesso!", data: users });
});

const login = asyncHandler(async (req, res) => {
  const users = await User.findById(req.params.id);

  if (!users) {
    res.status(404).json({ message: "usuario nao encontrado" });
  }
  const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ message: 'Actualizar usuario ${updateUser}' });
});

module.exports = { getAllUser, getUser, signup, login };