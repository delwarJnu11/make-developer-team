import React, { useEffect, useState } from 'react';
import AddTeamMember from '../AddTeamMember/AddTeamMember';
import TeamMember from '../TeamMember/TeamMember';
import './Teams.css';
//Teams container  component
const Teams = () => {
    //declare state
    const [teams, setTeams] = useState([]);
    const [addMember, setAddMember] = useState([]);
    //fetch data using useEffect
    useEffect(() => {
        fetch('./teams.JSON')
            .then(res => res.json())
            .then(data => setTeams(data));
    }, []);
    // Hire me Btn handler
    const handleHireMe = teamMember => {
        if (addMember.indexOf(teamMember) === -1) {
            const addNewMember = [...addMember, teamMember]
            setAddMember(addNewMember);
        }


    }
    return (
        <div className="container">
            {/* team member area */}
            <div className="team-members">
                {
                    teams.map(teamMember => <TeamMember
                        key={teamMember.id}
                        teamMember={teamMember}
                        handleHireMe={handleHireMe}
                    >

                    </TeamMember>)
                }
            </div>
            {/* team added area */}
            <div className="team-members-calculation">
                {
                    <AddTeamMember addMember={addMember}></AddTeamMember>
                }
            </div>
        </div>
    );
};

export default Teams;