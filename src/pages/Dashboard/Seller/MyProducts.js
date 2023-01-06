import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { deleteProduct } from "../../../api/products";
import DeleteModal from "../../../components/Modal/DeleteModal";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  let [isOpen, setIsOpen] = useState(false);
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(
        `${process.env.REACT_APP_API_URL}/products/seller/${user?.email}`
      ).then((res) => res.json()),
  });
  if (isLoading) {
    <Spinner />;
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const modalHandler = (id) => {
    console.log(id);

    deleteProduct(id)
      .then((data) => {
        console.log(data);
        refetch();
        toast.success("Product Deleted Successfully");
      })
      .catch((err) => console.log(err));
    closeModal();
  };
  const handleAdvertise = (id) => {
    console.log(id);
    fetch(`${process.env.REACT_APP_API_URL}/products/advertise/${id}`, {
      method: "PUT",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Product For Advertise Requseted Successfully");
          refetch();
        }
      });
  };
  console.log(products);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Display</th>
            <th>Model</th>
            <th>Status</th>
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
                    <div className="mask  w-40 h-28">
                      <img
                        src={product.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">{product.model}</div>
                </div>
              </td>
              <td>{product.status}</td>

              <td>
                <button
                  onClick={() => handleAdvertise(product._id)}
                  className="btn btn-success btn-xs rounded"
                >
                  Advertise
                </button>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  onClick={openModal}
                  className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-accent opacity-50 rounded"
                  ></span>
                  <span className="relative">Delete</span>
                </span>
                <DeleteModal
                  isOpen={isOpen}
                  closeModal={closeModal}
                  modalHandler={modalHandler}
                  id={product._id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
