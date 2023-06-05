const express = require("express");
require("dotenv").config();
const cors = require("cors");
const productosRoutes = require("./v1/routes/productosRoutes");
const v1AuthRouter = require("./v1/routes/authRoutes");
const pedidosRouter = require("./v1/routes/pedidosRoutes")
const clientesRouter = require("./v1/routes/clientesRoutes")
const inventarioRouter = require("./v1/routes/inventarioRoutes")

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

const port = process.env.PORT || 3300;


app.use("/api/v1/auth", v1AuthRouter);
app.use("/api/v1/productos", productosRoutes)
app.use("/api/v1/pedidos", pedidosRouter)
app.use("/api/v1/clientes", clientesRouter)
app.use("/api/v1/inventario", inventarioRouter)

app.listen(port, () => {
  console.log(`Aplicacion corriendo en el puerto ${port}`);
  V1SwaggerDocs(app, port);

  
});

