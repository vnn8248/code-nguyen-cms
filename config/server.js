module.exports = ({ env }) => ({
  host: env('APP_HOST', '0.0.0.0'),
  port: env('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '12bc44a6fa7782867cedc55422f0a1e2'),
    },
  },
});
