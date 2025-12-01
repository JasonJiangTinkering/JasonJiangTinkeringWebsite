import React from 'react';
import TitleText from '../../atomic_components/TitleText';
import './Partnerships.css';
import './ClassSection.css';

const partnerships = [
    {
        organization: 'Medgar Evers Preparatory High School',
        name: 'Mr. Miller',
        role: 'History Teacher',
        logo: require('./mep.png'),
        projects: [
            '3d printing class is a resource to pair with students to design 3D printed parts for their historical diorama.'
        ],
        status: 'scheduling'
    },
    {
        organization: 'Medgar Evers Preparatory High School',
        name: 'Mr. Colin',
        role: 'Digital Design & Animation Teacher',
        logo: require('./mep.png'),
        projects: [
            '3d printing class can help print digital 3D models made in Blender for Mr. Colin\'s Animation class.'
        ],
        status: 'scheduling'
    },
    {
        organization: 'YDC Youth Design Center',
        name: 'John',
        role: 'Woodshop Specialist & YDC workshop coordinator',
        logo: require('./ydc.jpg'),
        projects: [
            'Sharing Local Makerspace opportuntities, & how maker skills & community resources help everyone'
        ],
        status: 'interested'
    },
    //   { TO BE DISCUSSED
    //     organization: 'Enviormental https://mya-group.com/',
    //     name: 'Marion Yuen',
    //     projects: [
    //       'Server class: Instagram to digitized portfolio converter'
    //     ]
    //   },
    //   {
    //     organization: 'TO BE DISCUSSED',
    //     name: 'Michael',
    //     role: 'Computer software accelerator coordinator',
    //     projects: [
    //       'Lesson about resource identification for their projects'
    //     ]
    //   }
]

const projects_looking_for_additional_partners = [
    {
        name: 'Student grade transfer keyboard shortcuts',
        projects: [
            'Programs to transfer student grades from Google Classroom to Jupiter'
        ],
        status: 'looking for partners',
    },
    {
        name: 'Teacher timer device',
        projects: [
            'Create a vibrartion silent timer for more classroom independant work by teacher'
        ],
        status: 'looking for partners',
    },
    {
        name: 'Teacher class management buttons',
        projects: [
            'Create easy buttons at teacher desk for repetitive classroom management tasks'
        ],
        status: 'looking for partners',
    },
    {
        name: 'Class Schedule & Student Hallway Signout Device',
        projects: [
            'Create class schedule api',
            'Create hallway signout api',
            'Create touch screen small screen with Pi Nano',
            'Create 3d printed shell',
        ],
        status: 'looking for partners',
    }
];


const communityContacts = [
    {
        name: 'Spencer',
        role: 'Retired software developer',
    },
    {
        name: 'Alekai',
        role: 'Community Technology Usage Teacher for Brooklyn Public Library',
    },
    {
        name: 'Michael',
        role: 'Technology Accelerator Coordinator, & Flatbush DSA member',
    }
];

const Partnerships: React.FC = () => {
    return (
        <div className="partnerships-container">
            <TitleText text="Partnerships" size="medium" className="partnerships-title" />

            <section className="class-grid">
                {partnerships.map((p, idx) => (
                    <article key={`${p.organization}-${p.name}-${idx}`} className="class-card partner-card">
                        <div className="class-content">
                            <div className="partner-header">
                                <span
                                    className="org-logo"
                                    title={p.organization}
                                >
                                    <span
                                        className="org-logo"
                                        title={p.organization}
                                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                                    >
                                        <img
                                            src={p.logo}
                                            alt={p.organization}
                                            style={{ width:"2.3em", height:"2.3em" , objectFit: "contain" }}
                                        />
                                    </span>
                                </span>
                                <div className="partner-name-org">
                                    <h3>{p.name}</h3>
                                    <span className="org-name">{p.organization}</span>
                                </div>
                                {p.status === 'scheduling' && (
                                    <span className="status-badge status-badge--scheduling">SCHEDULING</span>
                                )}
                            </div>
                            {p.role && (
                                <p className="partner-role" style={{ textAlign: 'left' }}>{p.role}</p>
                            )}
                            {p.projects && p.projects.length > 0 && (
                                <ul className="partner-projects" style={{ textAlign: 'left' }}>
                                    {p.projects.map((project, pIdx) => (
                                        <li key={pIdx}>{project}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </article>
                ))}
            </section>
            {/* New section for projects looking for partners */}
            <div className="projects-looking-for-partners">
                <TitleText text="Projects Looking for Partners" size="medium" className="projects-title" />
                <ul className="projects-list">
                    {projects_looking_for_additional_partners.map((proj, idx) => (
                        <li key={`proj-${idx}`} style={{ textAlign: 'left' }}>
                            <b>{proj.name}</b>
                            <span className="project-description" style={{ display: 'block' }}>
                                {proj.projects.map((desc, descidx) =>
                                    <span
                                        key={`projectnumber-${idx}-count-${descidx}`}
                                        className="project-desc"
                                        style={{ display: 'block', textAlign: 'left' }}
                                    >
                                        {desc}
                                    </span>
                                )}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>


            <div className="community-contacts">
                <TitleText text="Community Contacts" size="medium" className="contacts-title" />
                <div className="contacts-grid">
                    {communityContacts.map((contact) => (
                        <div key={contact.name} className="contact-card">
                            <h3>{contact.name}</h3>
                            <p className="contact-role">{contact.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Partnerships;

