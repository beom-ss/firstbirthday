import React from 'react';
import './Location.css';
import cafeImage from '../assets/tablelin.png';
import { HiOutlineMapPin } from 'react-icons/hi2';

const Location = () => {
  return (
    <section className='location__container' id='location'>
      <div>
        <h2 className='section__title'>테이블린 다산점</h2>
        <span className='section__subtitle'>
          경기 남양주시 다산순환로20 현대프리미어캠퍼스몰 E동 1층 33호
          <br />
          (경기 남양주시 다산동 6143)
        </span>
      </div>

      {/* Map Image */}
      <div className='location__wrapper'>
        <img src={cafeImage} alt='카페이미지' className='location__img' />
      </div>

      {/* Navigation Link */}
      <div className='location-button-group-wrapper'>
        <div className='button-group'>
          <a
            href='https://naver.me/F884SPLJ'
            target='_blank'
            rel='noreferrer'
            className='button button-primary button--flex'
          >
            네이버지도
            <HiOutlineMapPin className='button--flex--icon' />
          </a>

          <a
            href='https://place.map.kakao.com/814738688'
            target='_blank'
            rel='noreferrer'
            className='button button-reverse button--flex'
          >
            카카오지도
            <HiOutlineMapPin className='button--flex--icon' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
