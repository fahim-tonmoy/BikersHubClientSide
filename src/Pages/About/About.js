import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <>
        <Navigation />
        <AboutStyled>
            <div className="container">
                <h2 className='fw-bold display-4'>About Us</h2>
                    <p className=''>BikersHub is a web portal for personal practice. We are a team who believe that the customer is king and strive to make sure you are treated like a king. Our efforts and drive doesn’t just come from one person but from all of our partners and employees. We believe that together we can make your experience one that you never forget. That’s why our website is your one stop shop for two wheelers.
                    <br />
                    <br />
                    On our site, you can see bike, buy and find dealers and even get the on-road price of the bike you’re looking for. We pride ourselves on giving you everything that you need to make a decision while buying a bike. So on our site, you can also calculate your  options, find tyres for your bike and also write your own personal review of a bike.
                    <br />
                    <br />
                    Besides all this, we also have an editorial section where you can check out the latest news in the two-wheeler industry; find feature stories and great advisory stories that will help you become a better rider and help you maintain your bike as well. Sounds like we’ve given you everything you need right? Well there’s one more section that plays a vital role in helping you finalise which bike to buy: The Expert Reviews section. It contains detailed analysis of bikes by biking and industry professionals with years of experience. They test the bikes and give their honest opinions on the positives and negatives while also giving you an unbiased verdict of the bike. If you’d rather watch a video review of a new bike, you can do that too in our video review section.
                    <br />
                    <br />
                    We love what we do and our passion for motorcycles and people is what drives us to constantly better ourselves to help you. Innovation, Reliability and Client-friendliness are the key values that we hold dear. BikersHub provides you with all the information you need to make a well informed buying decision.</p>
            </div>
        </AboutStyled>
        <Footer />
        </>
    );
};

const AboutStyled = styled.div`
.container {
    margin-top: 70px;
    margin-bottom: 6px;
    p{
        margin-top: 60px;
        margin-bottom: 65px;
        text-align: justify;
    }
}
`;

export default About;