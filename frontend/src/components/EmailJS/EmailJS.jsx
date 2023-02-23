import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailJS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jm4h8uk",
        "template_jmlcyen",
        form.current,
        "4_PZxdKefMjDhMbAy").then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="to_name" />
            <label>Email</label>
            <input type="email" name="to_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default EmailJS;
