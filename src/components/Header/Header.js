import React from 'react';
import './Header.css';
// Header Component
const Header = () => {
    return (
        <div className="header">
            <h2 className="main-title">Make a Team For Your IT Business</h2>
            <p className="header-des">The Modern Technology Make Our Life Very Easy.Developers Makes It Easy For Us!!</p>
            <h2 className="total-expense">Total Expense: <span className="balance">500 Million</span></h2>
        </div>
    );
};

export default Header;