export const checkImage = (file: File) => {
  let err = '';
  if (!file) return err = "File does not exist.";

  if (file.size > 2 * 1024 * 1024) // 2MB
    err = "The maximum size of image is 2MB.";
  
  return err;
}

export const imageUpload = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "dstnawnf");
  formData.append("cloud_name", "dw6i0vp1r");

  const res = await fetch("https://api.cloudinary.com/v1_1/dw6i0vp1r/upload", {
    method: "POST",
    body: formData
  });
  const data = await res.json();
  return { public_id: data.public_id, url: data.secure_url };
}