import express from "express";
import http from "http";

declare global {
    namespace NodeJS {
        interface Global {
            viewsPath:string;
            cssPath:string;
            controllersPath:string;
            serverPath:string;
        }
    }
}

global.viewsPath = process.cwd() + "/dist/public/views/";
global.cssPath = process.cwd() + "/dist/public/views/";
global.controllersPath = process.cwd() + "/dist/public/";
global.serverPath = process.cwd() + "/dist/";

const app = express()
app.use(express.static('./dist/public'));

const port = 8080;

const httpServer = new http.Server(app);

app.get('/', (req, res) => {
    res.sendFile(global.viewsPath + "root.html")
})

httpServer.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})