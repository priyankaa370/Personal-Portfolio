/** 
 * @copyright 2025 priyankaPortfolio
 * @license Apache-2.0
 */

/**
 * components
 */
import { Button } from "@/components/ui/button";

/**
 * Constants
 */
import { socialLinks } from "@/constants";



export const Profile = () => {
    return (
        <aside className="max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:px-6 lg:w-100">
            <div className="">
                <div className="flex items-center justify-between lg:gap-x-24 lg:mb-6">
                    <h1 className='text-3xl font-bold'>Priyanka</h1>
                    <p className="text-sm">Data Analyst</p>
                </div>
                    <img src="/avatar.jpg" alt="Priyanka Barde"
                    className="lg:w-96 rounded-full object-cover border-2 border-white" />

                    <div className="pt-6"> 
                        <p className="text-sm text-neutral-300"> Specialization: </p>
                         
                        <p className="text-lg capitalize"> Data Analyst | Visualization</p>
                    </div>

                    <div> 
                        <p className="text-sm text-neutral-300"> Based in: </p>

                        <p className="text-lg capitalize"> New York, USA</p>
                    </div>

                    

                    <div className="flex gap-3 pt-2 text-neutral-500">

                        

                        {socialLinks.map((social, i) => {
                            const Icon = social.icon;

                            return (
                                <a key= {i} href={social.link} className="hover:text-primary border-2 border-neutral-500 rounded-full p-2 rounded-full hover:border-primary transition duration-200">
                                    <Icon className="size-4" />
                                </a>
                            )
                        }  )}

                        

                    </div>

                    <Button className="hidden lg:inline-block mt-4 w-full bg-neutral text-white hover:bg-neutral-800 hover:text-white cursor-pointer" 
                    size='lg'>Let's Work!</Button>
                    
                </div>
            
        </aside>
    );
};