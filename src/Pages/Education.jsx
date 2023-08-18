import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Education.css";
import UniversityLogo1 from "../Icons/school 1.png"; 
import UniversityLogo2 from "../Icons/scool 2.png";
import UniversityLogo3 from "../Icons/school 3.png";
import CardService from "../Components/Card";

const Education = () => {
  const educationData = [
    {
      school: "Bugallon Integrated School (BIS)",
      year: "2015 Grade School Graduated",
      honors: "Achiver 5",
      link: "https://www.facebook.com/DepedTayoBugallonIS500610/", 
      image: UniversityLogo1,
    },
    {
      school: "Saint Andrew Catholic School (SACS)",
      year: "2019 High School Graduated",
      honors: "With Honors",
      link: "https://www.facebook.com/sacsbugallon/", 
      image: UniversityLogo2,
    },
    {
      school: "University of Pangasinan (PHINMA)",
      year: "2020 Senior High School Graduated",
      honors: "With Honors",
      link: "https://up.phinma.edu.ph/", 
      image: UniversityLogo3,
    },
  ];

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
    
    <div className="education">
      <div className="container py-5 service">
        <div>
          <h3>My Educational Background</h3>
          <p>
          “Education’s purpose is to replace an empty mind with an open one.” —Malcolm Forbes
            <br />
            “Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.” —Abigail Adams
          </p>
        </div>

        <div>
          <div className="row justify-content-center">
            {educationData.map((edu, index) => (
              <a key={index} href={edu.link} target="_blank" rel="noopener noreferrer" className="school-link">
                <CardService
                  image={edu.image}
                  text={edu.school}
                  subText={`Graduated in ${edu.year}, ${edu.honors}`}/>
              </a>
            ))}
          </div>
        </div>
           <Link to="/" className="back-link">&larr; Go Back</Link>
      </div>
    </div>
  );
};

export default Education;
