import React from 'react';
import './CreditCard.scss';

export default ({ values: { brand, cardNumber = '', name, expires, cvv }, flipped }) => {

    let remainDigits = '';

    for (let i = 0; i < 16 - cardNumber.length; i++) {
        remainDigits += '*';
    }

    cardNumber = cardNumber.length <= 16 ? cardNumber + remainDigits : cardNumber;

    return (
    <div className={`credit-card${flipped ? ' flipped' : ''}`}>
        <div className="front">
            <div className="brand">{brand}</div>
            <div className="cardNumber">{cardNumber}</div>
            <div className="name">{name || 'NOME DO TITULAR'}</div>
            <div className="expires">{expires || '00/00'}</div>
        </div>
        <div className="back">
            <div className="cvv">{cvv}</div>
        </div>
    </div>
    );
}