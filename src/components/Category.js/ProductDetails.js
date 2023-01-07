import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { bookingProduct } from "../../api/products";
import blueTick from "../../assets/check.png";
import { AuthContext } from "../../context/AuthProvider";
import Spinner from "../Spinner/Spinner";

const ProductDetails = () => {
  const productId = useParams();
  console.log(productId);
  const [verified, setVerified] = useState("");
  const { user } = useContext(AuthContext);

  const { data: product = [], isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch(
        `${process.env.REACT_APP_API_URL}/productsDetails/${productId?.id}`
      ).then((res) => res.json()),
  });

  const handleVerifySeller = (email) => {
    console.log(email);
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${email}`)
      .then((res) => {
        console.log(res.data.status);
        setVerified(res.data.status);
      })
      .catch((err) => console.log(err));
  };

  if (isLoading) {
    return <Spinner />;
  }
  const handleBooking = (product) => {
    const bookData = {
      bookProduct: product,
      userEmail: user?.email,
    };
    bookingProduct(bookData)
      .then((res) => {
        toast.success("Product Booking Successfully");
      })
      .catch((err) => console.log(err));
    console.log(bookData);
  };
  //   console.log(product);
  return (
    <div>
      {/* Header */}
      <div className=" h-[600px]">
        <div className=" h-full overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-start h-full w-full"
            src={product?.image}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="md:flex justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-12">
        {/* Details */}
        <div className="flex-1 max-w-lg">
          <div className="flex justify-between">
            <div>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {product?.model}
              </h2>
              <br />
              <h3 className="text-gray-400 text-xs tracking-widest title-font mb-1 mt-1">
                {product?.location}
              </h3>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <img
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 border rounded-full"
                  src={product?.seller?.image}
                />
                <div
                  className="flex items-center"
                  onChange={handleVerifySeller(product?.seller?.email)}
                >
                  <p className="mx-2">{product?.seller?.name}</p>
                  {verified === "verified" ? (
                    <div>
                      <img className="w-4 h-4" src={blueTick} alt="" />
                    </div>
                  ) : (
                    "unvierfied"
                  )}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-4 text-gray-500">{product?.description}</div>
          <br />
          <div className="flex gap-3 items-center text-xl text-blue-600">
            <p>Read more about the space</p>
          </div>
          <br />
          <div>
            <p className="text-xl text-gray-900">Reviews</p>
            <div className="flex gap-1 mb-2">
              <span>4.8 (10 reviews)</span>
            </div>
          </div>
        </div>

        {/* Cart */}
        <div className="p-4 md:w-1/2 lg:w-1/3 w-full h-full rounded shadow-lg">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-2">
            ${product.price}
            <span className="font-thin"></span>
          </h1>

          <p>
            Purcage Price: $
            {product?.purchagePrice ? product.purchagePrice : "Not available"}
          </p>

          <div className="flex border-t border-b mb-6 border-gray-200 py-2">
            <span className="text-gray-900 font-bold">Total</span>
          </div>
          <div className="mt-6 mb-2">
            <Link to="/checkout" className="btn btn-success btn-xs">
              Pay
            </Link>
          </div>
          <div className="mt-6 mb-2">
            <button
              onClick={() => handleBooking(product)}
              className="btn btn-outline btn-warning btn-sm"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
