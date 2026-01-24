import React, { useEffect } from "react";
import TeamMember from "./TeamMember";
import "./TeamSection.css";
import AOS from "aos";
import Heading from "../../Common/Headings/Heading";

const teamMembers = [
  {
    image:
      "https://res.cloudinary.com/divqh7jbm/image/upload/v1769240306/MANOJ_SHAH-min_urdwie.jpg",
    name: "MANOJ SHAH",
    role: "(DIRECTOR)",
    position: "center 30%",
  },
  {
    image:
      "https://res.cloudinary.com/divqh7jbm/image/upload/v1769240308/DEVANSH_SHAH-min_w0lfid.jpg",
    name: "DEVANSH SHAH",
    role: "(DIRECTOR)",
    position: "center 15%",
  },
  {
    image:
      "https://res.cloudinary.com/divqh7jbm/image/upload/v1769240306/SETUL_SHAH-min_dcxupu.jpg",
    name: "SETUL SHAH",
    role: "(DIRECTOR)",
    position: "center 25%",
  },
  {
    image:
      "https://res.cloudinary.com/divqh7jbm/image/upload/v1769240307/KN_SHAH-min-min_j0nros.jpg",
    name: "KN SHAH",
    role: "(DIRECTOR)",
    position: "center 25%",
  },
  {
    image:
      "https://res.cloudinary.com/divqh7jbm/image/upload/v1769240438/team-member_ci3fom.jpg",
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
