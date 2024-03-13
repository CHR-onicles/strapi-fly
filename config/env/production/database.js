module.exports = ({ env }) => ({
    connection: {
        client: "postgres",
        connection: env("DATABASE_URL"),
    },
});