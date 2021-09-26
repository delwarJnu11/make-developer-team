import React from 'react';
import './MemberName.css'

const MemberName = (props) => {
    const { name, image } = props.addMember;
    return (
        <div className="member-name">
            <img src={image} alt="" />
            <p> <small>{name}</small> </p>
        </div>
    );
};

export default MemberName;