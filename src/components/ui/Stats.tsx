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
 * Constants
 */
import { statsData } from "@/constants";


export const Stats = () => {
    return (
        <motion.section
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
         {statsData.map((stats, i) => (
            <motion.div key = {i} variants={fadeUp} className = 'flex justify-center items-center flex-col'>
                <p className = 'text-4xl capitalize font-semibold'>{stats.number}</p>
                <p className = ''>{stats.label}</p>
            </motion.div>

         ))}   
        </motion.section>
    );
};