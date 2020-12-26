module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', '515f5f6ced6965034b2dd3a2e8305710'),
        },
    },
    url: env('BASE_URL'),
});
