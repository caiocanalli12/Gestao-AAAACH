import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import headerLogo from '../identidade_visual_aaaach/main_logos/escritas/1.png';
import minimalistaLogo from '../identidade_visual_aaaach/main_logos/minimalista/5.png';

function Layout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-zinc-50 relative overflow-hidden font-montserrat text-gray-800 selection:bg-brand-green/30">

            {/* Background Watermark */}
            <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden opacity-5">
                <img
                    src={minimalistaLogo}
                    alt="Watermark"
                    className="w-[120%] h-[120%] object-contain"
                />
            </div>

            <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

            <div className="flex-1 flex flex-col md:pl-64 z-10 relative">
                {/* Header with Texture */}
                <header className="bg-lizard w-full h-24 shadow-lg flex items-center justify-center relative z-20 overflow-hidden">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="absolute left-4 z-50 p-2 text-white hover:bg-white/10 rounded-lg md:hidden transition-colors"
                    >
                        <Menu size={28} />
                    </button>

                    {/* Gradient Overlay for Modern Touch */}
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>

                    <img
                        src={headerLogo}
                        alt="AAAACH"
                        className="h-[350%] object-contain drop-shadow-md relative z-10"
                    />
                </header>

                {/* Main Content Area */}
                <main className="flex-1 p-6 md:p-10 relative overflow-y-auto">
                    <Outlet />
                </main>

                {/* Footer with Texture */}
                <footer className="bg-lizard text-white text-center py-4 relative">
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                    <p className="relative z-10 font-montserrat font-bold text-sm opacity-90">&copy; 2026 AAAACH Management System</p>
                </footer>
            </div>
        </div>
    );
}

export default Layout;
