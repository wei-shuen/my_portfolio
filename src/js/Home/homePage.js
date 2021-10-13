import React from 'react';
import '../../css/homePage.scss';
import "../../css/slick.css";
import "../../css/slick-theme.css";

import IconMenu from '../svg/IconMenu';
import IconSearch from '../svg/IconSearch';
import Banner_First from '../../image/banner_1.jpg';

import Category_First from '../../image/category_1.jpg';
import Category_Second from '../../image/category_2.jpg';
import Category_Third from '../../image/category_3.jpg';
import Category_Forth from '../../image/category_4.jpg';
import Category_Fifth from '../../image/category_5.jpg';


import Slider from "react-slick";


const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const settings_category = {
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: "60px",
    centerMode: true,
    slidesToShow: 1.5,
    slidesToScroll: 1
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="menuBtn">
          <IconMenu style={{ width: '28', height: '28' }}/>
        </div>
        <h1 className="title">LIFE DESIGNER</h1>
        <div className="searchBtn">
          <IconSearch style={{ width: '28', height: '28' }}/>
        </div>
      </header>

      {/* Banner */}
      <section className="banner">
        <p className="seo">All furnitures are in sell for 15% off.　<a className="seoCta" href="#">See more</a></p>
        <Slider {...settings}>
          <div className="bannerBackground">
            <img className="bannerImage" src={Banner_First} alt="Banner_First" />
            <p className="bannerTitle">JUST THE WAY YOU ARE</p>
            <p className="bannerSubTitle">YOU LIFE, YOU DESIGN</p>
            <button type="button"className="bannerCta">SHOP NOW</button>
          </div>
          <div className="bannerBackground">
            <img className="bannerImage" src={Banner_First} alt="Banner_First" />
            <p className="bannerTitle">JUST THE WAY YOU ARE</p>
            <p className="bannerSubTitle">YOU LIFE, YOU DESIGN</p>
            <button type="button"className="bannerCta">SHOP NOW</button>
          </div>
        </Slider>
      </section>

      {/* Items */}
      <section className="category">
        <h2 className="categoryTitle">PRODUCT SERIES</h2>
        <Slider {...settings_category}>
          <div>
            <div className="categoryBackground">
              <img className="categoryImage" src={Category_First} alt="Category_First" />
              <p className="categoryName">LIVING ROOM</p>
            </div>
          </div>
          <div>
            <div className="categoryBackground">
              <img className="categoryImage" src={Category_Second} alt="Category_Second" />
              <p className="categoryName">BEDROOM</p>
            </div>
          </div>
          <div>
            <div className="categoryBackground">
              <img className="categoryImage" src={Category_Third} alt="Category_Third" />
              <p className="categoryName">DINING ROOM</p>
            </div>
          </div>
          <div>
            <div className="categoryBackground">
              <img className="categoryImage" src={Category_Forth} alt="Category_Forth" />
              <p className="categoryName">HOME OFFICE</p>
            </div>
          </div>
          <div>
            <div className="categoryBackground">
              <img className="categoryImage" src={Category_Fifth} alt="Category_Fifth" />
              <p className="categoryName">KITCHEN</p>
            </div>
          </div>
        </Slider>
      </section>

    </div>
  );
};

export default HomePage;