export const imageUpload = async (image) => {
  if (image) {
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_api}`;

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    return data.data.display_url;
  }
};
