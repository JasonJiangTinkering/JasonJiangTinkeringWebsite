import React from 'react';
import './ContentSections.css';
import ClassSection from './ClassSection';
import Partnerships from './Partnerships';

const ContentSections: React.FC = () => {
    return (
        <div className="scroll-content">
            <ClassSection/>
            <Partnerships/>
            <div id="community-members-needed" className="content-section">
                <h2>Our students are still looking for community members.</h2>
                <ol style={{ textAlign: 'left' }}>
                    <li>Be a spark of innovation: share stories & share a problem you see in the community for students to improve with technology they are learning.</li>
                    <li>Be a role model: Share how you use techniques in class in your daily work.</li>
                </ol>
                <br />
                <div className="cta-links">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScHAqOUrXMNpiaF9KRVLfB_mRun0A0b7bScHF7kulNNdzR4bg/viewform?usp=publish-editor">Learn more and sign up here.</a>
                </div>
            </div>
        </div>
    );
};

export default ContentSections; 