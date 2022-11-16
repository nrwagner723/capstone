import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialsMapper from './MaterialsMapper';
import SearchBar from './Components/SearchBar';

function App() {
  
  const [searchTerm, setSearchTerm] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    saveMaterials();
  }, []);
  
  async function saveMaterials(){
    const response = await axios.post('http://127.0.0.1:8000/user_info/');
    setSearchTerm(response.data);
  }

  return (
    <div>
      <SearchBar userInput={userInput} setUserInput={setUserInput}/>
      <table className='table table-sm table-hover'>
        <thead>
          <tr>
            
          </tr>
        </thead>
       <MaterialsMapper userInput={userInput} searchTerm={searchTerm}/>
      </table>
    </div>
  );
}

export default App;