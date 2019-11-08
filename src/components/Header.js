import React from 'react';
import { ReactComponent as USTLogo }  from '../svg/uts-logo.svg';
import { ReactComponent as SVGPhone }  from '../svg/icon-phone-white.svg';

class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <div className="container">
                    <div className="header__logo">
                    <USTLogo className="icon--uts-logo"/>
                    </div>
                    <div className="header__contact">
                        <div className="header__contact--phone">
                        <SVGPhone className="icon--phone-white"/>
                        <span>1300 747 767</span>
                        </div>
                        <div className="header__contact--inquiry">
                            Enquire Now
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;