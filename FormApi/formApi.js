import axios from "axios";

const sendEmail = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/contact",
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error("Error sending email");
  }
};

export default sendEmail;
