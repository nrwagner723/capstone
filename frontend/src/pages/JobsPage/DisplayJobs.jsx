import React, { useState, useEffect } from 'react';

const DisplayEntries = (props) => {
  // have to refresh to see that job is deleted 
  function deleteJob(id){
    fetch(`http://127.0.0.1:8000/jobs/${id}/`,{
      method:'DELETE'
    }).then((result) => {
      result.json().then((res) => {
      })
    })
  }

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
                  <button onClick={() => deleteJob(entry.id)}>Delete</button>
                </td>
              </tr> 
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;