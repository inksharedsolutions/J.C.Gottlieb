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
                                
                                <span className="ata-span-fx">
                                “Heaven is a lot like earth in many ways, but you only do what you want to do. That’s the reward for having been good on earth and doing all the stuff you didn’t really want to do.”
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section" 
                            id="author">

                            <p>
                            J.C. Gottlieb was born on January 23, 1948, the second of seven children born to a FrenchCanadian/Irish Catholic couple, in Manchester, NH. Her parents were working class people whose priorities included sending their children to Catholic schools and giving them a strong Catholic background.
                            </p>
                            
                            <p>
                            J.C. grew up with plenty of relatives nearby. She remembers her Memere teaching her to sing hymns in French at the age of three, accompanying her on the accordion. J.C. was mesmerized by her grandmother’s fingers pushing all the correct buttons without looking. She also remembers how her Nana described Ireland so vividly to her one evening that she can still see to this day what the magical island looked like in her imagination.
                            </p>

                            <p>
                            She attended bi-lingual Catholic schools and was equally fluent in French and English. In high school for Girls, J.C. took the college-preparatory track and was well prepared to start college upon graduation in 1966. During the last semester of her senior year, she and certain other classmates were offered an opportunity to attend a college-level class at the local college on Saturday mornings. J.C. chose Creative Writing, enjoyed it thoroughly, and her professor encouraged her to consider a career as a writer.
                            </p>

                            <p>
                            At college, J.C. took German to fulfill the language requirement for a B.A. She did well in it, and when she found out the University offered a Junior Year Abroad in Germany, she decided to make it her major. The year in Marburg, Germany, was a growing-up experience in many ways. J.C. became fluent in the language and developed self-confidence and a sense of independence. Her many letters home were an opportunity to practice her descriptive writing skills. Life in Germany was very different from life in New England. Her family encouraged her to continue writing.
                            </p>

                            <p>
                            J.C. met her German husband while studying for a Masters degree. They married after three years, and their first child was born the following year. The couple chose to have all their children close together so that they could grow up as friends. The fourth and last child was born when the oldest was only five and a half. During those years, J.C. stayed at home and busied herself with raising their children. She occasionally took correspondence courses on writing and continued to write long annual reports to family and friends.
                            </p>

                            <p>
                            When the oldest child was killed in a car/bicycle accident in 1999, the shock changed J.C.’s life forever. Wracked with guilt about her daughter’s depression before the accident, J.C. felt like a failure as a parent, which she saw as her most important job in life. She had returned to the Catholic Church just a few years before and was grateful for having re-found God, but she had little solace in prayer or meditation after losing her daughter. She started attending daily Mass, and while there, she had dreams or visions of what her daughter might be doing in heaven. It made her so happy that she wrote down each dream as soon as she returned home.
                            </p>

                            <p>
                            After about a year, she had a story. She decided it would be good to share it with others who had gone through similar losses, but it needed an ending. Over the next fifteen years, J.C. wrote various conclusions, but none seemed right. Finally, in 2015, the Holy Spirit inspired her with the ending she finally wrote. She first published the story as “Amazing Grace” in 2016. In 2020, she revised it just a little and republished it as “For All Eternity.”
                            </p>
                            <p>
                            Currently, J.C. is working on a story set in the future, after the cataclysm of climate change. There, children are raised on farms, away from the city, and are trained to live in balance with nature. They’re taught from early on that their actions have consequences, and that they’re responsible for keeping their world healthy. Because of the residual poisons from previous centuries, the children are aware of the struggles their farm faces to produce the food they eat. The hope is that the destruction of the planet will not happen again on their watch.
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