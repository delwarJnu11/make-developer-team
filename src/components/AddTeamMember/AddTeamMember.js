import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './AddTeamMember.css';
import MemberName from '../../MemberName/MemberName';

//add member and total expense component

const AddTeamMember = (props) => {
    const { addMember } = props;
    const totalExpense = addMember.reduce((previous, current) => previous + current.salary, 0)
    return (
        <div className="add-team-member">
            <h2><FontAwesomeIcon icon={faUser} /> Total Members: {addMember.length}</h2>
            <h3>Total Expense: ${totalExpense}</h3>
            <hr />
            <h2> <small><FontAwesomeIcon icon={faCheckCircle} /> Selected Developers</small> </h2>
            {/* member name show part here  */}
            <ul className="list-container">
                {
                    addMember.map(singleMember => <MemberName
                        addMember={singleMember}
                        key={singleMember.id}
                    ></MemberName>)
                }
            </ul>
        </div>
    );
};

export default AddTeamMember;