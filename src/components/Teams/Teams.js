import React, { useEffect, useState } from 'react';
import AddTeamMember from '../AddTeamMember/AddTeamMember';
import TeamMember from '../TeamMember/TeamMember';
import './Teams.css'

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [addMember, setAddMember] = useState([]);

    useEffect(() => {
        fetch('./teams.JSON')
            .then(res => res.json())
            .then(data => setTeams(data));
    }, []);

    const handleHireMe = teamMember => {
        const addNewMember = [...addMember, teamMember];
        setAddMember(addNewMember);

    }
    return (
        <div className="container">
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
            <div className="team-members-calculation">
                {
                    <AddTeamMember addMember={addMember}></AddTeamMember>
                }
            </div>
        </div>
    );
};

export default Teams;