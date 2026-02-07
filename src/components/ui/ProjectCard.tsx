/** 
 * @copyright 2025 priyankaPortfolio
 * @license Apache-2.0
 */

 /** 
 *Node Modules
  */
import { motion } from "motion/react";

/**
 * Custom Modules
 */
import { fadeUp } from "@/lib/animations";

/**
 * Types
 */
import type { ProjectType } from "@/types";

export const ProjectCard = ({ imgSrc, projectLink, title }:  ProjectType ) => {
  return (
    <motion.div variants={fadeUp} className='relative'>
      
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      <figure className='overflow-hidden rounded-md relative group'>
        <img 
          src={imgSrc} 
          alt={title} 
          className='rounded-md transition duration-500 group-hover:scale-115 w-full' 
        />
        
        {/* Overlay that appears on hover */}
        <a 
          href={projectLink} 
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="bg-white text-black px-4 py-2 rounded-full font-medium">
            View Project
          </span>
        </a>
      </figure>

      
    </motion.div>
  );
};