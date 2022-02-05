import React from "react";
import "./Home.scss";
import 'font-awesome/css/font-awesome.min.css';

function Home() {
  return (
    <div className="main">
      <div className="options">
      <i class="fas fa-comment"></i>
        <select name="threads" id="" className="find-threads options">
          <option value="your_threads">Your Threads</option>
          <option value="with_your_posts">Threads with your posts</option>
          <option value="unanswered">Unanswered Threads</option>
        </select>
      </div>
      <div className="options">
        <i class="fas fa-bell"></i>
        <select name="watched" id="" className="whatched options">
          <option value="threads">Watched Threads</option>
          <option value="forums">Watched Forums</option>
        </select>
      </div>
        <a link to="" className="options"> <i class="fas fa-eye-slash"></i>Mark Forums Read</a>
        <div className="notes" id="div-trans">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Placeat aliquam perferendis at aliquid neque voluptatibus
             corporis repellendus esse dolor facere magnam nihil 
            autem omnis quibusdam, aperiam delectus vel! Vero, non.</p>
        </div>
        <div className="notes" id="div-blue">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Placeat aliquam perferendis at aliquid neque voluptatibus
             corporis repellendus esse dolor facere magnam nihil
             autem omnis quibusdam, aperiam delectus vel! Vero, non.</p>
        </div>
        <div className="notes" id="div-red">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Placeat aliquam perferendis at aliquid neque voluptatibus 
            corporis repellendus esse dolor facere magnam nihil 
            autem omnis quibusdam, aperiam delectus vel! Vero, non.</p>
        </div>
        <div className="">

        </div>
    </div>
  );
}

export default Home;
