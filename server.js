import express from "express"; // Importa o módulo Express para criar a aplicação web
import routes from "./src/routes/postsRoutes.js";

const app = express(); // Cria uma instância do Express para iniciar a aplicação
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});
// control B / control J / ( npm run dev )
// Alt Z