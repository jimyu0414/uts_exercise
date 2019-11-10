import React from 'react';
import TextBlockWithTitle from '../components/TextBlockWithTitle';
class HeroSection extends React.Component{
    render(){
        const bgimage = 'herosection ' + this.props.bgimage;
        return(
            <div className={bgimage}>
                <div className="container">
                <TextBlockWithTitle 
                 title = {this.props.title}
                 content = {this.props.content}
                />
                </div>
            </div>
        );
    }
}

export default HeroSection;