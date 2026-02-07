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
import { fadeUp } from "@/lib/animations";

/**
 * Assets
 */
import { SparkleIcon } from "lucide-react";

export const SectionHeader = ({ title, subtitle }: { 
    title: string; 
    subtitle: string 
}) => {
    return (
        <>
            <motion.p variants={fadeUp} className='flex items-center justify-center pt-0 gap-2'>
               <SparkleIcon size = {24}/> {subtitle}
            </motion.p>

            <motion.h2 
                variants={fadeUp} 
                className="text-center text-3xl lg:text-4xl font-bold mt-4">
                {title}

            </motion.h2>
        </>
    );
};
