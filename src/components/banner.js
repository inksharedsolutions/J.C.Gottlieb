import React,{useEffect, useRef} from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/book/book-min2.png'

const Banner = ()=>{

    const elemBanner = useRef(null);

    useEffect(() => {

    });
 

    return (
        <>
            <section className="banner-section">

                    <div className="grid-two-layout-col">
                        <div className="wrapper-bg-left">
                            <div className="left-col">
                                <div className="banner-content-wrapper">
                                    <h1>
                                        <span className="first-block">
                                            <span id="color-o">
                                                For All
                                            </span>
                                        </span>

                                        <span className="second-block">
                                            <span id="color-u">
                                             Eternity
                                            </span>
                                        </span>
                                    </h1>
                                    <p>
                                    Iris has gone through five long years of deep depression, with almost no breaks. Finally, she's had found a career that gives joy to those suffering from life-threatening illness. Before she can implement her plan, however, she is hit by a car and dies.
                                    </p>

                                    <button>
                                        <Link to="/books">
                                            Read More
                                        </Link>
                                    </button>
                               
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-bg-right">
                            <div className="right-col banner-img-col">

                                <div className="img-banner-wrapper" ref={elemBanner}>
                                    <img src={ImgBanner} alt="book"/>
                                </div>

                            </div>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default Banner;