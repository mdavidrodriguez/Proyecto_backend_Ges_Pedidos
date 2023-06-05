const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Basic Meta Informations about our API
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Documentación API Gestión de Pedidos", version: "1.0.0" },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/v1/routes/authRoutes.js", "./src/database/Auth.js","./src/v1/routes/clientesRoutes.js", "./src/database/Clientes.js","./src/v1/routes/inventarioRoutes.js", "./src/v1/routes/Inventario.js", "./src/v1/routes/pedidosRoutes.js", "./src/database/Pedidos.js", "./src/v1/routes/productosRoutes.js", "./src/database/Productos.js", ],
  
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
const swaggerDocs = (app, port) => {
  // Route-Handler to visit our docs
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Make our docs in JSON format available
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(`Version 1 Docs are available on http://localhost:${port}/api/v1/docs`);
};

module.exports = { swaggerDocs };
