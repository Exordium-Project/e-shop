import Category from "../models/Category.js";
import Error from "../error/Error.js";

export default class CategoryService{

    static async createCategory(categoryRequest){
        const category = await Category.findOne({
            where: {
                name: categoryRequest.name,
            },
        }).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        if(category){
            return new Error(409, "A category with the given name already exists.");
        }

        const createdCategory = await Category.create(categoryRequest).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return createdCategory;
    }

    static async getAllCategories() {
        const categories = await Category.findAll({
            attributes: ["id", "name"],
        }).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return categories;

    }

    static async deleteCategory(categoryId) {
        const category = await Category.findOne({
            where: {
                id: categoryId,
            },
        }).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        if(category === null){
            return false;
        }

        await Category.destroy({
            attributes: ["id"],
            where: {
                id: categoryId,
            },
        }).catch(error =>{
            console.log(error);
            return new Error(500, error.message);
        });

        return true;
    }
}