import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./EmailJS.css";

const EmailJS = () => {
  const [user, token] = useAuth();
  const [email, setEmail] = useState();
  const form = useRef();

  const getJobs = async () => {
    let jobs = await axios.get("http://127.0.0.1:8000/jobs/");
    let user_jobs = jobs.data;

    function start() {
      user_jobs.map(returnStart);
    }

    function returnStart(job) {
      let jobs_start = job.start;
      console.log("a job will start on " + jobs_start);
    }

    start();
  };

  getJobs();

  let currentDate = new Date().toJSON().slice(0, 10);
  console.log("today is " + currentDate);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jm4h8uk",
        "template_jmlcyen",
        form.current,
        "4_PZxdKefMjDhMbAy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  async function getEmail() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/auth/user/${user.id}/`
    );
    let user_email = response.data.email;
    setEmail(response.data.email);
  }

  getEmail();

  return (
    <form ref={form} id="email_form" onSubmit={sendEmail}>
      <input type="hidden" name="to_name" id="name" value={user.first_name} />
      <input type="hidden" name="to_email" id="email" value={email} />
      <input
        type="hidden"
        name="message"
        id="message"
        value={
          "You have a job coming up tomorrow! Check your calendar in Contractor Tool for more information."
        }
      />
      <input
        className="reminder"
        type="submit"
        value="Email me a reminder the day a job starts"
      />
    </form>
  );
};

export default EmailJS;
