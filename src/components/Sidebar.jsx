import { Link, useLocation } from 'react-router-dom';
import { Home, Package, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const NavItem = ({ to, icon: Icon, label, isActive, onClick }) => {
    return (
        <Link to={to} onClick={onClick} className="relative group">
            <div className={clsx(
                "flex items-center gap-3 p-3 rounded-xl transition-all duration-300",
                isActive ? "bg-brand-green/10 text-brand-green" : "text-gray-500 hover:bg-gray-100 hover:text-brand-green"
            )}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className={clsx("font-montserrat font-semibold", isActive ? "text-gray-800" : "text-gray-500")}>
                    {label}
                </span>
                {isActive && (
                    <motion.div
                        layoutId="activeNav"
                        className="absolute left-0 w-1 h-8 bg-brand-green rounded-r-full"
                    />
                )}
            </div>
        </Link>
    );
};

export default function Sidebar({ isOpen, onClose }) {
    const location = useLocation();

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                />
            )}

            {/* Sidebar Container */}
            <motion.nav
                className={clsx(
                    "flex flex-col w-64 h-full bg-white/90 backdrop-blur-xl border-r border-gray-200 p-6 fixed left-0 top-0 bottom-0 z-50 pt-32 transition-transform duration-300 ease-in-out font-montserrat",
                    // Desktop: always visible (if we want), but usually we rely on md:flex.
                    // Here we control visibility via classes for mobile sliding.
                    "md:translate-x-0", // Always visible on desktop
                    isOpen ? "translate-x-0" : "-translate-x-full" // Mobile toggle
                )}
            >
                {/* Mobile Close Button optional - Backdrop click usually enough, but let's add logo/header if needed? */}

                <div className="flex flex-col gap-2">
                    <NavItem to="/" icon={Home} label="Dashboard" isActive={location.pathname === '/'} onClick={onClose} />
                    <NavItem to="/estoque" icon={Package} label="Estoque" isActive={location.pathname === '/estoque'} onClick={onClose} />
                    <NavItem to="/prestacao-contas" icon={FileText} label="Prestação" isActive={location.pathname === '/prestacao-contas' || location.pathname === '/semaforo-festa' || location.pathname === '/custos-fixos'} onClick={onClose} />
                </div>

                <div className="mt-auto">
                    <div className="p-4 bg-gradient-to-br from-brand-green/20 to-transparent rounded-2xl border border-brand-green/10">
                        <p className="text-xs font-montserrat text-gray-500 mb-2">Sistema de Gestão</p>
                        <p className="text-sm font-varsity text-brand-green">AAACH</p>
                    </div>
                </div>
            </motion.nav>
        </>
    );
}
