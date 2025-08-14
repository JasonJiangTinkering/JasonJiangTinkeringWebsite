import './TitleElement.css';
import TitleText from '../../components/TitleText';
import ContentSections from './ContentSections';
import { useEffect, useRef } from 'react';
import { createScope, animate } from 'animejs';

interface AnimationState {
    hasScrolled: boolean;
    scrollProgress: number;
    isHeaderMode: boolean;
}

interface TitleElementProps {
    animationState: AnimationState;
}

const TitleElement: React.FC<TitleElementProps> = ({ animationState }) => {
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
        <div className="home-page" ref={root}>
            <div className="home-page__content">
                <TitleText 
                text="Jason Jiang's Website" 
                size={animationState.isHeaderMode ? "medium" : "large"}
                className="home-page__title"
                />
                {!animationState.isHeaderMode && (
                    <>
                        <div className="home-page__subtitle">
                        Welcome to my personal website
                        </div>
                        <div className="scroll-icon-container">
                            <img 
                                src="/scroll-icon.png" 
                                alt="Scroll down" 
                                className="scroll-icon"
                            />
                        </div>
                    </>
                )}
            </div>
            
            <ContentSections animationState={animationState} />
        </div>
    )
}

export default TitleElement;