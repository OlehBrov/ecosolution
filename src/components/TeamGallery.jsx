import { useState } from "react";
import data from "../data/team.json";
import member1 from '../images/team/desktop_team-member-1.jpg'
import member2 from '../images/team/desktop_team-member-2.jpg'
import member3 from '../images/team/desktop_team-member-3.jpg'
import member4 from '../images/team/desktop_team-member-4.jpg'



export const TeamGallery = () => {
  const [team, setTeam] = useState(data);
  const teamPhoto = [member1, member2, member3, member4]

    return <div className="team-cards-grid">
        {team.map((member, index) => <div key={member.id}>
            <img src={teamPhoto[index]} alt={member.name} className="grid-photo"/>
            <p className="grid-name">{member.name}</p>
            <p className="grid-position">{member.position }</p>
            
      </div>)}
  </div>;
};
