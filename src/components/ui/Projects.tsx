/** 
 * @copyright 2025 priyankaPortfolio
 * @license Apache-2.0
 */



/**
 * Node Modules
 */
import { motion } from "motion/react";

/**
 * Custom Modules
 */
import { staggerContainer } from "@/lib/animations";

/** 
 * Components
 */
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";


/**
 * Constants
 */
import { projectsData } from "@/constants";


export const Projects = () => {
    return (
        <motion.section
          variants={staggerContainer(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-30 scroll-mt-10"
          id = 'projects'
        >
            <SectionHeader 
              title="My featured projects"
              subtitle="Projects"/>

            <motion.div
             className='grid md:grid-cols-2 gap-10 mt-10'
             initial='hidden'
             whileInView='visible'
             viewport={{ once: true, amount: 0.25 }}
             variants = { staggerContainer(0.2) }>
                {projectsData.map((project, i) => (
                    <ProjectCard key = {i} 
                    imgSrc={project.imgSrc} 
                    projectLink={project.projectLink} 
                    tags={project.tags} 
                    title={project.title}/>
                ) )}
            </motion.div>         
        </motion.section>
    );
};