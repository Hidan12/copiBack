import Brand from "../models/Brand.js";

const newBrand = async (brand) =>{
    try {
        const brandData = await Brand.create({
            name: brand.name,
            image: brand.img
        })
        
        return brandData._id
    } catch (error) {
        return error
    }
}

export default newBrand