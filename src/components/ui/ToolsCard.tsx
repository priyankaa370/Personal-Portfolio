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
 * Tyoes
 */
import type { ToolsType } from "@/types";

export const ToolsCard = ({ tool }: { tool: ToolsType }) => {
    return (
        <motion.div
            variants={fadeUp}
            className='border-neutral-700 rounded-md flex justify-center items-center flex-col py-4'>
                <img src={tool.imgSrc} alt={tool.label}/>

                <p className='mt-2 text-bold'>{tool.label}</p>

        </motion.div>
    )
}