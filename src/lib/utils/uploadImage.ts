import toast from "react-hot-toast";
import axios from "axios";
import { isOnline } from "../onlineStatus";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;
const preset: any = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_KEY;

const url: any = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

export const handleImage = async (e: any) => {
  if (isOnline()) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageDetails: any = {
        url: response.data.secure_url,
        id: response.data.public_id,
      };

      localStorage.setItem("imageUrl", JSON.stringify(imageDetails));
      return imageDetails;
    } catch (error) {
      toast.error("Image upload failled, Please try again");
      console.error("Error uploading image:", error);
    }
  } else toast.error("Please connect device to the internet");
};
