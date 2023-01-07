import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteProduct } from "../../../api/products";
import DeleteModal from "../../../components/Modal/DeleteModal";
import Spinner from "../../../components/Spinner/Spinner";

const AllProducts = () => {
  let [isOpen, setIsOpen] = useState(false);
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/products`).then((res) =>
        res.json()
      ),
  });
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
  if (isLoading) {
    <Spinner />;
  }
  // console.log(products[0].status);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Display</th>
            <th>Email</th>
            <th>Condition</th>
            <th>Status</th>
            <th>Add Date</th>
            <th>Purchage Year</th>
            <th>Price</th>
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
                        src={product.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.seller.name}</div>
                    <div className="text-sm opacity-50">{product.location}</div>
                  </div>
                </div>
              </td>
              <td>
                {product.seller.email}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {product.mobileNumber}
                </span>
              </td>
              <td>{product.condition}</td>
              <td>{product.status}</td>
              <td>{product.addDateProduct}</td>
              <td>{product.purchageDateProduct}</td>
              <td>{product.price}</td>

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

export default AllProducts;
