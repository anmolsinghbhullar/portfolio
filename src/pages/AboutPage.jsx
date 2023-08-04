import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css'

function AboutPage() {
    // to use this in the return statement:
    // {summary.map((line, index) => (<React.Fragment key={index}> {line} <br /> </React.Fragment>))}
    const summary = [
        "Hi! I'm a full stack web dev proficient in React and other front-end",
        "front-end frameworks along with being able to handle back-end",
        "development such as database ops and server configurations with",
        "(mostly) the Node js framework. I have developed APIs to aid in",
        "to aid in front-back end communications in GRAPHQL and have used",
        "both GRAPHQL and REST APIs in multiple front-end web",
        "applications. I graduate university with a mathematics degree so I",
        "also dabble with a few open source projects that involve a bit of",
        "Mathematics, mostly those involving evaluating math expressions."
    ];

    const exp = [
        "Front-end: React, JavaScript/TypeScript, Adobe PhotoShop and Illustrator and Figma",
        "Back-end: NodeJS, Python, JavaScript, GRAPHQL, MySQL, Azure, Cloudflare"
    ];

    const socials = [
        "Goodreads", "Github", "Threads"
    ];

    const [content, setContent] = React.useState(summary);

    function handleSummaryClick() {
        setContent(summary);
    }

    function handleExpClick() {
        setContent(exp);
    }

    function handleSocialsClick() {
        setContent(socials);
    }

    return (
        <>
            <Layout>
                <div className='card'>
                    <div className='card-header'>
                        <div className='card-avi'>
                            <img src='/src/assets/cat-grimacing.png' alt='description' />
                        </div>
                        <div className='card-title'>
                            <h1>About Me</h1>
                            <ul>
                                <li className='card-title-home'><a href='/'>Home</a></li>
                                <li><a href='/about'>About</a></li>
                                <li><a href='/projects'>Projects</a></li>
                                <li><a href='/contact'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='card-nav'>
                            <ul>
                                <li><a href='/about'>Summary</a></li>
                                <li><a href='/about/exp'>Experience</a></li>
                                <li><a href='/about/socials'>Socials</a></li>
                            </ul>
                        </div>
                        <div className='card-content'>
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default AboutPage;