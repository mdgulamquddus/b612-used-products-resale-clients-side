import { format } from "date-fns";
import getYear from "date-fns/getYear";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { imageUpload } from "../../../api/imageUpload";
import { addProduct } from "../../../api/products";
import AddProductForm from "../../../components/Form/AddProductForm";
import { AuthContext } from "../../../context/AuthProvider";

const AddProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [purchageDate, setPurChageDate] = useState(new Date());
  const [addDate, setAddDate] = useState(new Date());
  console.log();
  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const model = event.target.model.value;
    const purchageDateProduct = getYear(purchageDate);
    const addDateProduct = format(addDate, "P");
    const price = event.target.price.value;
    const category = event.target.category.value;
    const condition = event.target.condition.value;
    const mobileNumber = event.target.mobileNumber.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];
    setLoading(true);

    imageUpload(image)
      .then((res) => {
        const productData = {
          location,
          model,
          condition,
          purchageDateProduct,
          addDateProduct,
          price,
          category,
          mobileNumber,
          description,
          email: user?.email,
          status: "available",
          image: res,
          seller: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        };
        console.log(productData);

        addProduct(productData).then((data) => {
          console.log(data);
          setLoading(false);
          toast.success("Product Added Successfully!");
          navigate("/dashboard/my-products");
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 py-8 text-center">
        Add Product
      </h1>
      <AddProductForm
        handleSubmit={handleSubmit}
        purchageDate={purchageDate}
        setPurChageDate={setPurChageDate}
        addDate={addDate}
        setAddDate={setAddDate}
        loading={loading}
      />
    </>
  );
};

export default AddProduct;
