import styles from './ProjectsStyles.module.css';
import mediBooker from '../../assets/mediBooker.png';
import portfolio from '../../assets/portfolio.png';
import magiclens from '../../assets/magiclensAI.png';
import simon from '../../assets/simon.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={magiclens}
          link="https://github.com/md-sahab-hassan/MagicLens-AI"
          h3="MagicLens-AI"
          p="AI Prompt-Based Image Generator"
        />
        <ProjectCard
          src={mediBooker}
          link="https://github.com/md-sahab-hassan/MediBooker"
          h3="MediBooker"
          p="Doctor Appointment Scheduler"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/md-sahab-hassan/PortFolioX"
          h3="PortFolioX"
          p="Responsive React Portfolio"
        />
        <ProjectCard
          src={simon}
          link="https://github.com/md-sahab-hassan/simon-game"
          h3="Simon-Game"
          p="Color Pattern Memory Game"
        />
      </div>
    </section>
  );
}

export default Projects;
