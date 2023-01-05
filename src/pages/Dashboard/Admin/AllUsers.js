import React, { useContext, useEffect, useState } from "react";
import { getAllUsers } from "../../../api/users";
import { AuthContext } from "../../../context/AuthProvider";

const AllUsers = () => {
  const { setLoading } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    setLoading(true);
    getAllUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  };
  console.log(users);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Eamil</th>
              <th>Role</th>
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
                  <th>
                    <button className="btn btn-accent btn-xs">Delete</button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
