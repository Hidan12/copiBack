import "dotenv/config.js"
import "../../config/dataBase.js"
import Brand from "../Brand.js"

const brands = [
    {
        name: "Adidas"
    },
    {
        name: "Samsung"
    },
    {
        name: "Nike"
    },
    {
        name: "Corona"
    },
    {
        name: "Acer"
    },
]
Brand.insertMany(brands)