import React, { useState } from 'react';
import './tariff.scss';

export default function TariffItem({ name, price, megabit, trafficvolume, color }) {
    const [select, setSelect] = useState(false);
    function handleClick() {
        setSelect(!select);
    }
    return (
        <div className={select ? `card ${color} selected` : `card ${color}`} onClick={handleClick}>
            <div className="card__header">
                <h1>{name}</h1>
            </div>
            <div className="card__price">
                <p className="currency">руб</p>
                <p className="price"><span className='cost'>{price}</span></p>
            </div>
            <div className="card__megabit">
                <p>До {megabit} Мбит/сек</p>
            </div>
            <div className="card__traffic">{trafficvolume}</div>
        </div>
    )
}