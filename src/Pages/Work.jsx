import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Work.css";


const Work = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        window.history.back(); 
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="work">
      <div className="container text-center">
        <div className="work-main">
          <h2>My Projects</h2>
          <p>
          View some of my Project and works.
          </p>
        
          <div className="projects">
            <div className="project">
              <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/368648153_257325617194861_9216457748631231274_n.png?stp=dst-png_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHA5ZJg80hawoga4jGt0wXmbYgdqQJMMFFtiB2pAkwwUZ-UAV0Lhqy8BpIhaD4OgADO3jpN7zhVIvQ8HCXwMHhs&_nc_ohc=BqLLPx6RL_wAX-bPyel&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRxvHatShpqpNOtcLk2_c4nX_oUvv0LUNy9KTYuV3P55A&oe=65066D25" alt="Project 1" />
              <h4>Courage</h4>
              <p>Courage app is for the people who is suffering mental illness. </p>
            </div>
            
            <div className="project">
              <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/368678189_202950405868473_5707642929445446463_n.png?stp=dst-png_s403x403&_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeGQNxg7I14qVti7I65f1OT0rPg2juijAZqs-DaO6KMBmm041Bd6GyMrEg0th0ACWgaoK5JAYjsFfl_ypzJVla-_&_nc_ohc=Zn0E44HwkqgAX9irinH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRcYcY_K4vkRFi6bqTNH98OtkLGbUVWyhoEzp3C-v7b3w&oe=6506683D" alt="Project 2" />
              <h4>Food Ordering Page</h4>
              <p>This is a non-functional meal ordering page for our activity in Sir Zane in ITe 308.</p>
            </div>
            
            <div className="project">
              <img src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t1.15752-9/368608187_685948670238820_2161016648302606697_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE2pY1n95qAX3ujvm0I5PVV_INK35uzvT78g0rfm7O9PgZh29ESgiXSwjvwyDwqi69ODw38tDVbtJpcJFFG8ul1&_nc_ohc=p-7OvZblUOMAX8rN3cS&_nc_ht=scontent.fcrk1-5.fna&oh=03_AdQUy3tdRtjkBlslE_egqlxfFYY07Tw4xzVSujFYtcUVHg&oe=65068FC5" alt="Project 3" />
              <h4>Personal Website Portfolio</h4>
              <p>This is my Personal Portfolio Project.</p>
            </div>
          </div>
        <Link to="/" className="back-link">&larr; Go Back</Link>
      </div>
    </div>
  </div>

  );
};

export default Work;
