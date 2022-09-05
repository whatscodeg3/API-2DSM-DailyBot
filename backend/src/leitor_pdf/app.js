const express = require("express");
const fileUpload = require("express-fileUpload");
const PdfParse = require("pdf-parse");

const app = express();

app.get("/", (request, response) => {
    return response.sendFile(__dirname + "/index.html");
})

app.use("/", express.static("public"))
app.use(fileUpload());


app.post("/extract-text", (request, response) => {
    if (!request.files && !request.files.pdfFile) {
        response.status(400);
        response.end();
    }


    PdfParse(request.files.pdfFile).then(result => {
        response.send(result.text);
    })
})


app.listen(3000, () => console.log("Servidor rodando na porta 3000"))

