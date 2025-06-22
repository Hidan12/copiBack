import "dotenv/config.js"
import "../../config/dataBase.js"
import Category from "../Category.js"

const categories = [
    {
      nombre: "Camisas",
      sizes: [
        "XS", "S", "M", "L", "XL", "XXL", "XXXL", "4XL", "5XL", "6XL"
      ]
    },
    {
      nombre: "Electrónica"
    },
    {
      nombre: "Muebles",
      sizes: ["Pequeño", "Mediano", "Grande"]
    },
    {
      nombre: "Juguetes"
    },
    {
      nombre: "Zapatos",
      sizes: [
        "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"
      ]
    },
    {
        nombre: "Pantalones",
        sizes: [
          "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50"
        ]
    }
  ]

Category.insertMany(categories)