export default function notFoundError(message = 'Item não encontrado!'){
    return{
        type: "notFound",
        message: message
    }
}