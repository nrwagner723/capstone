import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const DisplayEntries = (props) => {
  const [user, token] = useAuth();

  useEffect(() => {
    getEntries();
  }, []);

  async function getEntries() {
    const response = await axios.get("http://127.0.0.1:8000/jobs/", {
      headers: { Authorization: "Bearer " + token },
    });
    props.setEntries(response.data);
  }

  async function deleteJob(id) {
    await axios
      .delete(`http://127.0.0.1:8000/jobs/${id}/`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((result) => getEntries());
  }

  async function deleteAlert(id) {
    let user_input = prompt(
      "Are you sure you want to delete this job? (answer 'yes' or 'no')"
    );
    if (user_input === "yes") {
      deleteJob(id);
      getEntries();
    }
  }

  const handleAlert = (event, id) => {
    event.preventDefault();
    deleteAlert(id);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Job</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.parentEntries.map((entry) => {
          return (
            <tr>
              <td>{entry.title}</td>
              <td>{entry.start}</td>
              <td>{entry.end}</td>
              <td>
                <button onClick={(e) => handleAlert(e, entry.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayEntries;
