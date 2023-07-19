const fastify = require("fastify")({ logger: true });

const swaggerOptions = {
  swagger: {
    info: {
      title: "Product Page",
      description: "My Description.",
      //   version: "1.0.0",
    },
    // host: "localhost",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    // tags: [{ name: "Default", description: "Default" }],
  },
};

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
  swagger: {
    info: { title: "fastify-api" },
  },
};

fastify.register(require("@fastify/swagger"), swaggerOptions);
fastify.register(require("@fastify/swagger-ui"), swaggerUiOptions);
fastify.register(require("./routes/items"));

PORT = 5000;
const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
start();
