import React, { useState, useEffect } from 'react';
import { 
  Home, 
  MapPin, 
  Sprout, 
  Package, 
  Wallet, 
  BarChart2, 
  Menu, 
  X,
  Sun,
  Moon,
  ChevronRight,
  Settings,
  Users,
  FileText
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activePath, setActivePath] = useState('/');
  
  // Close mobile menu when route changes - we can keep this logic but simplify it
  useEffect(() => {
    setIsOpen(false);
  }, [activePath]);
  
  // Handle theme toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  const toggleSidebar = () => setIsOpen(!isOpen);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navItems = [
    { title: 'Tableau de bord', path: '/', icon: Home },
    { title: 'Parcelles', path: '/parcelles', icon: MapPin },
    { title: 'Cultures', path: '/cultures', icon: Sprout },
    { title: 'Inventaire', path: '/inventaire', icon: Package },
    { title: 'Finances', path: '/finances', icon: Wallet },
    { title: 'Statistiques', path: '/statistiques', icon: BarChart2 },
    { title: 'Rapports', path: '/rapports', icon: FileText },
    { title: 'Paramètres', path: '/parametres', icon: Settings },
  ];

  const isActive = (path: string) => {
    if (path === '/' && activePath === '/') return true;
    if (path !== '/' && activePath.startsWith(path)) return true;
    return false;
  };

  // Create a simple handleClick function to replace Link functionality
  const handleNavItemClick = (path: string) => {
    setActivePath(path);
    setIsOpen(false);
    // We're not navigating anywhere since this is a single page app
  };

  return (
    <>
      {/* Mobile Navigation Toggle with improved animation */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button 
          onClick={toggleSidebar} 
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all active:scale-95 dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar Navigation with improved animation and transitions */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 border-r border-border shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } md:relative md:translate-x-0 flex flex-col h-full overflow-y-auto`}
      >
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sprout className="h-6 w-6 text-agri-primary" />
            <span className="text-lg font-bold text-foreground">Agri Dom</span>
          </div>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavItemClick(item.path)}
              className={`nav-link flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors w-full text-left ${
                isActive(item.path) 
                  ? 'bg-agri-primary/10 text-agri-primary font-medium' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-foreground'
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive(item.path) ? 'text-agri-primary' : ''}`} />
              <span>{item.title}</span>
              
              {isActive(item.path) && (
                <div className="ml-auto flex items-center">
                  <span className="h-2 w-2 rounded-full bg-agri-primary animate-pulse-slow"></span>
                  <ChevronRight className="h-4 w-4 text-agri-primary ml-1" />
                </div>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-3 px-3 py-2">
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">AD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Utilisateur</p>
              <p className="text-xs text-muted-foreground truncate">agriculteur@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile with improved transition */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
