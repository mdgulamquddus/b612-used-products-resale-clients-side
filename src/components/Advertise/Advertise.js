import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../Spinner/Spinner";

const Advertise = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/products/advertise`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return <Spinner />;
  }
  console.log(products);
  return (
    <>
      {products.length > 0 && (
        <div className="container mx-auto my-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            Advertise Product
          </h2>
          <div className="grid lg:grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img src={product.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {product.model}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>price : ${product.price}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Hot Deal</div>
                    <div className="badge badge-outline">Good Product</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Advertise;
