/** 
 * @copyright 2025 priyankaPortfolio
 * @license Apache-2.0
 */

/**
 * Components
 */
import { Sidebar } from '@/components/Sidebar';

export const Header = () => {
  return (
    <header className="h-32 flex items-center justify-between px-4 border-b text-white">
      {/* Left: menu button */}
      <div className="z-10">
        <Sidebar />
      </div>

      {/* Center: title */}
      <div className="absolute left-1/2 -translate-x-1/2 text-center text-sm font-semibold tracking-wide">
        
            <div className="">
                <div className="">
                    <h1 className=" text-lg sm:text-xl font-semibold tracking-wide text-white">Priyanka Barde</h1>

                    <p className=" text-center text-lg sm:text-xl font-semibold tracking-wide text-white">Data Analyst | Aspiring Frontend Developer</p>
                </div>
            </div>
        
      </div>
      
    </header>
  );
};
