import logo from "./logo.svg";
import "./App.css";
import { data } from "./data";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    category: "",
    brandName: "",
    mainCategory: "",
    lotSize: "",
    subCategory: "",
    productCombo: false,
    type: "",
  });
  const [config, setConfig] = useState([]);
  const [formDataError, setFormDataError] = useState("");
  const [mainCategory, setMainCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const validateForm = () => {
    for (let key in formData) {
      if (key == "lotSize") {
        if (Number(formData.lotSize) < 3) {
          setFormDataError("Lot Size should be between 3 to 50");
          return false;
        }
      }
      if (!formData[key]) {
        setFormDataError("Please select all the fields");
        return false;
      }
    }
    return true;
  };

  const createPayload = () => {
    const selectedConfig = config.filter((con) => con.name == formData.type);
    const selectedSuperCategory = data.categories.filter(
      (cat) => cat.label == formData.category
    );
    console.log(formData, "formData");
    const selectedSubCategory = subCategory.filter(
      (cat) => cat.value == formData.subCategory
    );
    const selectedmainCategory = mainCategory.filter(
      (cat) => cat.value == formData.mainCategory
    );
    const selectedBrand = data.brands.filter(
      (brand) => brand.name == formData.brandName
    );
    return {
      brandName: formData.brandName,
      lotSize: formData.lotSize,
      mainCategory: formData.mainCategory,
      setConfiguration: selectedConfig[0].setConfiguration,
      subCategory: formData.subCategory,
      superCategory: formData.category,
      superCategoryId: selectedSuperCategory[0].categoryid,
      subCategoryId: selectedSubCategory[0].id,
      brandId: selectedBrand[0].id,
      mainCategoryId: selectedmainCategory[0].id,
      isCombo: formData.productCombo,
      config: formData.type,
    };
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setFormDataError("");
      const paylod = createPayload();
      console.log(paylod);
    }
  };
  const handleChange = (e) => {
    const fieldName = e.target.id;
    const fieldValue = e.target.value;
    if (fieldName == "category") {
      const selectedCategory = data.categories.filter(
        (d) => d.label == fieldValue
      );
      setConfig(selectedCategory[0].config);
      setMainCategory(selectedCategory[0].mainCategories);
      if (selectedCategory[0].mainCategories.length > 1) {
        setSubCategory(selectedCategory[0].mainCategories[0].subCategories);
      } else {
        setSubCategory([]);
      }
    } else if (fieldName == "mainCategory") {
      const selectedMainCategory = mainCategory.filter(
        (d) => d.value == fieldValue
      );
      setSubCategory(selectedMainCategory[0].subCategories);
      setFormData({ ...formData, subCategory: "", [fieldName]: fieldValue });
      return;
    }
    setFormData({
      ...formData,
      [fieldName]: fieldName == "productCombo" ? e.target.checked : fieldValue,
    });
  };


  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={handlesubmit} onChange={handleChange}>
          <h1>Base Details</h1>
          <div className="text-container">
            <div>
              <label>Select Super Category</label>
              <div>
                {data.categories.map((category, index) => (
                  <>
                    {" "}
                    <input
                      type="radio"
                      value={category.label}
                      id="category"
                      checked={formData.category == category.label}
                    ></input>
                    <span>{category.label}</span>
                  </>
                ))}
              </div>
            </div>
            <div>
              <label>Brand Name</label>
              <select id="brandName">
                <option value="">Select Value</option>
                {data.brands.map((brand, index) => (
                  <option value={brand.name}>{brand.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div>
              <label>Main category</label>
              <select id="mainCategory">
                <option value="">Select Value</option>
                {mainCategory.map((category, index) => (
                  <option value={category.value}>{category.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Choose Lot size</label>
              <input type="number" id="lotSize" />
            </div>
          </div>
          <div>
            <div>
              <label>Sub category</label>

              <select id="subCategory">
                <option value="">Select Value</option>
                {subCategory.map((subCategory, index) => (
                  <option value={subCategory.value}>{subCategory.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Product Combo</label>
              <input
                type="checkbox"
                checked={formData.productCombo}
                id="productCombo"
              />
            </div>
          </div>
          {config && (
            <div>
              <label>Set Type</label>
              {config.map((con, index) => (
                <>
                  <input
                    type="radio"
                    value={con.name}
                    id="type"
                    checked={formData.type == con.name}
                  ></input>
                  <span>{con.name}</span>
                </>
              ))}
            </div>
          )}

          {formDataError && <p className="error">{formDataError}</p>}
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;