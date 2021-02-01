# webpack_initial_setup
![alt text](https://img.shields.io/badge/version-v1.0.0-blue)
![alt text](https://img.shields.io/badge/webpack-5.19.0-blue)
![alt text](https://img.shields.io/badge/typescript-4.1.3-blue)
![alt text](https://img.shields.io/badge/express-4.17.1-blue)

This git is used as webpack initial setup when it's come to developpement in nodejs environnement with server + client in typescript. 
Using express server side and basic models/views/controllers for client side.

## Used technologies
 - [NodeJS](https://nodejs.org/en/about/) is an environnement that give you the possibility to do your back-end stuff in js.
 - [TypeScript](https://www.typescriptlang.org/) is an upgrade of JavaScript thats add type checking and interface. (Try it and never come back to js 🤩).
 - [Express](https://expressjs.com/fr/starter/hello-world.html) is a NodeJS module to create a server and handle url routes.
 - [WebPack](https://webpack.js.org/) is a tool that do some compilation works. For example, it's compile .ts files in .js (because .ts files aren't understanded by navigator).

## Try it:

Be sure that you have installed [NodeJS](https://nodejs.org/en/) first. Then open your terminal in this git project directory and type :
```shell
npm ci
```
"ci" mean clean install. It's will download used modules in the project like Express with the version I've used when I've created this git. 
If you want to update module versions, you can type "install" instead of "ci", but you will maybe have to do some fix if module have changed.
```shell
npm start
```
This command is defined in package.json file. It will compile files and run the server.

Now you can go on http://localhost:8080 and open the console (f12) to see the unfamous "hello anon".

## Where I start?

What do you want to do? Back-end? Front-end? If you want to do **front end**, you can start to watch folders ./src/models & ./src/views & ./src/controllers. If you want to do
back-end stuff, look at ./src/index.ts.
