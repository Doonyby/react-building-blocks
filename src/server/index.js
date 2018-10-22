import WebServer from "./web.server.js"

let webServer = new WebServer();
webServer.start()
  .then(() => {
    console.log('Web server started!')
  }).catch((err) => {
    console.error(err);
    console.log('Failed to start server.')
  });
