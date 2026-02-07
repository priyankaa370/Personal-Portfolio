/** 
 * @copyright 2025 priyankaPortfolio
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Styles
 */
import '@/index.css';

/**
 * Components
 */
import { App } from '@/App';
import { FloatingMenu } from '@/components/ui/FloatingMenu';
import { Profile } from '@/components/ui/Profile';
import { Sidebar } from '@/components/Sidebar';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col">
      <FloatingMenu />
      <Sidebar />
      
      
      <main className="min-h-screen flex flex-col items-center lg:items-start lg:flex-row px-4 lg:px-4 pt-5 py-10 lg:pl-4 lg:pt-5">
      <Profile />
      <App />
      
        
      </main>
      
      
    </div>
    
  </StrictMode>,
);
