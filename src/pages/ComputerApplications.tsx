import React, { useState } from 'react';
import TitleText from '../atomic_components/TitleText';
import './ComputerApplications.css';

// Import images
const img2 = require('./content_components/ComputerApplicationMedia/IMG_20251108_120130_NR-2.jpg');
const img3 = require('./content_components/ComputerApplicationMedia/IMG_20251108_120123_NR-2.jpg');
const img4 = require('./content_components/ComputerApplicationMedia/IMG_20251108_120119_NR.jpg');
const img5 = require('./content_components/ComputerApplicationMedia/IMG_20251106_184222_NR.jpg');
const img6 = require('./content_components/ComputerApplicationMedia/IMG_20251106_181836_NR.jpg');
const img7 = require('./content_components/ComputerApplicationMedia/IMG_20251106_181411_NR.jpg');
const img8 = require('./content_components/ComputerApplicationMedia/IMG_20251106_180826_NR.jpg');
const img9 = require('./content_components/ComputerApplicationMedia/ScreenshotHW.jpeg');
const ComputerApplications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const images = [ img2, img3, img4, img5, img6, img7, img8, img9];
  const imageAlts = [
    "Nycha board information",
    "Nycha board information 2",
    "Nycha board information 3 ",
    "AIA American Institute of Architects",
    "Computer Applications Activity 6",
    "Computer Applications Activity 7",
    "Computer Applications Activity 8",
    "Classwork homework",
  ];

  return (
    <div className="computer-applications-container">
      <div className="computer-applications-hero">
        <TitleText text="Computer Applications: NYCHA Housing Physical Needs Deficit" size="large" className="ca-title" />
        <p className="ca-subtitle">
          A lesson plan focusing on computer applications through the lens of NYCHA housing challenges. Students learn Microsoft Word SmartArt while exploring real community issues that affect thousands of New York City residents.
          <br></br>



          Students will master SmartArt tools to create engaging cause-and-effect diagrams while learning about the human impact of housing deficits.
        </p>
      </div>

      <section className="ca-content-section">
        <div className="ca-concept-card">
          <h3>
          Cold Open: Community Role-Play Activity
          </h3>
          <p>
          In exchange for candy, students participate in a play where 5 students act as: NYCHA resident, narrator, children, and NYCHA building director.
          </p><p>
          This interactive opening engages students immediately while introducing the real-world context they'll explore through technology. The role-play builds empathy and understanding before diving into technical skills.
          <br></br>
          <br></br>
          The activity sets the stage for learning Microsoft Word SmartArt by connecting it to meaningful community issues.
          </p>
          <h3> Teacher Objectives</h3>

<p>Handing out role sheets</p>
<p>Plug in laptop computer
</p>
<p>
Keep engagement high and manage classroom focus          

</p>
<p>Success depends on seamless technology setup and maintaining student focus through the activity shift. Preparation ensures smooth flow from interactive opening to technical instruction.

</p>
        </div>

   

        <div className="ca-concept-card">
          <h3>5-Minute Play Script: "The Community Meeting"</h3>
          <p>
          <strong>NYCHA Director:</strong> At this time we call that the weekly community association meeting on [current date] begins. Let us begin with a summary of tenant needs from community association president.
          </p>
          <p>
          <strong>Community Association President:</strong> Thank you. This week multiple residents including Mr. Reeves and this meeting is still waiting for updates for the contractors responsible for ventilation. And when are elevators being replaced? Residents cannot walk up elevator while on the 12th floor.
          </p>
          <p>
          <strong>NYCHA Director:</strong> I can make sure to speak up on... there are things that make it possible...
          </p>
          <p>
          <strong>Tenant Neighbor Miss Davis:</strong> Mr. Reeves, Mr. Reeves!
          </p>
          <p>
          <strong>Miss Davis:</strong> runs into neighbor community president Mr. Reeves for a big hug. I have a question, Mr. Reeves.
          </p>
          <p>
          <strong>NYCHA President:</strong> Aw Miss Davis how is your family. Yes what is your question.
          </p>
          <p>
          <strong>Miss Davis:</strong> I was looking at old brochures of our complex and went to visit this old library, but when I visited it, it was closed. When did we lose all our resources?
          </p>
          <p>
          <strong>NYCHA President:</strong> looked at Miss Davis with eyes filled with sorrow and worry. When did we lose our resources...
          </p>
        </div>

        <div className="ca-concept-card">
          <h3>10-Minute Learning Objective: SmartArt in Microsoft Word
          </h3>
          <p>
          How can people use SmartArt in order to tell an engaging cause-effect graph in Microsoft Word?
          </p>
          <p>
          Students learn to create visual representations of housing deficit causes and effects using SmartArt tools. This technical skill is directly connected to the community issues explored in the role-play.
          </p>
          <strong>3 sections of 3 minutes</strong> for students to familiarize themselves with 3 facts for each section:
          <ol>
            <li><strong>SmartArt Basics:</strong> Insert tab, choosing cause-effect layouts, basic formatting</li>
            <li><strong>Content Creation:</strong> Adding text, connecting ideas, visual hierarchy</li>
            <li><strong>Professional Presentation:</strong> Color schemes, sizing, export options</li>
          </ol>
        </div>
        <div className="ca-concept-card">
          <h3>Success Criteria</h3>
          <p>
          Success looks like students raising their hand at end of class whether or not they are able to understand better the lives of those at NYCHA.
          </p>

<p>While I am not sure of my student's belief in that lesson's success, I am proud that all my students created detailed works, and then revised their work many times to create unique projects</p>
          </div>
          <div className="ca-concept-card">
            <h3> Presentation Skills Development</h3>
          <p>
          Another success is that students are able to confidently present their findings with an audience.
          </p>
          <p>

          Or homework which is to get feedback and adapt feedback to their presentation at home.

          </p>
        </div>

        <div className="ca-concept-card">
          <h3>Building Student Voice and Agency</h3>
          <p>
          Without knowing it, we are equipping students with the ability to learn, organize, present, and adapt information to an audience. In a time where trust in our society is low, our youth need to feel they have a voice. One that can change the walls that hold them back.
          </p>
          <p>

          Tools that are able to be applied not just in the classroom but especially where it matters in their lives and community.

          </p>
        </div>
      </section>

      <section className="ca-opportunity-section">


        <div className="ca-opportunity-card">
          <h3>Real-World Application bring hope, pride, and engagement</h3>
          <p>
          Students apply SmartArt skills to visualize NYCHA housing challenges, creating diagrams that show cause-and-effect relationships in community issues.
          </p>
          <p>
            We scaffolded all the resources they needed to create effective work using the technology.
            All while preserving much complexity, and choices that the students need to make. Especially choices that students are highly equiped to make as a matter of internalized knowlege of their community. LIke what is the best way to present an argument in their presentaion.

          </p>

          <p>
          Students see how technology can amplify their voice on important community matters.
          </p>
        </div>


      </section>

      <section className="ca-cta-section">
        <h2>Why This Approach Matters</h2>
        <p className="ca-cta-text">
        In communities facing housing crises, students need more than technical skills - they need the ability to understand complex social issues and communicate them effectively. This lesson combines emotional intelligence with digital literacy.


        </p>



        <p className="ca-cta-text">

        By starting with role-play, students experience the human side of NYCHA challenges before learning the technical tools to analyze and present solutions.

          Join us in teaching technology through community lens:

          <br />
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScHAqOUrXMNpiaF9KRVLfB_mRun0A0b7bScHF7kulNNdzR4bg/viewform?usp=publish-editor">
          Sign Up to join the next generation and find leadership, hope, and justice in my next course.

          </a>
        </p>
      </section>
      <div className="ca-concept-card">
      <h3>First try notes</h3>

      <p>
        This Lesson plan / proceedure was first tested as a part of BMCC's College now program. 
        This is after, I was able to visit a Nycha affordable housing presentation by the AIA, and learn from many sides about NYCHA's physical needs deficents, along other systemic issues, and its many effects on residents. 
        
        Inspired by all these below:

      </p>

      <div className="ca-image-gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={imageAlts[index]}
            loading="lazy"
            onClick={() => openModal(img)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
      <h3>Student work</h3>
      <ul>
        <li>
          <a href="https://cuny907-my.sharepoint.com/:p:/g/personal/jarianny_pahecogarcia29_login_cuny_edu/EQvPOPCnNfhPonwqP1BV7cIBvJ0PycVhrwjJXR3jj45YNA?e=OvXAJn&authuser=0" target="_blank" rel="noopener noreferrer">
            Student 1 PowerPoint
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1k_riakU-hWjt5_ZO6H3uOTlpWzRrQymJ/view?usp=drive_web" target="_blank" rel="noopener noreferrer">
            Student 2 PowerPoint
          </a>
        </li>
        <li>
          <a href="https://onedrive.live.com/:p:/g/personal/1E4C3B2F2EE3E1BD/EfOQVfgBOo1FvHkvp9JNSFgB_inkryJpGrrMzxg40ScCJQ?resid=1E4C3B2F2EE3E1BD!sf85590f33a01458dbc792fa7d24d4858&ithint=file%2Cpptx&e=cYPUy4&authuser=0&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy8xZTRjM2IyZjJlZTNlMWJkL0VmT1FWZmdCT28xRnZIa3ZwOUpOU0ZnQl9pbmtyeUpwR3JyTXp4ZzQwU2NDSlE_ZT1jWVBVeTQmYXV0aHVzZXI9MA" target="_blank" rel="noopener noreferrer">
            Student 3 PowerPoint
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1q6GpTKGuIuAlp-kJvHPAgKyWqeRscmJ-/view?usp=drive_web" target="_blank" rel="noopener noreferrer">
            Student 4 PowerPoint
          </a>
        </li>
        {/* Add more student work links here as needed */}
      </ul>



      
      <p></p>
      <h3>What I would do better</h3>
          <p>
          <b>This lesson took 3 days, instead of one. If I hope to do this frequently, I cannot fall behind because only half the students were able to understand my instuctions.</b> When students were asked to do confusing work, it took a much longer time.
          </p>
          <p>
            I would make sure to make the microsoft powerpoint lesson much less difficult to understand.
            My students are english as second language. In this newly made lesson plan, 
            
            <b>            I made the steps for smart art development only 3 steps. Within those 3 steps the students still have a lot of choice.
            </b>
</p><p>
            Describing the NYCHA problem in multiple ways in the same lesson can be really confusing.
            I decided in this new lesson plan. Only share the article and focus on the technique of identiying cause and effect.
          </p>
          </div>
      <section className="ca-opportunity-card">
          <h3>Implementation Notes</h3>
                <p>

        This lesson is meant to be able to be reproduced with any coommunity issues that is worth talking abooutt. 
        Materials needed:

        <ol>
          <li>Role sheets for 5 students</li>
          <li>Candy rewards for participation</li>
          <li>Computers with Microsoft Powerpoint</li>
        </ol>
      
        A key aspect, is the feeling of hope, and intention we want to instill into these students.
        
        <br />
        Take the effort during the 5-minute script to create immediate engagement, then focus that energy on the 10-minute SmartArt instruction builds technical skills with clear, focused objectives.


        </p>


        </section>

        {/* Image Modal */}
        {isModalOpen && selectedImage && (
          <div className="ca-modal-overlay" onClick={closeModal}>
            <div className="ca-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="ca-modal-close" onClick={closeModal}>×</button>
              <img 
              height={500} 
              src={selectedImage} alt="Enlarged view" className="ca-modal-image" />
            </div>
          </div>
        )}
    </div>
  );
};

export default ComputerApplications;
