const { response } = require("express");
const Usuario = require("../models/Usuario");

const crearUsuario = async (req, res = response) => {

    let usuario = new Usuario(req.body);

    await usuario.save();

    res.status(200).json({
        ok: true,
        msg: "register"
    });
};

const loginUsuario = (req, res = response) => {

    res.json({
        ok: true,
        msg: "login"
    });
}
const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
}
module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}