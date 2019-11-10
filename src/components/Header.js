import React from 'react';
import { ReactComponent as SVGPhone }  from '../svg/icon-phone-white.svg';

class Header extends React.Component{
    render(){
        const Headerlogo = this.props.logo;
        return(
            <header className="header">
                <div className="container">
                    <div className="header__logo">
                    <Headerlogo className="icon--uts-logo"/>
                    </div>
                    <div className="header__contact">
                        <div className="header__contact--phone">
                        <SVGPhone className="icon--phone-white"/>
                            <span>{this.props.phoneNumber}</span>
                        </div>
                        <div className="header__contact--inquiry">
                            {this.props.btnName}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;