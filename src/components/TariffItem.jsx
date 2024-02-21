import React from 'react';
import './tariff.scss'

class TariffItem extends React.Component {
    render() {
        const { name, price, megabit, trafficvolume } = this.props;
        return (
            <div className='card'>
                <div className='card__header'>
                    <h1>{name}</h1>
                </div>
                <div className='card__price'>
                    <p>руб {price}/месяц</p>
                </div>
                <div className='card__megabit'>
                    <p>До {megabit} Мбит/сек</p>
                </div>
                <div className='card__traffic'>{trafficvolume}</div>
            </div >
        )
    }
}

export default TariffItem;