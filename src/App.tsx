import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { ExplorationMode } from './types';

function App() {
  const [mode, setMode] = useState<ExplorationMode>('place');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <Header 
        mode={mode} 
        setMode={setMode} 
      />
      
      <div className="flex-1 overflow-hidden">
        <MainContent mode={mode} />
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 px-6 flex items-center justify-between text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Globe size={18} />
          <span>Place2 © 2025</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}

export default App;