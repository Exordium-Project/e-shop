import Type from "../models/Type.js"

export default class TypeService {

    static async createType(typeData) {
        const type = await Type.findOne({
            where: {
                name: brandData.name
            }
        })

        if (type)
            res.json({
                error: "Type with this name already exists"
            })

        const newType = await Type.create(typeData)

        return true;
    }

    static async getAllTypes() {
        const types = await Type.findAll({
            attributes: ["name"]
        })

        return types;
    }
}