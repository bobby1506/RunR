import React from "react";
import "./TeamSection.css";

const TeamMember = ({ image, name, role, position }) => {
  return (
    <div className="team-member">
      <img
        src={image}
        alt={name}
        className="team-image"
        style={{ objectPosition: position }}
      />
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
    </div>
  );
};

export default TeamMember;
