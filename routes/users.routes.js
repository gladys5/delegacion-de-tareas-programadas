const express = require('express')
const router = express.Router()

const {
  getUserByStatusActive,
  updateTasks,
  createUser,
  desabiliteUser,
} = require('../controllers/users.controller')
const { userExists } = require('../middelwares/users.middelware')
const { createUserValidators } = require('../middelwares/validator.middelware')

router.post('/', createUser, userExists, createUserValidators)

router.get('/', getUserByStatusActive)

router.delete('/:id', desabiliteUser)

router.patch('/:id', updateTasks)

module.exports = { UserRouter: router }
