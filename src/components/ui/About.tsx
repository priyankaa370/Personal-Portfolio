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
                
                I work at the intersection of structured thinking and real-world business problems. My approach to data is simple: start with the question, understand the context, then let the numbers challenge assumptions.
               
            </motion.p>

            <motion.p
              variants={fadeUp}
              className = 'mt-4 text-neutral-300'>
                Over the past two years, I’ve worked across churn analysis, marketing performance, sales metrics, and predictive modeling. I don’t just build dashboards; I design them to answer specific business questions and reduce ambiguity.
               
            </motion.p>

            <motion.p
              variants={fadeUp}
              className = 'mt-2 text-neutral-300'>
                
                My experience spans finance, healthcare, telecom, and retail environments, where data is rarely clean and almost never complete. Working with imperfect datasets has taught me to think critically about data quality, bias, and business impact — not just output.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className = 'mt-2 text-neutral-300'>
                
                I see data not as static numbers, but as evolving evidence. Every dataset is a hypothesis waiting to be tested.
            </motion.p>
            

            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.2 }}>
                <Button className = 'mt-5'>Contact Me</Button>
            </motion.div>

        </motion.section>
    );
}