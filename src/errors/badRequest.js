export default function badRequestError(erro){
    return {
        type: "badRequest",
        message: erro
    }
}