import React from 'react';

class TextBlockWithTitle extends React.Component{
    render(){

        return(
            <div className="textblock">
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default TextBlockWithTitle;