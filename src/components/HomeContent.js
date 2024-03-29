import React from 'react';
import { ReactComponent as  SVGbrain }  from '../svg/icon-brain-blue.svg';
import { ReactComponent as  SVGtrophy }  from '../svg/icon-trophy-blue.svg';
import { ReactComponent as SVGtraining  }  from '../svg/icon-online-training-blue.svg';
import { ReactComponent as  SVGnetwork }  from '../svg/icon-network-blue.svg';
import { ReactComponent as  SVGarrowright }  from '../svg/icon-arrow-right-blue.svg';

/* This component will contain all static contents of home page */
class HomeContent extends React.Component{
    render(){
        return(
            <div className="all-consisted-contents">
                <div className="page__row page__row-info">
               <div className="container">
                   <div className="page__onlineCard">
                    <div className="page__onlineCard--title">
                        Why study at UTS Online
                    </div>
                    <div className="page__onlineCard--content-container">
                    <div className="page__onlineCard--content">
                        <div>
                            <SVGbrain className="icon icon--brain"/>
                        </div>
                        <div>
                            <p>Skills for the future of work</p>
                            <p>UTS Online ensure you have the skills to excel in your career, however technology changes it.</p>
                        </div>
                    </div>
                    <div className="page__onlineCard--content">
                        <div>
                            <SVGtrophy className="icon icon--trophy"/>
                        </div>
                        <div>
                            <p>UTS is ranked Australia’s No. 1 Young University*</p>
                            <p>Learn at Australia’s top young university in Australia as voted by QS Top 50 Under 50 for 2018-2019.</p>
                        </div>
                    </div>
                    
                    <div className="page__onlineCard--content">
                        <div>
                            <SVGtraining className="icon icon--train"/>
                        </div>
                        <div>
                            <p>Delivering authentic and applied learning</p>
                            <p>UTS Online works with industry and government to deliver practical courses with a global perspective.</p>
                        </div>
                    </div>

                    <div className="page__onlineCard--content">
                        <div>
                            <SVGnetwork className="icon icon--network"/>
                        </div>
                        <div>
                            <p>Keeping you connected</p>
                            <p>100% online learning that’s collaborative and social so you can build relationships to enrich your study and career.</p>
                        </div>
                    </div>
                    </div>
                   </div>
                   <div className="page__courses">
                        <h1>Our 100% Online postgraduate courses</h1>
                        <div className="course-panel">
                            <ul className="course-panel__nav">
                                <li className="course-active">Business Analytics</li>
                                <li>Digital Marketing</li>
                                <li>Helth Management</li>
                                <li>Nursing Practice</li>
                            </ul>
                            <div className="course-panel__content">
                                <div className="course-panel__content--img">
                                <img src={require('../img/Bitmap.png')} />
                                <p>Business Analytics courses</p>
                                </div>
                            
                            <div className="course-panel__content--links">
                                <div className="course-panel--link">
                                    <p>Master of Business Analytics</p>
                                    <SVGarrowright className="icon icon--arrowright"/>
                                </div>
                                <div className="course-panel--link">
                                    <p>Graduate Diploma in Business Analytics</p>
                                    <SVGarrowright className="icon icon--arrowright"/>
                                </div>
                                <div className="course-panel--link">
                                    <p>Graduate Certificate in Business Analytics</p>
                                    <SVGarrowright className="icon icon--arrowright"/>
                                </div>
                            </div>
                            </div>
                            <div className="course-panel__footer">
                                <p>
                                *Source: QS Top Universities
                                </p>
                            </div>
                        </div>
                   </div>
               </div>
            </div>
            <div className="page__row page__row-uni-rank">
                <div className="container uni-rank">
                    <div className="uni-rank__header">
                        <h1>UTS is a world-class university</h1>
                    </div>
                    <div className="uni-rank__content">
                        <div className="uni-rank__content--list">
                            <div className="uni-rank--img-container">
                            <img src={require('../img/ranking.png')} />
                            </div>
                            <p>
                            UTS is ranked at 150 Top University <br /> in the world
                            </p>
                        </div>
                        <div className="uni-rank__content--list">
                        <div className="uni-rank--img-container">
                            <img src={require('../img/grade.png')} />
                            </div>                            <p>
                            Up 5 positions from 2018
                            </p>
                        </div>
                        <div className="uni-rank__content--list">
                        <div className="uni-rank--img-container">
                            <img src={require('../img/stars.png')} />
                            </div>                           
                             <p>
                            Across 7 categories
                            </p>
                        </div>
                    </div>
                    <div className="uni-rank__footer">
                        <p>
                        *Source: <a href="#">QS Top Universities</a>
                        </p>
                    </div>
                </div>
            </div>
            </div>
            
        );
    }
}

export default HomeContent;