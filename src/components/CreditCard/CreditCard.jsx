import React from 'react';
import './CreditCard.scss';

export default ({ values: { brand, cardNumber = "", name, expires= "", cvv }, flipped }) => {

    let remainDigits = '';

    for (let i = 0; i < 16 - cardNumber.length; i++) {
        remainDigits += '*';
    }
    
    cardNumber = cardNumber.length <= 16 ? cardNumber + remainDigits : cardNumber;

    let result = '';

    for (let i = 0; i <= 16; i += 4) {
        result += cardNumber.substring(i, i + 4) + ' ';
    }

    // let expiresRes = '';

    // for (let i = 0; i <= 2; i += 2){
    //     expiresRes += expires.substring(i, i + 4  ) + '/'
    // }

    // expires = expiresRes
    
    cardNumber = result;

    return (
    <div className={`credit-card${flipped ? ' flipped' : ''}`}>
        <div className="front">
            <div className="brand">{brand}</div>
            <div className="cardNumber">{cardNumber}</div>
            <div className="nameCard">
                <div className="name">{name || 'NOME DO TITULAR'}</div>
                <div className="expires">{expires || '00/00'}</div>
            </div>
            
        </div>
        <div className="back">
            <div className="cvv">{cvv}</div>
        </div>
    </div>
    );
}