import React, { useEffect } from "react";
import TeamMember from "./TeamMember";
import "./TeamSection.css";
import AOS from "aos";
import profileImage from "./team-member.jpeg";
import Heading from "../../Common/Headings/Heading";

const TeamSection = () => {
  useEffect(() => {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
  }, []);

  return (
    <div className="team-section">
      <Heading className="taleido_heading" id="glheading" title="Team" />
      <div className="team-members" data-aos="zoom-in-up">
        <TeamMember
          image={profileImage}
          name="VIPUL KANABAR"
          role="(PARTNER)"
        />
      </div>
    </div>
  );
};

export default TeamSection;
