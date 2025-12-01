import React from 'react';
import './TitleText.css';

interface TitleTextProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const TitleText: React.FC<TitleTextProps> = ({ 
  text, 
  size = 'large', 
  className = '' 
}) => {
  return (
    <h1 className={`title-text title-text--${size} ${className}`}>
      {text}
    </h1>
  );
};

export default TitleText; 