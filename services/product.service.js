
export const syncProdsService = async (prods) => {
  try {
    // console.log(prods)
    const dbProds = await Product.find()

    for (let dbProd of dbProds) {
      let isInc = prods.find(el => el.name === dbProd.name)

      if (isInc) {
        // console.log("ex")
      } else {
        console.log("not")

        await Product.deleteOne({name: dbProd.name})
      }
    } 
  } catch (err) {
    throw new Error(err.message)
  }
}
