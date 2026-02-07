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
import { Button } from "@/components/ui/button";

/**
 * Assets
 */
import { SparkleIcon } from 'lucide-react';

export const Hero = () => {
    return (
        <motion.section
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="pt-20 lg:pt-0"
          id= "hero"
        >
            <motion.p variants={fadeUp} className = 'flex items-center justify-center pt-0 gap-2'> 
                <SparkleIcon size = {24} />
                <span>Introduction</span>
            </motion.p>

            <motion.h1 variants={fadeUp} className="flex items-center text-4xl lg:text-5xl mt-4 leading-tight font-semibold capitalize lg:text-left md:leading-16"> 
                I'm Priyanka, a passionate data analyst and storyteller.
            </motion.h1>

            <motion.div 
              variants={fadeUp}
              className=''>
                <Button asChild>
                    <a href="#projects" className="mt-8">My Projects</a>
                </Button>

                <a href="https://drive.google.com/file/d/1NPmPxWvURCnzrDhkLTlaULH9rNp0VrzR/view?usp=sharing" download>
                    <Button variant="outline" className="mt-4 ml-4">
                        Download CV
                    </Button>
                </a>
            </motion.div>
        </motion.section>
    );
};