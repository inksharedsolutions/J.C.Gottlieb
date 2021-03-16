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
                                        Iris has gone through five long years of deep depression, with almost no breaks. Finally, she has found a career that gives her a true reason for living. She wants to use music to bring joy to those suffering from life-threatening illness. Before she can implement her plan, however, she is hit by a car and dies. When she arrives in heaven, Jesus tells her that she was given the shortcut to heaven because she has suffered enough in her short lifetime.
                                        </p>

                                        <p>
                                        Everything seems to be easier in heaven. Iris learns to play all the musical instruments she has always wanted to play. She also visits new places on earth as well as old familiar ones, always as a spirit, and usually with her cousin and kindred spirit, Ray. While she spends her first Christmas in Old Bethlehem, Ray takes a job on earth for the Lord. He asks Iris to come down to earth and help a girl who is a self-mutilator. Iris is both elated and apprehensive. She likes the idea of trying to help someone, but she's not sure she can. She doesn't realize that God is in charge, and all of this fits into his plan.
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