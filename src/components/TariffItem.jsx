import React from 'react';
import './tariff.scss';
import data from '../data.json';
console.log(data);
class TariffItem extends React.Component {
    render() {
        const card = data.map(item =>
            <div className='card'>
                <div className={`card__header ${item.header}`}>
                    <h1>{item.name}</h1>
                </div>
                <div className={`card__price ${item.info}`}>
                    <p className='currency'>руб</p>
                    <p className='price'><span className='cost'>{item.price}</span>/месяц</p>
                </div>
                <div className='card__megabit'>
                    <p>До {item.megabit} Мбит/сек</p>
                </div>
                <div className='card__traffic'>{item.trafficvolume}</div>
            </div >
        )
        return (
            <main className='main'>{card}</main>
        )
    }
}

export default TariffItem;