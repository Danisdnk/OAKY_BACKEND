const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');


router.post('/new',
    [
        check('name', 'El nombre es obligatorio').notEmpty(),
        check('email', 'El nombre es obligatorio').isEmail(),
        validarCampos
    ],
    crearUsuario);

router.post('/', loginUsuario);

router.get('/renew', revalidarToken);
module.exports = router;