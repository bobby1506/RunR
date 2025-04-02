import React from "react";
import "./TeamSection.css";

const TeamMember = ({ image, name, role }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} className="team-image" />
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
    </div>
  );
};

export default TeamMember;
