import Type from "../models/Type.js"

export default class TypeService {

    static async createType(typeData) {
        const type = await Type.findOne({
            where: {
                name: typeData.name
            }
        });

        if (type)
            return new Error(409, "A type with the given name already exists.");

        const created = await Type.create(typeData).catch(error =>{
            console.log(error);
            return new Error(500, error.message);
        });

        return created;

    }

    static async getAllTypes() {
        const [types] = await Promise.all([Type.findAll({
            attributes: ["name"]
        })]).catch(error =>{
            console.log(error);
            return new Error(500, error.message);
        });

        return types;

    }
}