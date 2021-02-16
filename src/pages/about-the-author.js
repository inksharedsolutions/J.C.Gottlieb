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
                                J.C. Gottlieb was born on January 23, 1948, the second of seven children born to a FrenchCanadian/Irish Catholic couple, in Manchester, NH. Her parents were working class people
                                whose priorities included sending their children to Catholic schools and giving them a strong
                                Catholic background. Money was never superfluous in the home, but there was always a little
                                set aside for emergencies, such as an illness or a sudden repair.
                            </p>

                            <p>
                                The children attended French Catholic elementary schools, and it was in sixth grade religion
                                class that J.C. learned her initials were the same at Jesus’s. (Upon entering the classroom, she
                                saw her initials on the board and thought she was in trouble. Sister went straight into her
                                religion lesson and pointed to the initials, referring to Jesus Christ. Phew!) When the children
                                were later moved to an all English-speaking school, J.C. found it almost blasphemous to pray
                                in English, the language used on the street.
                            </p>

                            <p>
                                At Saint Joseph’s High School for Girls, J.C. took the college-preparatory track and was wellprepared to start college upon graduation in 1966. Having attended mostly bi-lingual
                                elementary schools, J.C. had had very little science education before high school, and when
                                she started in Biology, she was excited about the new world she was learning about. When one
                                of her favorite teachers suggested that she might have a calling to be a nun, she innocently
                                replied, “I used to think so too, but now that I know about babies, I want to get married and
                                have some myself.”
                            </p>

                            <p>
                                During the last semester of her senior year, J.C. and certain other classmates were offered an
                                opportunity to attend a class at the local college on Saturday mornings. J.C. chose Creative
                                Writing and enjoyed it thoroughly. Her professor encouraged her to look into a career as a
                                writer.
                            </p>

                            <p>
                                At college, J.C. took German to fulfill the language requirement for a B.A. Because the
                                University offered a Junior Year Abroad program, she decided to major in German. The year in
                                Marburg, Germany, was a growing-up experience in many ways. Besides becoming fluent in
                                the language, J.C. learned to live independently. Her many letters home were an opportunity to
                                practice her descriptive writing skills, because life in Germany was very different from life in the
                                United States. Upon her return home, her older sister and husband encouraged her to continue
                                writing, because they had enjoyed her letters.
                            </p>

                            <p>
                                J.C. met her German husband while studying for a Masters degree. They married after three
                                years of dating, and their first child was born the following year. The couple chose to have the
                                next child soon after, so that the children could play together. In 1980, the fourth and last child
                                was born, the first having reached the age of five and a half. During those years, J.C. stayed at
                                home and concerned herself with her children. She occasionally took correspondence courses
                                on writing and continued to write long reports to family and friends about her little family.
                            </p>
                            <p>
                                The oldest child was killed in a car/bicycle accident in 1999, and the shock changed J.C.’s life
                                forever. Wracked with guilt about her daughter’s depression before the accident, J.C. felt like a
                                failure as a parent, her most important job in life. She had returned to the Catholic Church just
                                a few years before and was grateful for having re-found God, but had little solace in prayer or
                                meditation. She started attending daily Mass, and while there, she had dreams or visions of 
                                what her daughter might be doing in heaven. It made her so happy that she wrote down each
                                dream as soon as she returned home.
                            </p>

                            <p>
                                After about a year, she had a story. She decided it would be good to share it with others who
                                had gone through similar losses, but it needed an ending. Over the next fifteen years, she
                                wrote various conclusions, but none seemed right. Finally, in 2015, J.C. believes that the Holy
                                Spirit gave her the needed ending. She first published the story as “Amazing Grace” in 2016. In
                                2020, she revised it just a little and republished it as “For All Eternity.”
                            </p>
                            <p>
                                Currently, J.C. is working on a story set in the future, after the cataclysm of climate change.
                                There, children are raised on farms, away from the city, and are introduced to a life in
                                conjunction with nature. They’re taught from early on that their actions have consequences,
                                and that they’re responsible for keeping their world healthy. Because of the residual poisons
                                from previous centuries, the children are aware of the struggles their farm faces to produce the
                                food they eat. The hope is that the destruction of the planet will not happen again on their
                                watch.
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