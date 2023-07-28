import { readdirSync } from "fs";
import express, { Router } from "express";
const router: Router = Router();

const PATH_ROUTES = __dirname;

function removeExtension(fileName: string): string {
  const cleanFileName = <string>fileName.split(".").shift();
  return cleanFileName;
}

/**
 *
 * @param file tracks.ts
 */
function loadRouter(file: string): void {
  const name = removeExtension(file);
  if (name !== "index") {
    import(`./${file}`).then((routerModule) => {
      console.log("cargado", name);
      router.use(`/${name}`, routerModule.router);
      console.log(routerModule.router.stack.map((r:any) => r.route.path));
      
    });
  }
}

readdirSync(PATH_ROUTES).filter((file) => loadRouter(file));

export default router;
