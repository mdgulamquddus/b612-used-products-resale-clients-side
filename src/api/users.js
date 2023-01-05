export const getRole = async (email) => {
  console.log(email);
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
      },
    }
  );
  const user = await response.json();
  return user?.role;
};
