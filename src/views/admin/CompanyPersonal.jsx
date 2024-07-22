import React from 'react';

function CompanyPersonal({ userData }) {
    return (
        <div className="companypersonal">
            <div className="companypersonal__tabs">
                <p>Name : {userData?.firstName}{" "}{userData?.lastName} </p>
                <p>Date of Birth :{" "}{userData?.DOB}</p>
                <p>Gender :{" "}{userData?.Gender}</p>
                <p>Nationality :{" "}{userData?.nationality}</p>
            </div>
        </div>
    )
}

export default CompanyPersonal;