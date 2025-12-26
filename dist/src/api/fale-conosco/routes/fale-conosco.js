"use strict";
/**
 * fale-conosco router
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreRouter('api::fale-conosco.fale-conosco', {
    only: ['create'],
});
