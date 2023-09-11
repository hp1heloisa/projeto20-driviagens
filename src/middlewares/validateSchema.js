import formatError from "../errors/format.js"

export function validateSchema(schema) {
    return (req, res, next) => {
        const {"bigger-date": bigger_date, "smaller-date": smaller_date} = req.query;
        let validation;
        validation = schema.validate(req.body, { abortEarly: false });
        if (bigger_date || smaller_date) validation = schema.validate({"bigger-date": bigger_date, "smaller-date": smaller_date}, { abortEarly: false });
        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message)
            throw formatError(errors);
        }
        next()
    }
}
