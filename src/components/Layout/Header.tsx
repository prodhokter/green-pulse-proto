import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Leaf, BarChart3 } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsProgramsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProgramsDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const navigation = [
    { name: 'Beranda', href: '/' },
    {
      name: 'Program Kami',
      isDropdown: true,
      items: [
        { name: 'Karunia Green Government', href: '/programs/government' },
        { name: 'Karunia Green Innovation Hub', href: '/programs/innovation' }
      ]
    },
    { name: 'Berita & Update', href: '/news' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Kontak', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <div className="flex flex-col leading-tight">
                <h1 className="text-lg font-bold text-foreground">Green Strategy</h1>
                <p className="text-sm text-muted-foreground">for Clean Energy 2025</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.isDropdown ? (
                  <div
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-smooth"
                      onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isProgramsDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isProgramsDropdownOpen && (
                      <>
                        {/* Invisible bridge to prevent dropdown from closing */}
                        <div className="absolute top-full left-0 w-64 h-1 bg-transparent" />
                        <div className="absolute top-full left-0 mt-1 w-64 rounded-lg border border-border bg-popover shadow-lg z-50">
                          <div className="p-1">
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
                                onClick={() => setIsProgramsDropdownOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-smooth ${
                      isActive(item.href)
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/programs/government" className="hidden lg:block">
              <Button variant="hero" size="sm">
                <BarChart3 className="h-4 w-4" />
                Lihat Dashboard
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="border-t border-border md:hidden">
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.isDropdown ? (
                    <>
                      <div className="text-sm font-medium text-muted-foreground px-3 py-2">
                        {item.name}
                      </div>
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block rounded-md px-6 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block rounded-md px-3 py-2 text-sm font-medium transition-smooth ${
                        isActive(item.href)
                          ? 'text-primary bg-accent'
                          : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-border">
                <Link to="/programs/government" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="hero" size="sm" className="w-full">
                    <BarChart3 className="h-4 w-4" />
                    Lihat Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
