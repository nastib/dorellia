module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd533e964552db604c4f2e4d853d5625d'),
  },
});
