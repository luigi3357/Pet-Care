const { Router } = require('express');
const bcrypt = require('bcryptjs')
const { User } = require('../db');
const { verifyEmail, hash, create, search, compare } = require('../services/login');

const router = Router();



router.post("/register", async (req, res) => {
    let { email, password } = req.body
    let user = await search(email)
    if (!user) {
        try {
            let verify = verifyEmail(email)
            if (verify === true && password.length >= 8) {
                let hasheador = await hash(password)
                let result = await create(email, hasheador)
                return res.status(200).send(result)
            }
            if (verify === false) {
                return res.status(404).send("Email invalido")
            }
        } catch (error) {
            return res.status(404).send(error)
        }
    } else {
        return res.status(404).send("El correo ya tiene un perfil restablezca la contraseña")
    }
})

router.post("/login", async (req, res) => {
    let { email, password } = req.body
    try {
        let user = await search(email)
        if (user) {
            let check = await compare(password, user)
            if (check === true) {
                return res.status(200).json(user.id)
            }
            if (check === false) {
                return res.status(404).send("Lo siento password incorrecta")
            }
        }
    } catch (error) {
        return res.status(404).send(error)
    }
})

module.exports = router;