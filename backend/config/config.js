module.exports = {
  development: {
    username: "amigo",
    password: null,
    database: "ultimate",
    host: "localhost",
    dialect: "postgres",
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      'createdAt': 'created_at',
      'updatedAt': 'updated_at',
    },
  },
};