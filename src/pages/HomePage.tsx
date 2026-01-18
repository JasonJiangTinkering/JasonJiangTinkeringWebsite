import React from 'react';
import TitleElementParent from './components/TitleElementParent';
import CommunityBanner from './components/CommunityBanner';
import ContentSections from './content_components/ContentSections';
const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="contact-card-section">
        <div className="contact-card" style={{border: '1px solid #ddd', borderRadius: '8px', padding: '1.2rem', maxWidth: 350, margin: '2rem auto', boxShadow: '0 2px 12px #0002'}}>
          <h2>Contact Me</h2>
          <div style={{marginBottom: '0.6rem'}}>Email me <b>I answer: M-W-F 9AM-5PM</b></div>
          <div>
            <span style={{fontWeight: 500}}>Email:</span>{' '}
            <a href="mailto:JJiang9@schools.nyc.gov">JJiang9@schools.nyc.gov</a>
          </div>
          <div style={{marginTop: '0.6rem'}}>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <section className="cards-blog-section" style={{marginTop: '2.4rem'}}>
        <h2 style={{textAlign: 'center', marginBottom: '1.3rem'}}>Explore my Work</h2>
        <div className="program-card-list" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem'}}>
          {/* WonderBrink */}
          <a href="/wonderbrink" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="program-card" style={{border: '1px solid #eee', borderRadius: '7px', width: 260, padding: '1rem', boxShadow: '0 1px 8px #0001', transition: 'transform 0.15s', background: '#fafbff', height: '100%'}}>
              <h3>WonderBrink @ Buffalo</h3>
              <p>I took a week long trip to buffalo. There I took many drone recordings and interviews, recieved donated drone materials, and spoke about the importance of meaningful work for students once in highschool.</p>
            </div>
          </a>
          {/* Computer Applications */}
          <a href="/computer-applications" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="program-card" style={{border: '1px solid #eee', borderRadius: '7px', width: 260, padding: '1rem', boxShadow: '0 1px 8px #0001', transition: 'transform 0.15s', background: '#fafbff', height: '100%'}}>
              <h3>Computer Applications</h3>
              <p>I created a lesson plan for students to learn about the physical needs deficents of NYCHA housing, while learning about Pointpoint and SmartArt, as a part of the computer application class</p>
            </div>
          </a>
          {/* Drone Class */}
          <a href="/drone-class" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="program-card" style={{border: '1px solid #eee', borderRadius: '7px', width: 260, padding: '1rem', boxShadow: '0 1px 8px #0001', transition: 'transform 0.15s', background: '#fafbff', height: '100%'}}>
              <h3>Drone Class @ MECPS</h3>
              <p>CURRENT PROJECT</p>
              <p>
                Learn about drones: design, circuit design, programming.</p>
            </div>
          </a>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage; 