import axios from "axios";
import React, { useState } from "react";
// import useAuth from "../../hooks/useAuth";

const Jobs = (props) => {
  // const [user, token] = useAuth();
  const [job, setJob] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newEntry = {
      title: job,
      start: startDate,
      end: endDate,
      // user_id: user.id,
    };
    await axios.post("http://127.0.0.1:8000/jobs/", newEntry);
    console.log(newEntry);
    props.getEntries();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="form-group">
        <label>Job Description & Location</label>
        <textarea
          className="form-control"
          rows="4"
          value={job}
          onChange={(event) => setJob(event.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Start Date</label>
        <input
          type="date"
          className="form-control"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>End Date</label>
        <input
          type="date"
          className="form-control"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>
      <button type="submit" style={{ "margin-top": "1em", "margin-bottom": "1em" }}>
        Add Job
      </button>
    </form>
  );
};

export default Jobs;
