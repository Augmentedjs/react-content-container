import About from "./about.js";

const devServer = (devServer) => {
  const app = devServer.app;
  /* About */

  app.get("/about", (req, res) => {
    return res.status(200).send(About.toHTML());
  });
};

export default devServer;
