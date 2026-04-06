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
                title='Transforming complex data landscapes into high-integrity business solutions.'
            />

            <motion.p
              variants={fadeUp}
              className = 'mt-4 text-neutral-300'>
                
                I work at the intersection of technical precision and strategic problem-solving. Whether I'm migrating millions of financial records or uncovering churn drivers, my approach remains the same: treat data as evolving evidence and every dataset as a hypothesis waiting to be tested.
               
            </motion.p>

            <motion.p
              variants={fadeUp}
              className = 'mt-4 text-neutral-300'>
                Most recently, at <b>Accenture</b>, I’ve specialized in the high-stakes domain of <b>Banking and ESPP platform conversions</b>. My role isn't just about moving data; it’s about ensuring a "zero-loss" transition for 50k+ global participants by building the bridge between legacy chaos and modern architecture. Working in the regulated world of finance has reinforced my belief that data integrity isn't a luxury—it’s a prerequisite for trust.
               
            </motion.p>

            <motion.p
              variants={fadeUp}
              className = 'mt-2 text-neutral-300'>
                
                Over the past two years, my experience has spanned <b>FinTech, Telecom, and Retail</b>, where data is rarely clean and never complete. These environments have taught me to think critically about data sanitation, multi-jurisdictional logic, and the "so what?" behind every metric. I don’t just build dashboards or execute queries; I design systems that reduce ambiguity and drive seamless implementation.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className = 'mt-2 text-neutral-300'>
                
                I see data not as static numbers, but as the foundation of business continuity.
            </motion.p>
            

            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.2 }}>
                <Button asChild>
                    <a href="#contact" className="mt-8">Contact Me</a>
                </Button>
            </motion.div>

        </motion.section>
    );
}