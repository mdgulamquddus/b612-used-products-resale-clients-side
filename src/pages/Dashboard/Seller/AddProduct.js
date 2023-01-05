import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductForm from "../../../components/Form/AddProductForm";
import { AuthContext } from "../../../context/AuthProvider";

const AddProduct = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const [buyDate, setBuyDate] = useState(new Date());
  const [addDate, setAddDate] = useState(new Date());
  console.log();
  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const title = event.target.title.value;
    const buy = format(buyDate, "P");
    const add = format(addDate, "P");
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];
    setLoading(true);
    // imageUpload(image)
    //   .then((res) => {
    //     const homeData = {
    //       location,
    //       title,
    //       from,
    //       to,
    //       price,
    //       total_guest,
    //       bedrooms,
    //       bathrooms,
    //       description,
    //       image: res.data,
    //       host: {
    //         name: user?.displayName,
    //         image: user?.photoURL,
    //         email: user?.email,
    //       },
    //     };
    //     console.log(homeData);
    //     addHome(homeData).then((data) => {
    //       console.log(data);
    //       setLoading(false);
    //       toast.success("Home Added!");
    //       navigate("/dashboard/manage-homes");
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
  };

  const handleImageChange = (image) => {
    console.log(image);
    setPreview(window.URL.createObjectURL(image));
    setUploadButtonText(image.name);
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 py-8 text-center">
        Add Product
      </h1>
      <AddProductForm
        handleSubmit={handleSubmit}
        buyDate={buyDate}
        setBuyDate={setBuyDate}
        addDate={addDate}
        setAddDate={setAddDate}
        loading={loading}
        handleImageChange={handleImageChange}
        preview={preview}
        uploadButtonText={uploadButtonText}
      />
    </>
  );
};

export default AddProduct;