export default function notFoundError(item = 'Item'){
    return{
        type: "notFound",
        message: `${item} não encontrado!`
    }
}