import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, like sending the data to a server
    console.log("Form Submitted", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      {isSubmitted ? (
        <div className="bg-green-100 text-green-700 p-4 rounded-md text-center">
          Thank you for reaching out! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full border-2 border-gray-300 p-2 rounded-lg focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full border-2 border-gray-300 p-2 rounded-lg focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message"
              className="w-full border-2 border-gray-300 p-2 rounded-lg focus:border-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
