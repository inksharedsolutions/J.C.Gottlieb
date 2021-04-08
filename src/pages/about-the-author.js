import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author-photo.png'
import { Helmet } from "react-helmet"
const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
             <Helmet title="About the Author | J.C. Gottlieb"/>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div> 

                            <div className="heading-quote">
                                <h4>
                                    
                                </h4>
                                
                                {/* <span className="ata-span-fx">
                                “Heaven is a lot like earth in many ways, but you only do what you want to do. That’s the reward for having been good on earth and doing all the stuff you didn’t really want to do.”
                                </span> */}
                            </div>
                        </div>

                        <article 
                            className="article-section" 
                            id="author">

                            <p>
                            J.C. Gottlieb was born on January 23, 1948, the second of seven children born to a French-Canadian/Irish Catholic couple, in Manchester, NH. Her parents were working class people whose priorities included sending their children to Catholic schools and giving them a strong Catholic background.
                            </p>
                            
                            <p>
                            She attended bi-lingual Catholic schools and was equally fluent in French and English. During the last semester of her senior year in high school, she was offered the opportunity to attend a college-level class at the local college on Saturday mornings. J.C. chose Creative Writing and enjoyed it thoroughly.
                            </p>

                            <p>
                            At college, J.C. took German to fulfill the language requirement for a B.A. She did well in it, and when she found out the University offered a Junior Year Abroad in Germany, she decided to make it her major. The year in Marburg, Germany, was a growing-up experience in many ways. J.C. became fluent in the language and developed self-confidence and independence. Her many letters home were an opportunity to practice her descriptive writing skills.
                            </p>

                            <p>
                            While studying for a Masters degree, J.C. met her German husband Fred. Their children were born in 1974, 1976, 1978, and 1980. J.C., with Fred’s support, chose to be a stay-at-home mom, at least for the first years. She occasionally took correspondence courses on writing and continued to write long annual reports to family and friends.
                            </p>

                            <p>
                            When the oldest daughter was killed in a car/bicycle accident in 1999, the shock changed J.C.’s life forever. She had returned to the Catholic Church just a few years before and was grateful for having re-found God, but she had little solace in prayer or meditation. She started attending daily Mass, and while there, she had dreams or visions of what her daughter might be doing in heaven. It made her so happy that she wrote down each dream as soon as she returned home.
                            </p>

                            <p>
                            After about a year, she had a story. She decided it might comfort others who had gone through similar losses, but it needed an ending. Over the next fifteen years, J.C.wrote various conclusions, but none seemed right. Finally, in 2015, the ending suddenly popped into her head. She was sure it came from the Holy Spirit. She first published her story with Westbow Press in 2016 as “Amazing Grace.” In 2020, she revised it just a little and republished it with Stratton Press as “For All Eternity.”
                            </p>

                            <p>
                            Currently, J.C. is working on a story set in the future, after the cataclysm of climate change. There, children are raised on farms, away from the city. They’re taught from early on that their actions have consequences, and that they’re responsible for keeping their world healthy. The hope is that the destruction of the planet will not happen again.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    J.C. Gottlieb
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;
