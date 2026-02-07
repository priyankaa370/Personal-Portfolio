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
import { fadeUp, staggerContainer } from "@/lib/animations";

/**
 * Components
 */
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

export const About = () => {
    return (
        <motion.section
                  variants={staggerContainer(0)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mt-30 scroll-mt-10 lg:px-20"
                  id = 'about'
        >
            <SectionHeader 
                subtitle='About Me' 
                title='Trasnforming messy datasets to reveal meaningful stories.'
            />

            <motion.p
              variants={fadeUp}
              className = 'mt-4 text-neutral-300'>
                
                I am a data analyst who loves turning messy numbers into clear stories. I dig into data to find patterns that matter, create visuals that actually make sense, and help teams make smarter decisions. I’m curious, detail-obsessed, and never satisfied until insights hit home. Data isn’t just numbers but, it’s a way to understand the world, and I’m here to make it meaningful.   
               
            </motion.p>

            <motion.p
              variants={fadeUp}
              className = 'mt-2 text-neutral-300'>
                
                Along the way, I’ve built a toolkit including Python, SQL, Tableau, Power BI, Alteryx, PostgreSQL, cloud platforms, and more, which lets me tackle any data challenge. I’ve gained this skillset through internships, full-time roles, and diverse projects across finance, healthcare, telecom, and retail. Each experience taught me not just how to work with data, but how to ask the right questions, uncover meaningful patterns, and turn insights into action. Whether it’s building dashboards, cleaning messy datasets, or deploying predictive models, I’m constantly learning and applying new ways to make data tell a story.          
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.2 }}>
                <Button className = 'mt-5'>Contact Me</Button>
            </motion.div>

        </motion.section>
    );
}