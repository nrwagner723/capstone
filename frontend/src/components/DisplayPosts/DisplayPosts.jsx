import "./DisplayPosts.css";

const DisplayPosts = (props) => {
    
    function deletePhoto(id){
        fetch(`http://127.0.0.1:8000/photos/${id}/`,{
          method:'DELETE'
        }).then((result) => {
          result.json().then((res) => {
          })
        })
      }

    function deleteAlert() {
        alert('Are you sure you want to delete this photo?')
    }

    const handleAlert = (event) => {
        event.preventDefault();
        deleteAlert();
    }
    
    return (
        <div className='card-container'>
            {props.posts.map((post) => {
                return(
                    <img onClick={(e) => handleAlert(e)} className="card_image" src={`http://127.0.0.1:8000${post.image}`} />
                );
            })}
        </div>
    );
};

export default DisplayPosts;