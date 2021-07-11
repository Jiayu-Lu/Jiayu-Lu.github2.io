import React, { Component} from 'react'; 
import './aLiShow.css';

import camera from '../../images/svg/camera.svg'
import file_earmark_image from '../../images/svg/file-earmark-image.svg'
import phone from '../../images/svg/phone.svg'
import x_diamond from '../../images/svg/x-diamond.svg'
import cup from '../../images/svg/cup.svg'
import video_not_available from '../../images/picture/video_notAvailable.png'


export default class aLiShow extends Component{
    render() {

        return (
            <div className="aLiShow_page">
                
                <div className="container"> 
                    <div className='row'>
                        <header className="col-md-2">

                            <div className="aLiShow_logo">
                                <a href="#">
                                    aLiShow
                                </a>
                            </div>
                            <div className="aLiShow_nav">
                                <ul>
                                    <li>
                                        <a href='#'><img src={camera} />Life</a>
                                    </li>
                                    <li>
                                        <a href='#'><img src={file_earmark_image} />Nature</a>
                                    </li>
                                    <li>
                                        <a href='#'><img src={phone} />Technology</a>
                                    </li>
                                    <li>
                                        <a href='#'><img src={x_diamond} />Interest</a>
                                    </li>
                                    <li>
                                        <a href='#'><img src={cup} />Food</a>
                                    </li>
                                </ul>
                            </div>

                        </header>

                        <article className="col-md-7">
                            <div className='aLiShow_news'>
                                <ul className='clearfix'>
                                    <li>
                                        <a href="#">
                                            <img src={video_not_available} />
                                            <p>Today's news 1</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={video_not_available} />
                                            <p>Today's news 2</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={video_not_available} />
                                            <p>Today's news 3</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={video_not_available} />
                                            <p>Today's news 4</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={video_not_available} />
                                            <p>Today's news 5</p>
                                        </a>
                                    </li>
                                </ul>

                                <div className='aLiShow_publish'>
                                    <div className='row'>
                                        <div className='col-sm-8 d-none d-lg-block d-xl-block'>
                                            <h3>Heading 1</h3>
                                            <p className='text-muted'>User1 publish on 2021-7-10</p>
                                            <p>Content 1</p>
                                            <p className='text-muted'>Comment(200)&nbsp; &nbsp;Like(20)</p>
                                        </div>
                                        <div className='col-sm-4 aLiShow_pic'>
                                            <img src={video_not_available} />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-sm-8 d-none d-lg-block d-xl-block'>
                                            <h3>Heading 2</h3>
                                            <p className='text-muted'>User2 publish on 2021-7-9</p>
                                            <p>Content 2</p>
                                            <p className='text-muted'>Comment(300)&nbsp; &nbsp;Like(10)</p>
                                        </div>
                                        <div className='col-sm-4 aLiShow_pic'>
                                            <img src={video_not_available} />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-sm-8 d-none d-lg-block d-xl-block'>
                                            <h3>Heading 3</h3>
                                            <p className='text-muted'>User3 publish on 2021-7-8</p>
                                            <p>Content 3</p>
                                            <p className='text-muted'>Comment(300)&nbsp; &nbsp;Like(10)</p>
                                        </div>
                                        <div className='col-sm-4 aLiShow_pic'>
                                            <img src={video_not_available} />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-sm-8 d-none d-lg-block d-xl-block'>
                                            <h3>Heading 4</h3>
                                            <p className='text-muted'>User2 publish on 2021-7-7</p>
                                            <p>Content 4</p>
                                            <p className='text-muted'>Comment(300)&nbsp; &nbsp;Like(10)</p>
                                        </div>
                                        <div className='col-sm-4 aLiShow_pic'>
                                            <img src={video_not_available} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="col-md-3">
                            <div className='aLiShow_banner'>
                                <a href='#' className='aLiShow_banner_title'>
                                    aLiShow Community
                                </a>

                                <a href='#' className='aLiShow_hot'>
                                    <h4>Welcome to aLiShow community</h4>
                                    <p>
                                        aLiShow is a video platform where people uploads video of their interests 
                                        and communicate with each other
                                    </p>
                                </a>
                                <button className="btn btn-primary">Join</button>
                            </div>
                        </aside>
                    </div>
                </div>
            
            </div>
        )
        
    }
}