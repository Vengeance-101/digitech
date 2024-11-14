"use client";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import sendEmail from "@/FormApi/formApi";
const ContactForm = () => {
  const getData = {
    name: "",
    email: "",
    phone: "",
    comments: "",
  };

  const [formData, setFormData] = useState(getData);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();
    try {
      // Send data to the backend
      const response = await sendEmail(formData);
      toast.success(response.message);
      setFormData({ name: "", email: "", phone: "", comments: "" }); // Reset form
    } catch (error) {
      toast.error("Failed to send email. Please try again.");
    }
  };
  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="w-full">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-1/2">
            <div className="form-group">
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email*"
                type="email"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="w-1/2">
            <div className="form-group">
              <input
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone"
                type="text"
                autoComplete="off"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full">
            <div className="form-group">
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                placeholder="Tell Us About Project *"
                autoComplete="off"
                value={formData.comments}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div className="w-full">
          <button
            type="submit"
            name="submit"
            id="submit"
            className="flex items-center gap-1"
          >
            <i className="text-3xl">
              <IoIosSend />
            </i>
            Get in Touch
          </button>
        </div>

        <div className="w-full alert-notification">
          <div id="message" className="alert-msg"></div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
