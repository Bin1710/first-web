import React from 'react'
import '../Header/index.css'
import Onboarding2x3 from '../../assets/img/Onboarding2x3.png'
import { useTranslation } from "react-i18next";

function Header () {
  const { t, i18n } = useTranslation();
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
  // Declare a new state variable, which we'll call "count"

  return (
 
    <div className="container">
    <div className="header">
      <div className="row">
        <div className="col-5">
          <div className="header-left">
            <a href="#default" className="logo">          
              <img src={Onboarding2x3} alt='/' className='customimg'></img>
            </a>
            
          </div>
        </div>

        <div className="col-7">
          <div className="header-right">
            <div className="header-icon">
              <div className="header-language">
                <select name="languge" id="languge" onChange={changeLanguageHandler}>
                  <option value="vi">VI</option>
                  <option value="en">EN</option>
                </select>
              </div>

              <div className="header-search">

                <a href="#"><i className="fa fa-search"></i></a>

              </div>
            </div>

            <div className="navbar-right">
              <a className="active" href="/">Trang chủ</a>
              <a href="/about">Giới thiệu</a>
              <a href="/member">Thành viên</a>
              <a href="/careers">Tuyển dụng</a>
              <a href="/contact">Liên hệ</a>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  )
}

export default Header;