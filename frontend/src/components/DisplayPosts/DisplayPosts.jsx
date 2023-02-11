import "./DisplayPosts.css";

const DisplayPosts = (props) => {
    return (
        <div className='card-container'>
            {props.posts.map((post) => {
                return(
                    <img className="card_image" src={`http://127.0.0.1:8000${post.image}`} />
                );
            })}
        </div>
    );
};

export default DisplayPosts;