import React from 'react';
import './ContentSections.css';

interface AnimationState {
    hasScrolled: boolean;
    scrollProgress: number;
    isHeaderMode: boolean;
}

interface ContentSectionsProps {
    animationState: AnimationState;
}

const ContentSections: React.FC<ContentSectionsProps> = ({ animationState }) => {
    return (
        <div className="scroll-content">
            <div className="content-section">
                <h2>About Me</h2>
                <p>I'm a passionate developer who loves creating amazing web experiences. This website showcases my work and interests.</p>
            </div>
            
            <div className="content-section">
                <h2>Skills</h2>
                <p>React, TypeScript, CSS, Animation, and much more. I'm always learning and exploring new technologies.</p>
            </div>
            
            <div className="content-section">
                <h2>Projects</h2>
                <p>From web applications to creative experiments, I love building things that make a difference.</p>
            </div>
            
            <div className="content-section">
                <h2>Contact</h2>
                <p>Let's connect and build something amazing together!</p>
            </div>
        </div>
    );
};

export default ContentSections; 