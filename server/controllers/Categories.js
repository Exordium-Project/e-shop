import express from 'express';
import categoryService from '../services/CategoryService.js';
import Error from '../error/Error.js';
const categoriesController = express.Router();

categoriesController.post("/", async (req, res) => {
    const categoryRequest = [
        ...req.body,
]

    const createdCategory = await categoryService.createCategory(categoryRequest).catch(error =>{
        console.log(error);
        return new Error(500, error.message);
    });

    if(createdCategory instanceof Error){
        res.status(createdCategory.statusCode);
    }

    res.send(createdCategory);
})

categoriesController.get("/", async (req, res) => {
    const categories = await categoryService.getAllCategories();

    if(categories instanceof Error){
        res.status(categories.statusCode);
    }

    res.send(categories);
})

categoriesController.delete("/", async (req, res) => {
    const categoryId = req.body.id;

    const result = await categoryService.deleteCategory(categoryId);

    if(result instanceof Error){
        res.status(result.statusCode);
        return res.send(false);
    }

    res.send(result)
})

export default categoriesController;