const mongoose= require("mongoose")

function Validar_ID(req,res,next) {
const isValid =  mongoose.Types.ObjectId.isValid(req.params.id)
if(isValid) {
    next()
} else{
    return res.status(400).json({Mensagem:"ID invalido"})
}
}

module.exports = {
Validar_ID
}