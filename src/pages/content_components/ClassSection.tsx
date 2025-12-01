import React from 'react';
import TitleText from '../../atomic_components/TitleText';
import './ClassSection.css';

const focusAreas = [
  {
    title: 'Original Prototyping',
    description: 'Designing 3D models for drone housing, while being differentiated from other teams.',
    classes: ['3d-printing']
  },
  {
    title: 'Electrical Wiring Design',
    description: '3D printing custom electronic routing for electronic components & wiring.',
    classes: ['3d-printing', 'drone']
  },
  {
    title: 'Sensor Calibration + Drone assembly/repair',
    description: 'calibrate sensors & assemble/repair the drone.',
    classes: ['drone']
  },
  {
    title: 'Flying Autonomously',
    description: 'Developing scripts to fly the drone autonomously from the computer',
    classes: ['drone', 'server']
  },
  {
    title: 'Networked Systems',
    description: 'Creating an API server to connect computer programs to the drone',
    classes: ['server']
  },
];

const classTracks = [
  {
    title: '3D Printing Class',
    highlight: 'Highlight image: 3d Printed replacement for shed hinge',
    description: 'Responsible for designing the frame to house the drone components.',
    image: require('./3dDesigning.jpg'),
    classType: '3d-printing'
  },
  {
    title: 'Drone Class',
    highlight: 'Highlight image: dissassembled drone that is replicated for this class',
    description: 'Responsible for putting together the drone & developing algorithms to fly the drone autonomously from the computer.',
    image: require('./dissectedDrone.jpg'),
    classType: 'drone'
  },
  {
    title: 'Backend/API Server Class',
    highlight: 'Highlight image: laptop with website development & design software open',
    description: 'Responsible for developing the connection between student laptops & the microcontroller so the drone components can fly.',
    image: require('./ServerDevelopment.jpg'),
    classType: 'server'
  }
];

const ClassSection: React.FC = () => {
  return (
    <div className="program-container">
      <section className="program-hero">
        <div className="hero-copy">
          <TitleText text="Class details" size="medium" className="hero-title" />
          <div style={{ textAlign: "left" }}>
            <p>
              <strong>Digital Sensors:</strong><br />
              Circuit development — students learn to design and integrate sensors into electronic boards.
            </p>
            <p>
              <strong>Rapid 3D Printed Electronics:</strong><br />
              3D printing — creating custom electronic boards quickly.
            </p>
            <p>
              <strong>Original Prototyping:</strong><br />
              Designing 3D models to fit our team requirements.
            </p>
            <p>
              <strong>Networked Systems:</strong><br />
              Backend/API servers — connecting devices together and feeding logic.
            </p>
            <p>
              <strong>Embedded Intelligence:</strong><br />
              Circuits and servers — embedding logic and connectivity for incredible projects.
            </p>
            <br></br>
            <p>
              DRONE students collaborate across three specialized classes—3D printing, backend server development, and microcontroller integration—to
              build high quality drones.<br />
              Throughout the year, projects with community members are built using techniques students learn throughout the class.
            </p>
          </div>

          <div className="program-schedule">
            <p>Meets MWF starting January 2026</p>
            <p>9-11th grade High School class @ Medgars Evers Preparatory High School</p>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={require("./DroneSplashArt.jpg")}
            alt="Drone concept art"
            loading="lazy"
          />
        </div>
      </section>
      <TitleText text="Overlapping responsibilities" size="medium" className="hero-title" />
      <section className="focus-grid">
        {focusAreas.map((area) => (
          <div key={area.title} className="focus-card">
            <div className="focus-card-header">
              <h3>{area.title}</h3>
              <div className="class-indicators">
                {area.classes.map((classType) => (
                  <span
                    key={classType}
                    className={`class-indicator class-indicator--${classType}`}
                    title={
                      classType === '3d-printing' ? '3D Printing Class' :
                      classType === 'drone' ? 'Drone Class' :
                      'Backend/API Server'
                    }
                  />
                ))}
              </div>
            </div>
            <p>{area.description}</p>
          </div>
        ))}
      </section>

      <section className="class-grid">
        {classTracks.map((track) => (
          <article key={track.title} className={`class-card class-card--${track.classType}`}>
            <div className="class-image">
              <img src={track.image} alt={track.highlight} loading="lazy" />
              <span className="image-caption">{track.highlight}</span>
            </div>
            <div className="class-content">
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ClassSection;
