import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import  Airdrop  from './components/Airdrop';
import Balance  from "./components/checkBalance";
import TransferToken from "./components/sendToken";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/checkBalance" element={<Balance/>} />
        <Route path="/send" element={<TransferToken />} />

      </Routes>
    </Router>
  );
}

export default App;
