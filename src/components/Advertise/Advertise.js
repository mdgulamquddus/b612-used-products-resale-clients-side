import { useQuery } from "@tanstack/react-query";
import React from "react";

const Advertise = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/products/advertise`).then((res) =>
        res.json()
      ),
  });
  console.log(products);
  return (
    <>
      {products.length > 0 && (
        <div className="container mx-auto my-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            Advertise Product
          </h2>
          <div>
            {products.map((product) => (
              <div
                key={product._id}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
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
