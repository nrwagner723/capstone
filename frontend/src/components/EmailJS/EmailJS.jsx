import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./EmailJS.css";
import moment from "moment";

const EmailJS = () => {
  const [user, token] = useAuth();
  const [email, setEmail] = useState();
  const form = useRef();
  const [job, setJob] = useState();
  const [jobStart, setJobStart] = useState();

  const getJobs = async () => {
    let jobs = await axios.get("http://127.0.0.1:8000/jobs/");
    let user_jobs = jobs.data;

    function start() {
      user_jobs.map(returnStart);
    }

    function returnStart(job) {
      let job_start = job.start;
      setJobStart(job_start);
    }

    start();
  };

  useEffect(() => {
    getJobs();
  }, []);

  let currentDate = moment().format().slice(0, 10);
  console.log("Today is " + currentDate);

  let tomorrow = moment().add(1, 'day').format().slice(0, 10);
  console.log("Tomorrow is " + tomorrow)

  
  const sendEmail = (e) => {
    e.preventDefault();
    
    if (tomorrow === jobStart) {
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
    } else {
      alert("You don't have a job tomorrow")
    }
  }

  async function getEmail() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/auth/user/${user.id}/`
    );
    let user_email = response.data.email;
    setEmail(response.data.email);
  }

  useEffect(() => {
    getEmail();
  }, []);

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
