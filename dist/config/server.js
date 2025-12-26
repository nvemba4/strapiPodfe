"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
        // Provide defaults so dev doesn't crash; override with strong secrets in env
        keys: env.array('APP_KEYS', ['changemeKey1', 'changemeKey2']),
    },
});
