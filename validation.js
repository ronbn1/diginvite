const Joi = require("@hapi/joi");

//Register validation
const registerValidation = data => {
  const schema = Joi.object({
    email: Joi.string().email(),
    phone: Joi.string().allow(""),
    groomName: Joi.string().allow(""),
    brideName: Joi.string().allow(""),
    hallName: Joi.string().allow(""),
    hallAddress: Joi.string().allow(""),
    eventDate: Joi.string().allow(""),
    greetingTime: Joi.string().allow(""),
    weddingTime: Joi.string().allow(""),
    groomPName: Joi.string().allow(""),
    bridePName: Joi.string().allow(""),
    imageSrc: Joi.allow(""),
    password: Joi.string().allow(""),
    password2: Joi.string().allow("")
  });
  return schema.validate(data);
};

//Login validation
const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(4)
      .required()
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
