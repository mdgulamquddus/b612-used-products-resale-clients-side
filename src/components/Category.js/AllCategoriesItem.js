import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AllCategoriesItem = () => {
  const [verified, setVerified] = useState("");
  const handleVerifySeller = (email) => {
    console.log(email);
    axios.get(`${process.env.REACT_APP_API_URL}/user/${email}`).then((res) => {
      console.log(res.data.status);
      setVerified(res.data.status);
    });
  };
  const { category } = useParams();
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/products/${category}`).then(
        (res) => res.json()
      ),
  });

  console.log(products);
  console.log(verified);
  return (
    <div>
      <h1>All Item</h1>
      <div className="container mx-auto grid lg:grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={product.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.model}</h2>
                <div className="flex">
                  <p>seller :{product.seller.name} </p>
                  <div
                    onChange={handleVerifySeller(product.seller.email)}
                    className="badge badge-primary"
                  >
                    {/* {product.seller?.status
                      ? product.seller?.status
                      : "unvierfied"} */}
                    {verified === "verified" ? verified : "unvierfied"}
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
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
