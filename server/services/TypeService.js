import Type from "../models/Type.js"
import Error from "../error/Error.js";
import Category from "../models/Category.js";

export default class TypeService {

    static async createType(typeData) {
        const type = await Type.findOne({
            where: {
                name: typeData.name
                }
        }).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        if (type)
            return new Error(409, "A type with the given name already exists.");

        const created = await Type.create(typeData).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return created;

    }

    static async getAllTypes() {
        const [types] = await Promise.all([Type.findAll({
            attributes: ['id','name',"categoryId"]
        })]).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return types;

    }
}