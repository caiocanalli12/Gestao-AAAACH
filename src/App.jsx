import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Estoque from './pages/Estoque';
import PrestacaoContas from './pages/PrestacaoContas';
import SemaforoFesta from './pages/SemaforoFesta';
import CustosFixos from './pages/CustosFixos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="estoque" element={<Estoque />} />
          <Route path="prestacao-contas" element={<PrestacaoContas />} />
          <Route path="semaforo-festa" element={<SemaforoFesta />} />
          <Route path="custos-fixos" element={<CustosFixos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
