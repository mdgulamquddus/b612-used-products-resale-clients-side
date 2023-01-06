import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteUser } from "../../../api/users";
import DeleteModal from "../../../components/Modal/DeleteModal";
import Spinner from "../../../components/Spinner/Spinner";

const AllUsers = () => {
  let [isOpen, setIsOpen] = useState(false);

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/users`).then((res) => res.json()),
  });

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const modalHandler = (id) => {
    console.log(id);

    deleteUser(id)
      .then((data) => {
        console.log(data);
        refetch();
        toast.success("User Deleted Successfully");
      })
      .catch((err) => console.log(err));
    closeModal();
  };
  console.log(users);
  const handleVerifySeller = (id) => {
    console.log(id);
    fetch(`${process.env.REACT_APP_API_URL}/users/verify/${id}`, {
      method: "PUT",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Seller Verified Successfully");
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Eamil</th>
              <th>Role</th>
              <th>Verify</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{user?.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user?.role}</td>
                  <td>Active</td>
                  <td>
                    {user?.role === "Buyer" || user?.role === "admin" ? (
                      ""
                    ) : (
                      <button
                        onClick={() => handleVerifySeller(user?._id)}
                        className="btn btn-success btn-xs"
                      >
                        {user?.status === "verified"
                          ? user?.status
                          : "un verified"}
                      </button>
                    )}
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
                      id={user._id}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
