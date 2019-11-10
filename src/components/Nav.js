import React from 'react';

class Nav extends React.Component{
    render(){
        //get nav data from its parent 'App'
        const Nav = this.props.nav.map((navItem,i) => {
            return(
            <li key={i}>{navItem}</li>
            );
        })
        return(
            <nav className="nav"> 
              <div className="container">
                 <ul>
                    {Nav}
                </ul>
              </div>           
            </nav>
        );
    }
}

export default Nav;