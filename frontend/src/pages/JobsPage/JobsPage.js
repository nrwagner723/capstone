import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import DisplayEntries from "../../components/DisplayJobs/DisplayJobs";
import Jobs from "../../components/AddJobs/Jobs";
import "./JobsPage.css";
import axios from "axios";
// import useAuth from "../../hooks/useAuth";
import "../../components/EmailJS/EmailJS";
import EmailJS from "../../components/EmailJS/EmailJS";

const JobsPage = (props) => {
  const [entries, setEntries] = useState([]);
  // const [user, token] = useAuth();

  const getEntries = async () => {
    await axios
      .get("http://127.0.0.1:8000/jobs/")
      .then((res) => setEntries(res.data));
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="border-box">
            <Jobs getEntries={getEntries} />
          </div>
        </div>
        <div className="col-md-12">
          <div className="border-box">
            <EmailJS />
            <DisplayEntries parentEntries={entries} setEntries={setEntries} />
          </div>
        </div>
      </div>
      <Calendar entries={entries} />
    </div>
  );
};

export default JobsPage;
