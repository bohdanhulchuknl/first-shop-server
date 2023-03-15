import ShoesCategory from "../schemas/ShoesCategory.model.js";
import MenShoesSubCategories from "../schemas/MenShoesSubCategories.model.js";

export const createCategory = async (req, res) => {
  try {
    const { categoryType, categoryName, data } = req.body;
    if (categoryType === "shoes") {
      const newShoesCategory = new ShoesCategory({
        categoryName,
        menShoes: data?.menShoes || [],
        womenShoes: data?.womenShoes || [],
      });
      const savedShoesCategory = await newShoesCategory.save();
      return res.json({
        message: "Shoes category created",
        data: savedShoesCategory,
      });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

export const createMenShoesSubcategory = async (req, res) => {
  try {
    const { subCategoryName, parentCategoryData } = req.body;
    console.log(req.body);
    const newMenShoesSubCategory = new MenShoesSubCategories({
      subCategoryName,
      subCategoryProds: [],
    });

    const savedNewMenShoesSubCategory = await newMenShoesSubCategory.save();
    console.log("ok");
    const parentCategory = await ShoesCategory.findById(parentCategoryData.id);

    if (parentCategoryData.for === "men") {
      parentCategory.menShoes.push(savedNewMenShoesSubCategory._id);
    }

    await parentCategory.save();
    res.json({
      message: "New men shoes sub category created",
      data: savedNewMenShoesSubCategory,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

export const addNewProduct = async (req, res) => {
  const {category, to, subCategory } = req.body;
  if (category === 'shoes') {
    if (to === men) {
        
    }
  }
  try {
    res.json({
      message: "added",
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};
