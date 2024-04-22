import React from 'react';
import contactless from '../assets/contactless.svg';

const CreditCard = () => {
    return (
        <div>
            <div className="card">
                <span className="circle circle-1"></span>
                <span className="circle circle-2"></span>
                <span className="circle circle-3"></span>

                <div className="card-content">
                    <div className='card-text'>
                        <p className="card-number">0000 0000 0000 0000</p>
                        <p className="card-label">VALID THRU</p>
                        <p className="card-holder">NAME SURNAME</p>
                    </div>
                    <img src={contactless} alt="Contactless" className="contactless" />
                </div>
            </div>
        </div>
    );
};

export default CreditCard;
