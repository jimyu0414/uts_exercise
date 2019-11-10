import React from 'react';
import './Main.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import { ReactComponent as USTLogo }  from './svg/uts-logo.svg';
import HeroSection from './layouts/HeroSection';
import HomeContent from './components/HomeContent'
class App extends React.Component{
  
  render(){

    /* local setup for header component */
    const logo = USTLogo;
    const phoneNumber = "1300 747 767";
    const btnName = 'Enquire Now';

    /* local setup for nav component */
    const navs = ['Online courses','Studying online','How to apply','Course fees','Blog']

    /* local setup for hero section bg image */
    const heroimage = 'herosection__uts';

    /* local setup for Text block of hero section */
    const textBlockTitle = 'UTS is now 100% Online';
    const textBlock = 'Our online postgraduate courses are designed with the future of work in mind. Learn from one of Australia’s leading universities and be at the forefront of technology.';
    return (
      <div>
        <Header 
          logo = {logo}
          phoneNumber = {phoneNumber}
          btnName = {btnName}
        />
        <Nav nav={navs}/>
        <HeroSection 
        bgimage = {heroimage}
        title = {textBlockTitle}
        content = {textBlock}
        />
        <HomeContent />
      </div>
    );
  }
  
}

export default App;

//header and navigation are flexiable and reusable

//layout got title texts

//didn't setup variable for font-sizes and color pallete