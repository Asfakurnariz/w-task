import React from 'react';
import "./Post.css";
import Ai from "../assets/ai.png";
import Team from "../assets/team.png";
import TeamUp from "../assets/growth.png";
import PostCard from './PostCard';

function Post() {

    const PostData = [
        {
          id: "1",
          icon: Ai,
          title: "Write legal pleadings",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis suscipit eveniet sunt ullam reiciendis. Nulla, deserunt dolor tenetur labore consequuntur temporibus odio possimus iste facere autem! Ut neque nam dolorem voluptatibus ",
        },
        {
          id: "2",
          icon: Team,
          title: "Speed up writing",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis suscipit eveniet sunt ullam reiciendis. Nulla, deserunt dolor tenetur labore consequuntur temporibus odio possimus iste facere autem! Ut neque nam dolorem voluptatibus",
        },
        {
          id: "3",
          icon: TeamUp,
          title: "For Attorneys",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis suscipit eveniet sunt ullam reiciendis. Nulla, deserunt dolor tenetur labore consequuntur temporibus odio possimus iste facere autem! Ut neque nam dolorem voluptatibus",
        },
      ];

  return (
    <div className='Post-section'>
      <div className='post-content'>
        <div className='post-title'>
            <h2>The pioneers in AI the low</h2>
        </div>
        <button className='btn-2'>Get Started</button>
      </div>
       <PostCard postData={PostData} />
    </div>
  );
}

export default Post;
