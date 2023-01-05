export const setAuthToken = (user, opt) => {
  console.log(user, opt);
  const currentUser = {
    email: user?.email,
    role: opt,
  };
  //Save Db and get Token
  fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.token);

      // Save Token in localstorage
      localStorage.setItem("Ubuy-token", data.token);
    });
};
