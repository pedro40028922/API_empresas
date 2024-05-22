 const yup = require('yup')

const schema = yup.object().shape({
    nome: yup
    .string('Campo nome precisa ser preenchido com texto')
    .required('Campo nome é obrigatorio'),

    descricao: yup
    .string('Campo descricao precisa ser preenchido com texto')
})
function validarDepartampento(req, res, next){
    schema
    .validate(req.body,{ abortEarly: false})
    .then(() => next())
    .catch(err => res.status(400).json({
        mensagem: "Erro na validação dos campos!",
        erro: err.erros
    }))
}
module.exports = {
    validarDepartampento
}
 