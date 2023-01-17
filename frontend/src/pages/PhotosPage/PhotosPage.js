import React, { Component } from 'react';
import axios from 'axios';
import './Photos.css'

class PhotosPage extends Component {
    state = {
        selectedFile: null
    }
    
    fileSelectedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = async() => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        await axios.post('http://127.0.0.1:8000/photos/', fd).then(
            res => {
                console.log(res);
            }
        );
    }

    render() {
    return ( 
        <div>
        <input
            type='text'
            onChange={this.fileSelectedHandler}/>
         <input 
            type='file'   
            className='' 
            onChange={this.fileSelectedHandler}/>
         <button onClick={this.fileUploadHandler}>Upload</button>
        </div>
     );
    } 
}





 
export default PhotosPage;