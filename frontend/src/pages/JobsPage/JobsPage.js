import React, { useState } from 'react';
import DemoApp from '../../components/Calendar/DemoApp';
import DisplayEntries from './DisplayJobs';
import Jobs from '../../components/AddJobs/Jobs';
import './JobsPage.css';

const JobsPage = (props) => {
    
    const [entries, setEntries] = useState([])

    function addNewEntry(entry) {
        let tempEntries = [...entries, entry];
        setEntries(tempEntries);
    }
    
    return ( 
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='border-box'>
                        <Jobs addNewEntryProperty={addNewEntry} />
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className='border-box'>
                        <DisplayEntries parentEntries={entries} />
                    </div>
                </div>
            </div>
            <DemoApp /> 
        </div>
     );
}
 
export default JobsPage;