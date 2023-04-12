import axios from "axios"


export const getClearShoesMen = async (req, res) => {
    try {
        const allProd = await axios.get("https://msdrop.com.ua/export/vywr/json")
        res.json({
            message: "success",
            data: allProd.data
        })
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}