import Type from "../models/Type.js"

export default class TypeService {

    static async createType(typeData) {
        try {
            const type = await Type.findOne({
                where: {
                    name: brandData.name
                }
            })

            if (type)
                res.json({
                    error: "Type with this name already exists"
                })

            /*const newType = UNUSED*/await Type.create(typeData);

            return true;
        } catch(err){
            console.log(err);
            return false;
        }
    }

    static async getAllTypes() {
        try {
            const [types] = await Promise.all([Type.findAll({
                attributes: ["name"]
            })])

            return types;
        } catch(err){
            console.log(err);
            return null;
        }
    }
}