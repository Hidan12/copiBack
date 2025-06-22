import SubCategory from "../models/SubCategory.js";
import '../models/Category.js'

const newSubCategory = async (subCategory) =>{
    console.log(subCategory);
    
    try {
        const subCategoryData = await SubCategory.create({
            name: subCategory.name,
            categoryId: subCategory.category,
            sizes: subCategory.size
        })
        return subCategoryData._id
    } catch (error) {
        return error
    }
}

export default newSubCategory