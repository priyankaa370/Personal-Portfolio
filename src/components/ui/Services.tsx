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
import { ServiceCard } from "@/components/ui/ServiceCard";

/**
 * Constants
 */
import { services } from "@/constants";

export const Services = () => {
    return (
        <motion.section
                  variants={staggerContainer(0)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mt-30 scroll-mt-10"
                  id = 'services'
        >
            <SectionHeader 
                subtitle='Services' 
                title='Bringing Clarity to Complexity: Data Science Services Tailored for You'
            />

            <motion.div
                initial="hidden"
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer(0.5)}
                className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'
                >
                    {services.map((service) => 
                        <motion.div 
                            key={service.title}
                            variants={fadeUp}
                            className=""
                            > 
                              <ServiceCard service={service} />
                        </motion.div>
                    )}
            </motion.div>

            
        </motion.section>
    );
}