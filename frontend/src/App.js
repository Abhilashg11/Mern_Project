import Navbar from './components/Navbar';
import ProductForm from './pages/ProductForm';
import Summary from './pages/Summary';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './pages/Read';
import Update from './pages/Update';


function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={< ProductForm/>}/>
        <Route path="/Summary" element={< Summary/>}/>
        <Route path = "/Read/:id" element ={<Read />}/>
        <Route path = "/Update/:id" element ={<Update />}/>       
      </Routes>
    </BrowserRouter>
  );
}

export default App;