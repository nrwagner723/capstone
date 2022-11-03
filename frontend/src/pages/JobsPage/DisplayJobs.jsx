const DisplayEntries = (props) => {
    return ( 
        <table className="table">
        <thead>
          <tr>
            <th>Job</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry) => {
            return (
              <tr>
                <td>{entry.job}</td>
                <td>{entry.startDate}</td>
                <td>{entry.endDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;