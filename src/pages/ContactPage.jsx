import React from 'react';
import NewLayout from '../components/NewLayout';
// import Layout from '../components/Layout';
import './ContactPage.css';

// function ContactPage() {
//     return (
//         <>
//             <Layout>
//                 <p>mail at anmolsinghbhullar dot me</p>
//                 <p>Contact me for an address to send snail mail.</p>
//                 <p>Github</p>
//                 <p>Threads</p>
//             </Layout>
//         </>
//     );
// }

const ContactPage = () => {
    const page_nav = (
        <ul>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/contact/personal/'>Socials</a></li>
        </ul>
    );

    const mainContent = (
        <p>
            Github / Threads / Climbing app? / Strava
        </p>
    );

    return (
        <NewLayout page_nav={page_nav} children={mainContent} />
    )
}

export default ContactPage;