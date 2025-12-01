import './TitleElement.css';
import TitleText from '../../atomic_components/TitleText';
import ContentSections from '../content_components/ContentSections';
import { useEffect, useRef } from 'react';
import { createScope, animate } from 'animejs';

const TitleElement: React.FC = () => {
    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<any>(null);

    useEffect(() => {
        if (root.current) {
            scope.current = createScope({ root }).add((self: any) => {
                // Create a bounce animation for the scroll icon
                animate('.scroll-icon', {
                    scale: [
                        { to: 1.1, ease: 'inOut(3)', duration: 800 },
                        { to: 1, ease: 'out(4)', duration: 600 }
                    ],
                    y: [
                        { to: -10, ease: 'inOut(3)', duration: 800 },
                        { to: 0, ease: 'out(4)', duration: 600 }
                    ],
                    loop: true,
                    loopDelay: 2000,
                });
            });

            // Cleanup function
            return () => {
                if (scope.current) {
                    scope.current.revert();
                }
            };
        }
    }, []);

    return (
        <div className="title-component-container" ref={root}>
            <div className="title-component-content">
                <TitleText
                    text="DRONE class"
                    size="large"
                    className="title-component-title"
                />

                <div className="title-component-subtitle">
                    <a href="https://www.linkedin.com/in/jj27/" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0, pointerEvents: 'auto', left: 0, top: 0 }}>
                        {/* Invisible link for accessibility */}
                        <span style={{ display: 'none' }}>Jason Jiang LinkedIn</span>
                    </a>
                    Designed by Jason Jiang
                    <br />
                    
                </div>
                <br></br>
                <div>
                    Through collaboration & technology usage techniques, 
                    <br />
                    highschoolers can manifest change in the commmunity around them.
                </div>
                <div className="scroll-icon-container">
                    <img
                        src="/scroll-icon.png"
                        alt="Scroll down"
                        className="scroll-icon"
                    />
                </div>
            </div>

        </div>
    )
}

export default TitleElement;