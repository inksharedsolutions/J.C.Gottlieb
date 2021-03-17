import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import BookInfo2 from '../components/book-info/book2-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book-min.png'
import Book2 from '../../static/book/book-min2.png'
import { Helmet } from "react-helmet"

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'j-c-gottlieb',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
             <Helmet title="Books | J.C. Gottlieb"/>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={``}
                    contextHeading={`Books`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`A Story of Heaven`,
                                    spanTitle: 'For All Eternity',
                                    imgSrc: Book2,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                        <p>
                                        Iris has gone through five long years of severe depression. Finally, she’s stumbled upon
                                        a career that’ll give her a true reason for living. She’s going to use music to cheer up
                                        very sick people. That’s when she gets hit by a car and dies. Naturally, she’s not happy
                                        about dying, but Jesus tells her she’s suffered enough in her short lifetime, and she’ll
                                        learn to like being in heaven.
                                        </p>

                                        <p>
                                        Iris quickly, almost magically, learns to play all the musical instruments she’s always
                                        wanted to play. Everything is easy in heaven. And she finds a bosom buddy in Ray, a
                                        cousin who’s closer to her age than anyone else there. Ray has taken a job on earth for
                                        the Lord and asks Iris to return with him. A girl who’s a self-mutilator (like Iris was) needs
                                        help. Iris likes the idea of trying to help someone, but she’s afraid she won’t be able to.
                                        She doesn’t realize that all this fits into God’s plan.
                                        </p>
                                    `,
                                    
                                    ebooks:{
                                        // stratton : 'https://stratton-press.com/books/for-all-eternity-a-story-of-heaven/',
                                        barnes: 'https://www.barnesandnoble.com/w/for-all-eternity-jc-gottlieb/1137318333?ean=9781648951008',
                                        amazon :'https://www.amazon.com/All-Eternity-J-C-Gottlieb-ebook/dp/B08CQ9K1K8/ref=sr_1_1?dchild=1&keywords=9781648951008&qid=1594396158&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/All-Eternity-Story-Heaven/dp/164895099X/ref=sr_1_1?dchild=1&keywords=9781648950995&qid=1595342882&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/for-all-eternity-j-c-gottlieb/1137333890?ean=9781648950995',
                                        booksamillion:'https://www.booksamillion.com/p/All-Eternity/J-C-Gottlieb/9781648950995?id=8049069540563&_ga=2.64871663.1598874154.1615218969-2145380449.1604906972',
                                    }
                                }}
                            />

                            <BookInfo2
                                data={{
                                    title:`A Story of Heaven`,
                                    spanTitle: 'Amazing Grace',
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                        <p>
                                        After five years of crippling depression, Iris finally has her life figured out. She’s chosen a career that will make her happy and will help her bring joy in other people’s lives (a high priority for her). Only, this is her last day on earth! Once in heaven, she’s furious about having lost her life, and nothing Jesus says can console her. She does find joy and peace, however, and loves finding something new to learn about. When asked to return to earth in order to help a confused teenager, she’s both elated and apprehensive. She likes the idea of trying to help someone, but she’s not sure she can. Little does she know that God is in charge.
                                        </p>
                                    `,
                                    
                                    ebooks:{
                                        // stratton : 'https://stratton-press.com/books/for-all-eternity-a-story-of-heaven/',
                                        barnes: 'https://www.barnesandnoble.com/w/for-all-eternity-jc-gottlieb/1137318333?ean=9781648951008',
                                        amazon :'https://www.amazon.com/Amazing-Grace-J-C-Gottlieb-ebook/dp/B079651YS8/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1615951840&sr=1-7', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Amazing-Grace-J-C-Gottlieb/dp/1512764655/ref=sr_1_7?dchild=1&qid=1615951840&refinements=p_27%3AJ+C+Gottlieb&s=books&sr=1-7&text=J+C+Gottlieb',
                                        barnes:'https://www.barnesandnoble.com/w/for-all-eternity-j-c-gottlieb/1137333890?ean=9781648950995',
                                        booksamillion:'https://www.booksamillion.com/p/All-Eternity/J-C-Gottlieb/9781648950995?id=8049069540563&_ga=2.35848160.1795637206.1612940477-2145380449.1604906972#',
                                    }
                                }}
                            />
                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;