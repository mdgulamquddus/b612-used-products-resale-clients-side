import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteBookProduct } from "../../../api/products";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider";

const BuyerAllProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(
        `${process.env.REACT_APP_API_URL}/product/booking/${user?.email}`
      ).then((res) => res.json()),
  });
  if (isLoading) {
    return <Spinner />;
  }

  const handleDelet = (id) => {
    deleteBookProduct(id)
      .then((res) => {
        toast.success("Deleted Successfully");
        refetch();
      })
      .catch((err) => console.log(err));
  };
  console.log(products);

  return (
    <div className="overflow-x-auto w-full container mx-auto mt-5">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Display</th>
            <th>Product Model</th>
            <th>Seller Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={product?.bookProduct?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      {product?.bookProduct?.seller?.name}
                    </div>
                    <div className="text-sm opacity-50">
                      {product?.bookProduct?.location}
                    </div>
                  </div>
                </div>
              </td>
              <td>{product?.bookProduct?.model}</td>
              <td>{product?.bookProduct?.seller?.email}</td>
              <th>
                <Link
                  to={`/dashboard/checkout/${product._id}`}
                  className="btn btn-success btn-xs"
                >
                  Pay
                </Link>
              </th>
              <th>
                <button
                  onClick={() => handleDelet(product._id)}
                  className="btn btn-accent btn-xs"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BuyerAllProduct;
