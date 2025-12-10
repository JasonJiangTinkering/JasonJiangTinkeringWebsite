import React from 'react';
import TitleText from '../atomic_components/TitleText';
import './CreativeMorning.css';

const CreativeMorning: React.FC = () => {
  return (
    <div className="creative-morning-container">
      <div className="creative-morning-hero">
        <TitleText text="CreativeMorning @ Buffalo" size="large" className="cm-title" />
        <p className="cm-subtitle">
          Reimagining Education Through Critical Pedagogy & Community Stewardship
        </p>
      </div>

      <section className="cm-content-section">
        <h2>Understanding Parental Fears: A Critical Analysis</h2>
        
        <div className="cm-concept-card">
          <h3>bell hooks & Critical Pedagogy</h3>
          <p>
            As bell hooks reminds us, education should be "the practice of freedom"—a space where students 
            can engage critically with the world around them. Yet traditional public schools often function 
            as sites of oppression, where standardized curricula silence diverse voices and experiences. 
            Parents fear their children will lose their cultural identity, their critical thinking abilities, 
            and their capacity to question unjust systems.
          </p>
        </div>

        <div className="cm-concept-card">
          <h3>Capitalism & Educational Incentives</h3>
          <p>
            Public schools operate within a capitalist framework that prioritizes efficiency, standardization, 
            and measurable outcomes over genuine learning. The system is incentivized to produce compliant workers 
            rather than critical thinkers. Parents recognize this and fear their children will be reduced to 
            test scores and productivity metrics, losing their humanity in the process.
          </p>
        </div>

        <div className="cm-concept-card">
          <h3>Disabilism & Exclusion</h3>
          <p>
            Traditional schools often fail students with disabilities, treating difference as deficit. 
            The system is built for a narrow definition of "normal," leaving many children behind. 
            Parents of children with disabilities fear their children will be marginalized, misunderstood, 
            or forced to conform to standards that don't accommodate their needs.
          </p>
        </div>

        <div className="cm-concept-card">
          <h3>Public School History & Structural Inequity</h3>
          <p>
            The history of public education in America is deeply intertwined with segregation, 
            assimilation, and the maintenance of social hierarchies. From the exclusion of Black 
            students to the forced assimilation of Indigenous children, public schools have often 
            served to reproduce inequality rather than challenge it. Parents, especially those from 
            marginalized communities, carry this historical memory and fear their children will 
            face the same systemic barriers.
          </p>
        </div>

        <div className="cm-concept-card">
          <h3>Liberalism & Individual Responsibility</h3>
          <p>
            Liberal educational philosophy emphasizes individual achievement and meritocracy, 
            but this masks structural inequalities. When schools fail, the blame falls on 
            individual students or families rather than systemic issues. Parents fear their 
            children will be blamed for systemic failures, internalizing shame and inadequacy.
          </p>
        </div>
      </section>

      <section className="cm-opportunity-section">
        <h2>A New Opportunity: Critical Responsiveness & Stewardship</h2>
        
        <div className="cm-opportunity-card">
          <h3>Critical Responsiveness</h3>
          <p>
            Our class embodies critical responsiveness—we listen to what students actually need 
            rather than imposing predetermined curricula. We respond to their interests, their 
            communities, and their lived experiences. This creates a learning environment where 
            students feel seen, heard, and valued.
          </p>
        </div>

        <div className="cm-opportunity-card">
          <h3>Stewardship Over Ownership</h3>
          <p>
            Instead of treating education as a commodity to be consumed, we practice stewardship. 
            We care for our students' growth, their communities, and the knowledge we create together. 
            Education becomes a shared responsibility rather than a transaction. Parents can trust 
            that their children are being nurtured, not processed.
          </p>
        </div>

        <div className="cm-opportunity-card">
          <h3>Community-Centered Learning</h3>
          <p>
            Our class connects students to real community needs and projects. Students work on 
            meaningful problems—from designing assistive technology to creating community resources. 
            This breaks down the false separation between school and life, between learning and doing. 
            Parents see their children making a real difference, not just completing assignments.
          </p>
        </div>

        <div className="cm-opportunity-card">
          <h3>Embracing Difference</h3>
          <p>
            We reject the narrow definitions of ability and success that traditional schools impose. 
            Every student brings unique strengths, perspectives, and ways of knowing. Our project-based 
            approach allows multiple pathways to success, honoring different learning styles, interests, 
            and capabilities. Parents of children with disabilities see their children's strengths 
            recognized and celebrated.
          </p>
        </div>

        <div className="cm-opportunity-card">
          <h3>Critical Consciousness</h3>
          <p>
            Following bell hooks' vision, we help students develop critical consciousness—the ability 
            to question, analyze, and transform unjust systems. Students learn to see how power operates, 
            how inequality is maintained, and how they can work toward justice. Parents know their 
            children are developing tools to navigate and change the world, not just survive it.
          </p>
        </div>
      </section>

      <section className="cm-cta-section">
        <h2>Why This Matters</h2>
        <p className="cm-cta-text">
          Parents are right to be afraid. Traditional public schools often fail to serve students, 
          especially those from marginalized communities. But fear doesn't have to mean resignation. 
          Our class offers a different model—one grounded in critical pedagogy, community stewardship, 
          and genuine responsiveness to student needs. We're not trying to fix the system; we're 
          creating something new, something that honors the full humanity of every student.
        </p>
        <p className="cm-cta-text">
          This is more than a class—it's a practice of freedom, a space where students can learn 
          to think critically, act justly, and create change in their communities. That's why parents 
          can trust us with their children's education.
        </p>
      </section>
    </div>
  );
};

export default CreativeMorning;

