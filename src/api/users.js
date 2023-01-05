export const getRole = async (email) => {
  console.log(email);
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("Ubuy-token")}`,
      },
    }
  );
  const user = await response.json();
  return user?.role;
};

// Get All Users
export const getAllUsers = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      //   authorization: `Bearer ${localStorage.getItem("Ubuy-token")}`,
    },
  });
  const users = await response.json();

  return users;
};
