import express from 'express';
const router = express.Router();
import NewController from '../app/controllers/NewController';
const newController = new NewController();
//newController.index:
function newRouter(){
    router.use('/', newController.index);
}
export default newRouter;