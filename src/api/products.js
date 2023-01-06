// Add a Product
export const addProduct = async (productData) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      //   authorization: `Bearer ${localStorage.getItem("Ubuy-token")}`,
    },
    body: JSON.stringify(productData),
  });

  const data = await response.json();
  return data;
};

// Delete a Product
export const deleteProduct = async (id) => {
  console.log(id);
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/products/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        //   authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
      },
    }
  );
  const result = await response.json();
  return result;
};