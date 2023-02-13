import React, { useEffect, useState } from 'react';
// import React, { useEffect, useState, useContext} from 'react';
import Calendar from '../../components/Calendar/Calendar';
import DisplayEntries from './DisplayJobs';
import Jobs from '../../components/AddJobs/Jobs';
import './JobsPage.css';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

const JobsPage = (props) => {
    
    const [entries, setEntries] = useState([])
    // const { user, getUserJobs } = useContext(AuthContext);

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
                        <DisplayEntries parentEntries={entries} />
                        <p>Refresh the page after clicking the Delete button</p>
                    </div>
                </div>
            </div>
            <Calendar entries={entries}/> 
        </div>
     );
}
 
export default JobsPage;