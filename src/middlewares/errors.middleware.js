import httpStatus from "http-status";

export default function errorHandler(error, req, res, next){
    if (error.type === "format") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }
    if (error.type === "conflict") {
        return res.status(httpStatus.CONFLICT).send(error.message);
    }
    if (error.type === "notFound") {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }
    if (error.type === "badRequest") {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    if (error.type === "internal"){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
}