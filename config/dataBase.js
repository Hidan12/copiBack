
/**
 * The function `conectBaseDate` connects to a MongoDB database using the provided URL.
 */
import mongoose from "mongoose"

const url = process.env.URI_MONGO


async function conectBaseDate (){
    try {
        await mongoose.connect(url)
        console.log("bd conect");
                 
    } catch (error) {
        console.log(error)
        
    }
}
conectBaseDate()