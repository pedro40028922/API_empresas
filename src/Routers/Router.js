const express = require('express')
const router = express.Router()

// controllers
const CargoController = require('../controllers/cargo_control')
const Departamentocontroller = require('../controllers/Departamento_control')

// validators
const {validarCargo} = require('../validators/CargoValidator')
const {Validar_ID} = require('../validators/IdValidators')
const {validarDepartampento} = require('../validators/DepartamentoValidators')


// Cargo
router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', Validar_ID, CargoController.buscarPorID)
router.post('/cargos', CargoController.criar)
router.put('/cargos/:id',Validar_ID, validarCargo, CargoController.atualizar)
router.delete('/cargos/:id',Validar_ID, CargoController.excluir)

// Departamento
router.get('/departamentos', Departamentocontroller.buscarTodos)

router.get('/departamentos/:id', Validar_ID, Departamentocontroller.buscarPorID)

router.post('/departamentos',     validarDepartampento, Departamentocontroller.criar)

router.put('/departamentos/:id', Validar_ID,     validarDepartampento, Departamentocontroller.atualizar)

router.delete('/departamentos/:id', Validar_ID, Departamentocontroller.excluir)

module.exports = router