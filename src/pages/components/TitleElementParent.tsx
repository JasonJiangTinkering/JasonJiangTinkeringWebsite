import React, { useEffect, useRef, useState } from 'react';
import TitleElement from './TitleElement';
import { createScope, animate, onScroll } from 'animejs';


const TitleElementParent: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);


    
    return (
        <div className="title-element-container" ref={containerRef}>
            <TitleElement/>
        </div>
    );
};

export default TitleElementParent;
