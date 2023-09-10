export default function conflictError(erro){
    return{
        type: "conflict",
        message: erro
    }
}