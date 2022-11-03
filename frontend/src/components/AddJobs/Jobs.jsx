import React, { useState } from 'react';

const Jobs = (props) => {
    
    const [job, setJob] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            job: job,
            startDate: startDate,
            endDate: endDate,
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Job Description & Location</label>
                <textarea className='form-control' rows='4' value={job} onChange={(event) => setJob(event.target.value)}></textarea>
            </div>
            <div className='form-group'>
                <label>Start Date</label>
                <input type='date' className='form-control' value={startDate} onChange={(event) => setStartDate(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>End Date</label>
                <input type='date' className='form-control' value={endDate} onChange={(event) => setEndDate(event.target.value)} />
            </div>
            <button type='submit' style={{'margin-top': '1em'}}>Add Job</button>
        </form>
     );
}
 
export default Jobs;