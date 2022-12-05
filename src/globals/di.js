const awilix = require("awilix");
//const xss = require('@puzzleframework/joi-xss');
const Joi = require("@hapi/joi"); //.extend(xss('object'), xss('array'), xss('string'));
Joi.objectId = require("joi-objectid")(Joi);
const Boom = require("@hapi/boom");
const _ = require("lodash");
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const container = awilix.createContainer();
const CompanyEmailValidator = require("company-email-validator");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const axios = require("axios");
const nodemailerSendgrid = require("nodemailer-sendgrid");
const sgMail = require("@sendgrid/mail");

module.exports = async function FastDI(options = {}) {
    const logger = _.get(options, "logger", undefined);
    const config = _.get(options, "config", undefined);

    if (logger === undefined)
        throw new Error("FastDI is dependent on [logger] instance");

    if (config === undefined)
        throw new Error("FastDI is dependent on [config] instance");

    container.register({
        config: awilix.asValue(config),
        logger: awilix.asValue(logger),
        Joi: awilix.asValue(Joi),
        Boom: awilix.asValue(Boom),
        _: awilix.asValue(_),
        uuid: awilix.asValue(uuid),
        bcrypt: awilix.asValue(bcrypt),
        emailValidator: awilix.asValue(CompanyEmailValidator),
        jwt: awilix.asValue(jwt),
        nodemailer: awilix.asValue(nodemailer),
        axios: awilix.asValue(axios),
        sgMail: awilix.asValue(sgMail),
        nodemailerSendgrid: awilix.asValue(nodemailerSendgrid),
    });

    container.loadModules(
        [
            "../providers/**/*.js",
            "../models/**/*.js",
            "../services/**/*.js",
            "../helpers/**/*.js",
            "../schema/**/*.js",
            "../handlers/**/*.js",
            "../mediators/**/*.js",
            "../consumers/**/*.js",
        ],
        {
            cwd: __dirname,
            formatName: "camelCase",
            resolverOptions: {
                lifetime: awilix.Lifetime.SINGLETON,
                register: awilix.asFunction,
            },
        }
    );

    const _container = async () => container;

    const register = async (type, value) => {
        switch (type) {
            case "db":
                container.register(
                    "db",
                    awilix.asFunction(() => value).singleton()
                );
                break;
            case "cache":
                container.register(
                    "cache",
                    awilix.asFunction(() => value).singleton()
                );
                break;
            case "queue":
                container.register(
                    "queue",
                    awilix.asFunction(() => value).singleton()
                );
                break;
        }
    };

    return {
        _container,
        register,
    };
};
