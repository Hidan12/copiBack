import Category from "../models/Category.js";


const newCategory = async (category) => {
    try {
        const categoryData = await Category.create({name: category.name, image: category.img})
        
        return categoryData._id
    } catch (error) {
        return error
    }
}
export default newCategory