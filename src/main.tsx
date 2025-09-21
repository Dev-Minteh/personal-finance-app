import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import TransactionsPage from './pages/TransactionPage.tsx'
import rawData from "./data/data.json"
import type {Data} from "./types.ts"
import BudgetsPage from './pages/BudgetsPage.tsx';
import PotCard from './components/PotsCard.tsx';



const data: Data = rawData as Data;
console.log(data)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<App />} />
     <Route path="/transactions" element={<TransactionsPage transaction={data.transactions}/>} />
     <Route path="/budgets" element={<BudgetsPage budget={data.budgets}/>} />
     {/* <Route path="/budgets" element={<PotCard pot={data.pots}/>} /> */}

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
