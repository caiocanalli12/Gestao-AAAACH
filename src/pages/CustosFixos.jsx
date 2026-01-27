import { Link } from 'react-router-dom';
import { ArrowLeft, FolderOpen, Image } from 'lucide-react';

function CustosFixos() {
    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-8 pb-20">
            {/* Header Section */}
            <div>
                <Link to="/prestacao-contas" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-4 transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    <span className="font-montserrat font-bold">Voltar</span>
                </Link>
                <h1 className="text-4xl font-varsity text-brand-green tracking-wider mb-2">CUSTOS FIXOS</h1>
                <p className="text-gray-500 font-montserrat">Gerenciamento de custos fixos</p>
            </div>

            {/* Folders/Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Canva Folder */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-gray-800 font-bold font-montserrat mb-4 flex items-center gap-2">
                        <FolderOpen className="text-brand-green" /> CANVA
                    </h2>

                    <div className="space-y-2">
                        <a
                            href="/src/comprovantes/canva_janeiro.png"
                            download
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
                        >
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 group-hover:scale-105 transition-transform">
                                <Image size={20} />
                            </div>
                            <span className="text-sm text-gray-600 font-medium font-montserrat">canva_janeiro.png</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustosFixos;
