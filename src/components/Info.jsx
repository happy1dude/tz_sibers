import React from 'react';
import App from '../App';

import PenSvg from '../assets/img/pen.svg'
import PhotoSvg from '../assets/img/user.svg'

const InfoContact = () => {
    return <div className='contact__content'>
        <div className='contact__wrap-header'>
            <div className='contact__content__title-name'>
                <h1>
                    
                    <span>Тут должно быть имя</span>
                    <i><img src={PenSvg} alt='pen' /></i>
                </h1>
                <div className='solid-header'></div>
            </div>
            <div className='contact__content__title-photo'>
                <i><img src={PhotoSvg} alt='Photo User' /></i>
            </div>
        </div>
        <div className='contact__content__info'>
            <div className='contact__content__info__block'>
                <div><h3>Phone number</h3></div>
                <div className='contact__content__info__block__data'>
                    <span>Какая-то информация</span>
                </div>
            </div>
            <div className='contact__content__info__block'>
                <div><h3>User Name</h3></div>
                <div className='contact__content__info__block__data'>
                    <span>Какая-то информация</span>
                </div>
            </div>
            <div className='contact__content__info__block'>
                <div><h3>Website</h3></div>
                <div className='contact__content__info__block__data'>
                    <span>Какая-то информация</span>
                </div>
            </div>
            <div className='contact__content__info__block'>
                <div><h3>E-mail</h3></div>
                <div className='contact__content__info__block__data'>
                    <span>Какая-то информация</span>
                </div>
            </div>
        </div>
    </div>
}

export default InfoContact;