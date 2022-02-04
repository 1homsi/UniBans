import React from "react";

function Home() {
  return (
    <div>
      <h1 className="Content"></h1>
        <select name="threads" id="" className="find-threads">
          <option value="your_threads">Your Threads</option>
          <option value="with_your_posts">Threads with your posts</option>
          <option value="unanswered">Unanswered Threads</option>
        </select>
        <select name="watched" id="" className="whatched">
          <option value="threads">Watched Threads</option>
          <option value="forums">Watched Forums</option>
        </select>
        <a link to=""><i></i>Mark Forums Read</a>
        <div className="notes" id="div-trans">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquam perferendis at aliquid neque voluptatibus corporis repellendus esse dolor facere magnam nihil autem omnis quibusdam, aperiam delectus vel! Vero, non.</p>
        </div>
        <div className="notes" id="div-blue">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquam perferendis at aliquid neque voluptatibus corporis repellendus esse dolor facere magnam nihil autem omnis quibusdam, aperiam delectus vel! Vero, non.</p>
        </div>
        <div className="notes" id="div-red">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquam perferendis at aliquid neque voluptatibus corporis repellendus esse dolor facere magnam nihil autem omnis quibusdam, aperiam delectus vel! Vero, non.</p>
        </div>
    </div>
  );
}

export default Home;
