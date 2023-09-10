import Joi from "joi";

export const city = Joi.object({
    name: Joi.string().min(2).max(50).required()
});

export const flight = Joi.object({
    origin: Joi.number().integer().required(),
	destination: Joi.number().integer().required(),
	date: Joi.string().regex(/^\d{2}-\d{2}-\d{4}$/).required()
});

export const travel = Joi.object({
    passengerId: Joi.number().integer().required(),
	flightId: Joi.number().integer().required()
})
