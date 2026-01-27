import { Link } from 'react-router-dom';
import { ArrowLeft, Pin } from 'lucide-react';
import semaforoImg from '../data/semaforoefesta.png';
import custosImg from '../data/custosfixos.png';

function PrestacaoContas() {
    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-8 pb-20">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-4 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        <span className="font-montserrat font-bold">Voltar</span>
                    </Link>
                    <h1 className="text-4xl font-varsity text-brand-green tracking-wider mb-2">PRESTAÇÃO DE CONTAS</h1>
                    <p className="text-gray-500 font-montserrat">Gerencie as prestações de contas dos eventos</p>
                </div>
            </div>

            {/* Grid */}
            <div className="flex flex-col gap-8">
                {/* Pinned Section */}
                <div>
                    <h2 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                        <Pin size={16} /> Fixado
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <Link to="/custos-fixos">
                            <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border-2 border-brand-green/20 hover:border-brand-green/40 transition-all duration-300 h-full flex items-center justify-center overflow-hidden">
                                <div className="absolute top-4 right-4 bg-brand-green/10 text-brand-green p-2 rounded-full z-10">
                                    <Pin size={20} fill="currentColor" />
                                </div>
                                <img
                                    src={custosImg}
                                    alt="Custos Fixos"
                                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-300 rounded-xl relative z-0"
                                />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Other Events */}
                <div>
                    <h2 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">Eventos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <Link to="/semaforo-festa">
                            <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 h-full flex items-center justify-center">
                                <img
                                    src={semaforoImg}
                                    alt="Semáforo e Festa"
                                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-300 rounded-xl"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrestacaoContas;
