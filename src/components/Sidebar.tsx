/** 
 * @copyright 2025 priyankaPortfolio
 * @license Apache-2.0
 */

/**
 * 
 * Node Modules
 */
import {useState} from "react";

/**
 * custom Modules
 */
import { cn } from "@/lib/utils";

/**
 *components 
 */
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";


/**
 * Assets
 */
import { MenuIcon } from "lucide-react";

/**
 * constants
 */
import { navLinks, socialLinks } from "@/constants"; 

export const Sidebar = () => {
    const [active, setActive] = useState('#hero');
    return (
        
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className=" hover:border-primary bg-neutral-800 rounded-full hover:text-primary transition-colors duration-200 text-white">
                        <MenuIcon className="h-5 w-5" />
                        
                    </Button>
                </SheetTrigger>

                <SheetContent side="left" className= "w-84 bg-neutral-800 text-white py-6 pl-10" onCloseAutoFocus={(e) => e.preventDefault()}>
                    <SheetTitle className="text-lg font-semibold">Navigation Menu</SheetTitle>

                    

                    <nav className="flex flex-col space-y-4">
                        {
                            

                            navLinks.map(
                                (link)  => {
                                    const Icon = link.icon;

                                    return <a 
                                        key = {link.label}
                                        href={link.link}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActive(link.link);

                                            const id = link.link.substring(1);
    document.getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
                                                                  
                                        }}
                                        className={ cn ("text-neutral-400 flex items-center gap-2 hover:text-primary transition-colors duration-200 text-primary text-base", 
                                            active === link.link && "text-primary")
                                         }
                                        >
                                        <Icon className='size-5'/> {link.label}
                                    </a>;
                                }
                            )
                        }
                    </nav>
                    
                    <div className="mt-30">
                        <p className="pb-2">Socials</p>
                        <div className="flex gap-3 text-neutral-400">
                            {socialLinks.map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key = {i}
                                        href={social.link}
                                        className = 'hover:text-primary border-neutral-800 rounded-full p-2 hover:border-primary transition duration-200'
                                    >                                 
                                        <Icon className='size-5'/>
                                    </a>
                                );
                            })} 
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};