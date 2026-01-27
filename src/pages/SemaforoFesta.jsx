import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function SemaforoFesta() {
    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-8 pb-20">
            {/* Header Section */}
            <div>
                <Link to="/prestacao-contas" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-4 transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    <span className="font-montserrat font-bold">Voltar</span>
                </Link>
                <h1 className="text-4xl font-varsity text-brand-green tracking-wider mb-2">SEMAFORO E FESTA</h1>
                <p className="text-gray-500 font-montserrat">Detalhes do evento</p>
            </div>

            {/* Content Placeholder */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[400px]">
                <p className="text-gray-500 font-montserrat">Conteúdo da página em construção...</p>
            </div>
        </div>
    );
}

export default SemaforoFesta;
