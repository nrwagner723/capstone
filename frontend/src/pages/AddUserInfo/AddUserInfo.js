import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';

let initialValues = {
    schedule: '',
    materials_watchlist: '',
};

const AddUserInfo = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postUserInfo);

    async function postUserInfo(){
        try {
            let response = await axios.post("http://127.0.0.1:8000/user_info/", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate("/")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Schedule:{" "}
                    <input
                        type="text"
                        name="schedule"
                        value={formData.schedule}
                        onChange={handleInputChange}
                    />    
                </label>
                <label>
                    Materials Watchlist:{" "}
                    <input
                        type="text"
                        name="materials_watchlist"
                        value={formData.materials_watchlist}
                        onChange={handleInputChange}
                    />    
                </label>
                <button>Done</button>
            </form>
        </div>
    );

} 

export default AddUserInfo;