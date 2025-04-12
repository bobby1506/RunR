import React, { useEffect } from "react";
import TeamMember from "./TeamMember";
import "./TeamSection.css";
import AOS from "aos";
import Heading from "../../Common/Headings/Heading";

const teamMembers = [
  {
    image:
      "https://res.cloudinary.com/dlf8u5l7a/image/upload/v1744476820/runr/i9bdbxix2zb7ig3cx36e.jpg",
    name: "MANOJ SHAH",
    role: "(DIRECTOR)",
    position: "center 30%",
  },
  {
    image:
      "https://res.cloudinary.com/dlf8u5l7a/image/upload/v1744476821/runr/z8eoesxbiylwcq5ygmfr.jpg",
    name: "DEVANSH SHAH",
    role: "(DIRECTOR)",
    position: "center 15%",
  },
  {
    image:
      "https://res.cloudinary.com/dlf8u5l7a/image/upload/v1744476819/runr/m4603wohwkuz0vova6fo.jpg",
    name: "SETUL SHAH",
    role: "(DIRECTOR)",
    position: "center 25%",
  },
  {
    image:
      "https://res.cloudinary.com/dlf8u5l7a/image/upload/v1744476823/runr/wml7myuwu7nwfetitx2f.jpg",
    name: "KN SHAH",
    role: "(DIRECTOR)",
    position: "center 25%",
  },
  {
    image:
      "https://res.cloudinary.com/dlf8u5l7a/image/upload/v1744476814/runr/drciity5zuntkfbobsur.jpg",
    name: "VIPUL KANABAR",
    role: "(PARTNER)",
    position: "center 70%",
  },
];

const TeamSection = () => {
  useEffect(() => {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
  }, []);

  return (
    <div className="team-section">
      <Heading className="taleido_heading" id="glheading" title="Team" />
      <div className="team-members" data-aos="zoom-in-up">
        {teamMembers?.map((member, index) => (
          <TeamMember
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
            position={member.position}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
