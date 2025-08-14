import React, { useEffect, useRef, useState } from 'react';
import TitleElement from './TitleElement';
import { createScope, animate, onScroll } from 'animejs';

interface AnimationState {
    hasScrolled: boolean;
    scrollProgress: number;
    isHeaderMode: boolean;
}

const TitleElementParent: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scope = useRef<any>(null);
    const [animationState, setAnimationState] = useState<AnimationState>({
        hasScrolled: false,
        scrollProgress: 0,
        isHeaderMode: false
    });

    useEffect(() => {
        if (containerRef.current) {
            scope.current = createScope({ root: containerRef }).add((self: any) => {
                // Initial title shrink animation with scroll observer
                self.add('shrinkTitle', () => {
                    animate('.home-page__title', {
                        scale: [1, 0.6],
                        translateY: [0, -100],
                        duration: 1000,
                        autoplay: onScroll({
                            container: window,
                            target: '.title-element-container',
                            axis: 'y',
                            enter: 'top bottom', // Triggers when top of container enters bottom of viewport
                            leave: 'bottom top', // Triggers when bottom of container leaves top of viewport
                            onEnter: () => {
                                setAnimationState(prev => ({ ...prev, hasScrolled: true }));
                            },
                            onLeave: () => {
                                setAnimationState(prev => ({ ...prev, hasScrolled: false }));
                            }
                        })
                    });
                });

                // Transform title to header bar with scroll threshold
                self.add('transformToHeader', () => {
                    animate('.home-page__content', {
                        height: [300, 80],
                        padding: [40, 20],
                        borderRadius: [20, 15],
                        duration: 500,
                        ease: 'outCubic',
                        autoplay: onScroll({
                            container: window,
                            target: '.title-element-container',
                            axis: 'y',
                            enter: 'center center', // Triggers when center of container reaches center of viewport
                            onEnter: () => {
                                setAnimationState(prev => ({ ...prev, isHeaderMode: true }));
                            }
                        })
                    });

                    animate('.home-page__title', {
                        scale: [1, 0.8],
                        translateY: [0, 0],
                        duration: 500,
                        ease: 'outCubic',
                        autoplay: onScroll({
                            container: window,
                            target: '.title-element-container',
                            axis: 'y',
                            enter: 'center center'
                        })
                    });

                    animate('.home-page__subtitle', {
                        opacity: [0.8, 0],
                        height: [40, 0],
                        marginTop: [20, 0],
                        duration: 400,
                        ease: 'outCubic',
                        autoplay: onScroll({
                            container: window,
                            target: '.title-element-container',
                            axis: 'y',
                            enter: 'center center'
                        })
                    });

                    animate('.scroll-icon-container', {
                        opacity: [1, 0],
                        height: [40, 0],
                        marginTop: [40, 0],
                        duration: 400,
                        ease: 'outCubic',
                        autoplay: onScroll({
                            container: window,
                            target: '.title-element-container',
                            axis: 'y',
                            enter: 'center center'
                        })
                    });
                });

                // Fade in content sections with scroll threshold
                self.add('revealContent', () => {
                    animate('.content-section', {
                        opacity: [0, 1],
                        translateY: [50, 0],
                        duration: 800,
                        delay: (el: any, i: number) => i * 200,
                        ease: 'outCubic',
                        autoplay: onScroll({
                            container: window,
                            target: '.content-section',
                            axis: 'y',
                            enter: 'bottom top', // Triggers when bottom of section enters top of viewport
                            onEnter: () => {
                                // Individual section enters viewport
                            }
                        })
                    });
                });

                // Restore original title state when scrolling back up
                self.add('expandTitle', () => {
                    animate('.home-page__content', {
                        height: [80, 300],
                        padding: [20, 40],
                        borderRadius: [15, 20],
                        duration: 300,
                        ease: 'outCubic',
                        autoplay: onScroll({
                            container: window,
                            target: '.title-element-container',
                            axis: 'y',
                            enter: 'top bottom', // Triggers when scrolling back to top
                            onEnter: () => {
                                setAnimationState(prev => ({ ...prev, isHeaderMode: false }));
                            }
                        })
                    });

                    animate('.home-page__title', {
                        scale: [0.8, 1],
                        translateY: [0, 0],
                        duration: 300,
                        ease: 'outCubic',
                        autoplay: onScroll({
                            container: window,
                            target: '.title-element-container',
                            axis: 'y',
                            enter: 'top bottom'
                        })
                    });

                    animate('.home-page__subtitle', {
                        opacity: [0, 0.8],
                        height: [0, 40],
                        marginTop: [0, 20],
                        duration: 300,
                        ease: 'outCubic',
                        autoplay: onScroll({
                            container: window,
                            target: '.title-element-container',
                            axis: 'y',
                            enter: 'top bottom'
                        })
                    });

                    animate('.scroll-icon-container', {
                        opacity: [0, 1],
                        height: [0, 40],
                        marginTop: [0, 40],
                        duration: 300,
                        ease: 'outCubic',
                        autoplay: onScroll({
                            container: window,
                            target: '.title-element-container',
                            axis: 'y',
                            enter: 'top bottom'
                        })
                    });
                });
            });

            return () => {
                if (scope.current) {
                    scope.current.revert();
                }
            };
        }
    }, []);

    return (
        <div className="title-element-container" ref={containerRef}>
            <TitleElement animationState={animationState} />
        </div>
    );
};

export default TitleElementParent;
