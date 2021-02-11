import React from 'react';
import App from '../App';
import listSvg from '../assets/img/list.svg';

const List = () => {
    return <ul className='contact__list'>
        <li>
            <i>
                <img width='20px' src={listSvg} alt='List' />
            </i>
            <span>Контакты</span>
        </li>
    </ul>
}

export default List;