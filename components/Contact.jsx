import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";

import { slideIn } from "../utils/motion";

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init("ecwWXb6CqTnmtiMYn"); // Initialize with your public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setForm({ ...form, [name]: sanitizedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate inputs
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_0flaip6", // Service ID
        "template_xiejn7n", // Template ID
        {
          from_name: DOMPurify.sanitize(form.name),
          from_email: DOMPurify.sanitize(form.email),
          message: DOMPurify.sanitize(form.message),
          reply_to: DOMPurify.sanitize(form.email)
        }
      );

      setSuccess("Thank you for your message. I will get back to you soon.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="xl:my-36 md:w-2/5 w-full bg-bgSecondaryDark xl:ml-36 lg:ml-16 md:ml-10 p-8 rounded-2xl shadow-md shadow-primary"
      id="contact"
    >
      <p className={"sectionSubText text-ctnSecondaryDark"}>Get in touch</p>
      <h3 className={"sectionHeadText text-ctnPrimaryDark"}>Contact.</h3>

      {error && (
        <div className="mt-4 text-red-500 bg-red-100 p-3 rounded">{error}</div>
      )}
      {success && (
        <div className="mt-4 text-green-500 bg-green-100 p-3 rounded">
          {success}
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="What is your good name?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">Your email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="What is your email address?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Your Message
          </span>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="What do you want to say?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary hover:shadow-primary hover:bg-tertiary transition-all duration-800 ease-in disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;
