/** 
 * @copyright 2025 priyankaPortfolio
 * @license Apache-2.0
 */

/**
 * 
 * node modules
 */
import { useState } from 'react';

/**
 * custom modules
 */
import { cn } from '@/lib/utils';

/**
 * * * constants
 */
import { navLinks } from '@/constants';

export const FloatingMenu = () => {
    const [active, setActive] = useState('#hero');

    return <div className='fixed right-4 top-50 items-center translate-y z-50 bg-black border border-neutral-600 rounded-full p-3 hidden lg:block'>
        {navLinks.map(
            (link) => {
                const Icon = link.icon;
                return (
                    <a 
                    key={link.label}
                    href={link.link} 
                    onClick={() => setActive(link.link)}
                    className={cn("text-neutral-300 flex items-center gap-2 hover:text-primary transition-colots duration-300 mb-6 px-1 py-1",
                        active === link.link && 'text-primary'
                    )}
                    >
                    
                        <Icon className= "size-5" />
                    </a>
                )
            }
        )}
    </div>; 
}