import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import blueTick from "../../assets/check.png";
import { AuthContext } from "../../context/AuthProvider";
import { addWishList, bookingProduct } from "../../api/products";
import { toast } from "react-hot-toast";
const AllCategoriesItem = () => {
  const { user } = useContext(AuthContext);
  const [verified, setVerified] = useState("");
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
  const { category } = useParams();
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/products/${category}`).then(
        (res) => res.json()
      ),
  });

  const handleWishList = (product) => {
    const productData = {
      product: product,
      userEmail: user?.email,
    };
    addWishList(productData)
      .then((res) => {
        toast.success("Product Added in Wish List");
      })
      .catch((err) => console.log(err));
  };

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

  console.log(products);
  console.log(verified);
  return (
    <div className="my-3">
      <div className="container mx-auto grid lg:grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img className="h-48 w-full" src={product.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.model}</h2>
                <div className="flex items-center">
                  <p>seller: {product.seller.name} </p>
                  <div onChange={handleVerifySeller(product.seller.email)}>
                    {verified === "verified" ? (
                      <div>
                        <img className="w-4 h-4" src={blueTick} alt="" />
                      </div>
                    ) : (
                      "unvierfied"
                    )}
                  </div>
                </div>
                <div className="cardt-actions my-3">
                  <Link
                    to={`/product-details/${product._id}`}
                    className="btn btn-primary btn-xs btn-outline"
                  >
                    Details Product
                  </Link>
                </div>
                <div className="card-actions justify-between">
                  <div>
                    <button
                      onClick={() => handleBooking(product)}
                      className="btn btn-outline btn-warning btn-sm"
                    >
                      Add Product
                    </button>
                  </div>
                  <div className="card-actions">
                    <div
                      onClick={() => handleWishList(product)}
                      className="btn btn-sm btn-outline btn-accent"
                    >
                      Add to Wish List
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h3 className="text-4xl h-screen flex items-center justify-center">
              No Product For Sale
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCategoriesItem;
