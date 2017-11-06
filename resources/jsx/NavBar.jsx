import React from 'react';

class NavBar extends React.Component {
    navigateToSignup(){
      $('html,body').animate({
         scrollTop: $("#form-area").offset().top
      },600);
    }
    render() {
      return (
        <div className="nav-grid--container">
          <div className="nav-left-column header-navbar--inner">
            <div id="header-navbar--logo">
              <img id="logo" src="/images/AW_Logo.png" alt="Alden Wolf Logo"/>
            </div>
          </div>
          <div className="nav-center-column"></div>
          <div className="nav-right-column header-navbar--inner" id="header-navbar--actions-container">
            <p onClick={this.navigateToSignup} id="navbar--signup-link">Let’s work together</p>
          </div>
        </div>
      );
    }
};

export default NavBar;