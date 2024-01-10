import React from 'react';
import "./Post.css";
import AI from "../assets/ai.png";

function PostCard({ postData }) {
  return (
    <div className='All-post'>
      {postData.map((post) => (
        <div key={post.id} className='Post-card'>
          <div className='icon'>
            <img src={post.icon} alt="" />
          </div>
          <div className="title">
            <h3>{post.title}</h3>
          </div>   
          <div className='desc'>
            <p>{post.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
