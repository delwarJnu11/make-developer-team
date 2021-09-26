import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faHandPointRight, faCode } from '@fortawesome/free-solid-svg-icons';
import './TeamMember.css'

const TeamMember = (props) => {
    const { image, name, Country, salary, designation, institute } = props.teamMember;
    return (
        <div className="teamMember">
            <img src={image} alt="" />
            <div className="teamMemberDetails">
                <h2 className="memberName"> <small>{name}</small> </h2>
                <p> <small>Role: {designation}</small></p>
                <p><small> Institute: {institute}</small></p>
                <p> <small> Country: {Country}</small></p>
                <h4 className="salary"> Salary: ${salary}</h4>
                <p>
                    <FontAwesomeIcon style={{ color: "#4267B2" }} className="social-icon" icon={faFacebookSquare} />
                    <FontAwesomeIcon style={{ color: "#1DA1F2" }} className="social-icon" icon={faLinkedin} />
                    <FontAwesomeIcon style={{ color: "#2867B2" }} className="social-icon" icon={faTwitterSquare} />
                    <FontAwesomeIcon style={{ color: "#4078c0" }} className="social-icon" icon={faGithub} />
                </p>
                <button className="hireMeBtn btn" onClick={() => props.handleHireMe(props.teamMember)}><FontAwesomeIcon icon={faHandPointRight} /> Hire Me</button>
                <button className="skillsBtn btn"><FontAwesomeIcon icon={faCode} /> Skills</button>
            </div>
        </div>
    );
};

export default TeamMember;