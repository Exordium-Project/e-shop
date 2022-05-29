import Type from "../models/Type"

module.exports.createType = async(typeData) => {
    const type = await Type.findOne({
        where: {
            name: brandData.name
        }
    })

    if(type)
        res.json({error: "Такъв тип съществува"})

    const newType = await Type.create(typeData)

    return true;
}

module.exports.getAllTypes = async() => {
    const types = await Type.findAll({
        attributes: ["name"]
    })

    return types;
}