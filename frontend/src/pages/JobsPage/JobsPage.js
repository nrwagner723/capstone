import React, { useEffect, useState } from 'react';
import DemoApp from '../../components/Calendar/DemoApp';
import DisplayEntries from './DisplayJobs';
import Jobs from '../../components/AddJobs/Jobs';
import './JobsPage.css';
import axios from 'axios';

const JobsPage = (props) => {
    
    const [entries, setEntries] = useState([])

    const getEntries = async() => {
        await axios
        .get("http://127.0.0.1:8000/jobs/")
        .then(res => setEntries(res.data))
    }
    
    useEffect(()=>{getEntries()},[])

    return ( 
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='border-box'>
                        <Jobs getEntries={getEntries} />
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className='border-box'>
                        {entries[0] && entries[2].title}
                        <DisplayEntries parentEntries={entries} />
                    </div>
                </div>
            </div>
            <DemoApp /> 
        </div>
     );
}
 
export default JobsPage;