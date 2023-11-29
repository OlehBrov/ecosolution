import { useState } from "react";
import data from "../data/team.json";

export const TeamGallery = () => {
  const [team, setTeam] = useState(data);

    return <div className="team-cards-grid">
        {team.map(member => <div key={member.id}>
            <img src={member.image} alt={member.name} className="grid-photo"/>
            <p className="grid-name">{member.name}</p>
            <p className="grid-position">{member.position }</p>
            
      </div>)}
  </div>;
};
