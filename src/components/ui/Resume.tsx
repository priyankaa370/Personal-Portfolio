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
import { ExpCard } from "@/components/ui/ExpCard";
import { ToolsCard } from "@/components/ui/ToolsCard";

/**
 * Constants
 */
import { education, experience, tools } from "@/constants";


export const Resume = () => {
    return (
        <motion.section
                  variants={staggerContainer(0)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mt-30 scroll-mt-10"
                  id = 'resume'
        >
            <SectionHeader 
                subtitle='Resume' 
                title='My Professional Journey and Skills'
            />

            <motion.p 
                variants={fadeUp}
                className='mt-4 text-neutral-300'>
                    Hardworking, dependable, and detail-oriented Business Data Analyst with 2+ years of experience across customer churn,
marketing, and sales analytics. I bring strong programming skills in SQL and Python, and hands-on experience building Power
BI dashboards used for ongoing business decisions. And, I am known for consistent execution and clear communication.
            </motion.p>

            <div className="grid gap-x-10 gap-y-4 my-12 md:grid-cols-2">
                <motion.div
                    variants={fadeUp}
                    className='mb-16 md:mb-0'
                >
                    <h2 className='text-3xl font-semibold mt-6 mb-4'>
                        Education
                    </h2>

                    <div className="space-y-4 border-l border-neutral-700 pl-6">
                        {education.map((item, i) => (
                            <ExpCard key = {i} item={item}/>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    
                >
                    <h2 className='text-3xl font-semibold mt-6 mb-4'>
                        Work Experience
                    </h2>

                    <div className="space-y-4 border-l border-border pl-6">
                        {experience.map((item, i) => (
                            <ExpCard key = {i} item={item}/>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="my-16">
                <motion.h2 variants={fadeUp} className='text-3xl font-semibold mb-6 capitalize'> 
                    Tools & Technologies I Use
                </motion.h2>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants ={staggerContainer(0.5)}
                    className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5'>
                        {tools.map((tool, i) => (
                            <ToolsCard key={i} tool={tool} />
                        ))}
                </motion.div>
            </div>
            
        </motion.section>
    );
}