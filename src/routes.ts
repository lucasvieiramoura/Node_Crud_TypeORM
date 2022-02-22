import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoryController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";


const routes = Router();

routes.post("/categories/api", new CreateCategoryController().handle);
routes.get("/categories/api", new GetAllCategoriesController().handle);
routes.delete("/categories/api/:id", new DeleteCategoryController().handle);
routes.put("/categories/api/:id", new UpdateCategoryController().handle);

routes.post('/videos/api', new CreateVideoController().handle);
routes.get("/videos/api", new GetAllVideosController().handle);


export {routes};