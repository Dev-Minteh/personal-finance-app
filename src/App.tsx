// import { useState } from 'react'
// import './App.css'
// import data from './data/data.json'
// import Asidebar from './components/Asidebar';
// console.log(data);
// function App() {

//   return (
//     <div className="flex h-screen">
//   {/* <aside className="h-screen w-72 bg-black text-white p-4">
//   <h2 className="text-2xl font-bold mb-6">Finance</h2>
//   <nav>
//     <ul>
//       <li className="mb-4 flex gap-3">
//         <img src="public\images\icon-nav-overview.svg" alt="overview-icon" className="text-green-600" />
//         <a href="#" className="hover:text-gray-400">Overview</a>
//       </li>
//       <li className="mb-4 flex gap-3">
//         <img src="public\images\icon-nav-transactions.svg" alt="transactions-icon" />
//         <a href="#" className="hover:text-gray-400">Transactions</a>
//       </li>
//       <li className="mb-4 flex gap-3">
//         <img src="public\images\icon-nav-budgets.svg" alt="budgets-icon" />
//         <a href="#" className="hover:text-gray-400">Budgets</a>
//       </li>
//       <li className="mb-4 flex gap-3">
//          <img src="public\images\icon-nav-pots.svg" alt="pots-icon" />
//          <a href="#" className="hover:text-gray-400">Pots</a>
//        </li>
//        <li className="mb-4 flex gap-3">
//          <img src="public\images\icon-nav-recurring-bills.svg" alt="recurring-bills-icon" />
//          <a href="#" className="hover:text-gray-400">Recurring Bills</a>
//        </li>
//      </ul>
//    </nav>
//  </aside> */}
//  <Asidebar />
//   <main className="flex-1 p-6 h-screen font-sans bg-neutral-100 overflow-x-auto">
//    {/* <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"></main> */}
//    <section className="mb-6 ">
//      <h2 className="text-xl font-semibold mb-4">Overview</h2>
//      <div className="grid grid-cols-3 gap-4">
//        <div className="bg-black p-4 rounded-lg shadow-md">
//          <h3 className="text-md font-semibold text-gray-300">Current Balance</h3>
//          <p className="text-2xl font-bold text-white">{data.balance.current.toLocaleString()}</p>
//        </div>
//        <div className="bg-white p-4 rounded-lg shadow-md">
//          <h3 className="text-md font-semibold text-gray-600">Incoms</h3>
//          <p className="text-2xl font-bold">{data.balance.income.toLocaleString()}</p>
//        </div>
//        <div className="bg-white p-4 rounded-lg shadow-md">
//          <h3 className="text-md font-semibold text-gray-600">Expenses</h3>
//          <p className="text-2xl font-bold">{data.balance.expenses.toLocaleString()}</p>
//        </div>
//      </div>
//    </section>
//    {/* <section className='pots'>
//      <div className='flex justify-between items-center mb-4'>
//      <h2 className="text-xl font-semibold mb-4">Pots</h2>
//      <div className='flex gap-2 text-green-600'>
//      <p>see details</p>
//      <img src="public\images\icon-caret-right.svg" alt="arrow-right-icon" className="" />
//      </div>
//      </div>

//      <div className="flex gap-4 overflow-x-auto">
//        <div className='flex gap-2 items-center p-4 rounded-lg shadow-md bg-white'>
//          <img src="images\icon-nav-pots.svg" alt="pots-icon" className="" />
//          <div>
//            <p>Total Saved</p>
// <p className='text-2xl font-bold'>$850</p>
//          </div>
//          </div>
//        {data.pots.map((pot) => (
    
//          <div key={pot.name} className="flex gap-2 p-4 ">
//         <div className={`border-2 ${pot.theme}`}></div>
//         <div>
//           <h3 className="text-md font-semibold text-gray-600">{pot.name}</h3>
//           <p className="text-2xl font-bold">{pot.total.toLocaleString()}</p>
//           </div>
//         </div>
  
//        ))}
//      </div>
//    </section> */}
//           <section>
//             <div className="bg-white p-4 rounded-lg shadow flex flex-col mb-6">
//               <div className=" flex justify-between items-center mb-4">
//                  <h2 className="text-xl font-semibold">Pots</h2>
//                  <div className='flex gap-2 text-green-600'>
//                   <span className="text-sm text-green-600 cursor-pointer">
//                    See details 
//                  </span>
//                       <img src="public\images\icon-caret-right.svg" alt="arrow-right-icon" className="" /> 
//                  </div>
                 
//                </div>
//                <div className="flex gap-2 items-center">
//                 <div className=''>
//                 <div className='flex gap-4 p-4 bg-gray-100 rounded-lg'>
//                   <div className='flex gap-2 items-center'>
//                   <img src="images\icon-nav-pots.svg" alt="pots-icon" className="" />
//                   </div>
//                 <div className='mr-10'>
//                  <p className="text-sm  text-gray-500">Total Saved</p>
//                  <p className="text-2xl font-bold text-black">$850</p>
//                  </div>
//                 </div>
//                 </div>
//                   <div className="grid grid-cols-2 md:grid-cols-2 "> 
//                   {data.pots
//                   .filter((pot) => pot.name !== "Holiday")
//                   .map((pot) => (  
//                 <div key={pot.name} className="flex items-center gap-2 p-4 ">
//                 <div className={`border-2 ${pot.theme} h-[30px]`}></div>
//                 <div>
//                   <h3 className="text-[12px] font-semibold text-gray-600">{pot.name}</h3>
//                   <p className="text-sm font-bold">{pot.total.toLocaleString()}</p>
//                   </div>
//                 </div>
          
//               ))}
//                </div>
//               </div>
//             </div>
//             </section>
//        <section>
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Transactions</h2>
//             <span className="text-sm text-green-600 cursor-pointer">
//                  View All →
//              </span>
//              </div>
//                <ul className="space-y-4">
//                  {data.transactions
//                  .slice(
//                   0,
//                   data.transactions.findIndex(
//                     (tx) => tx.name === "Urban Services Hub"
//                   ) + 1
//                 )
//                  .map((tx) => (
//                   <li
//                     key={tx.name + tx.date}
//                     className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
//                   >
//                     <div>
//                       <h3 className="text-sm font-semibold text-gray-700">
//                         {tx.name}
//                       </h3>
//                       <p className="text-xs text-gray-500">{tx.date}</p>
//                     </div>
//                     <p
//                       className={`text-md font-bold ${
//                         tx.amount > 0 ? "text-green-600" : "text-red-500"
//                       }`}
//                     >
//                       {tx.amount > 0 ? "+" : "-"}$
//                       {Math.abs(tx.amount).toLocaleString()}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </section>
//                   <section>
//                <h2 className="text-xl font-semibold mb-4">Budgets</h2>
//                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                  {data.budgets.map((budget) => (
//                   <div key={budget.category} className="bg-white p-4 rounded-lg shadow-md">
//                     <h3 className="text-sm text-gray-500">{budget.category}</h3>
//                     <p className="text-xl font-bold text-black">${budget.maximum.toLocaleString()}</p>
//                   </div>
//                 ))}
//               </div>
//              </section>
// <section>
//                <h2 className="text-xl font-semibold mb-4">Recurring Bills</h2>
//                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                  <div className="bg-white p-4 rounded-lg shadow-md">
//                    <h3 className="text-sm text-gray-500">Paid Bills</h3>
//                    <p className="text-xl font-bold text-black">$900</p>
//                  </div>
//                  <div className="bg-white p-4 rounded-lg shadow-md">
//                    <h3 className="text-sm text-gray-500">Upcoming</h3>
//                    <p className="text-xl font-bold text-black">$900</p>
//                  </div>
//                  <div className="bg-white p-4 rounded-lg shadow-md">
//                    <h3 className="text-sm text-gray-500">Due Soon</h3>
//                   <p className="text-xl font-bold text-black">$900</p>
//                  </div>
//               </div>
//             </section>
//   </main>
//     </div>
//   )
// }

// export default App

// import React from "react";
// import { Home, List, PieChart, Wallet, Repeat } from "lucide-react";
import React from "react";
import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import data from "./data/data.json";
import Asidebar from "./components/Asidebar";

export default function App() {

  
  const budgets = [
    { category: "Entertainment", value: 50, color: "#3b82f6" },
    { category: "Bills", value: 750, color: "#10b981" },
    { category: "Personal Care", value: 100, color: "#f97316" },
    { category: "Dining Out", value: 75, color: "#6366f1" },
  ];
  
  const totalBudget = budgets.reduce((acc, b) => acc + b.value, 0);

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Asidebar />
      {/* Main content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Overview</h2>

        {/* Overview Row (full width) */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow">
            <p className="text-sm text-gray-400">Current Balance</p>
            <p className="text-2xl font-bold mt-2">{data.balance.current.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Income</p>
            <p className="text-2xl font-bold mt-2">{data.balance.current.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Expenses</p>
            <p className="text-2xl font-bold mt-2">{data.balance.current.toLocaleString()}</p>
          </div>
        </div>

        {/* Second Row: 2 Columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Pots</h3>
                <div>
                 <a href="#" className="text-sm text-gray-500">
                  See Details
                </a>
                <img src="public\images\icon-caret-right.svg" alt="arrow-right-icon" className="inline ml-1" />
                </div>
              </div>
              <div className="flex gap-6 overflow-x-auto  items-center">
                <div className="">
                <div className='flex gap-2 items-center p-4 rounded-lg bg-gray-100 '>
                <img src="images\icon-nav-pots.svg" alt="pots-icon" className="" />
                <div className="mr-10">
                  <p>Total Saved</p>
                  <p className='text-2xl font-bold'>$850</p>
                </div>
              </div>
                </div>              
              <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
                {
                  data.pots
                  .filter((pot) => pot.name !== "Holiday")
                  .map((pot) => (  
                <div key={pot.name} className="flex items-center gap-2 p-2 ">
                <div className={`divide-2 text-green-500 ${pot.theme} w-[4px] h-[43px]`}></div>
                <div>
                  <h3 className="text-[12px] font-semibold text-gray-600">{pot.name}</h3>
                  <p className="text-sm font-bold">{pot.total.toLocaleString()}</p>
                  </div>
                </div>
          
              ))
            }
            </div>
            </div>
          </div>

            {/* Transactions */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Transactions</h3>
                <div className="flex items-center gap-2 text-green-600 cursor-pointer">
                <a href="#" className="text-sm text-gray-500">
                  View All
                </a>
                <img src="public\images\icon-caret-right.svg" alt="arrow-right-icon" className="" />
                </div>  
              </div>
              <ul className="space-y-4 text-sm">
                { data.transactions
                  .slice(
                    0,
                    data.transactions.findIndex(
                      (tx) => tx.name === "Urban Services Hub"
                    ) + 1
                  )
                  .map((tx) => (
                    <li
                      key={tx.name + tx.date}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-700">
                          {tx.name}
                        </h3>
                        <p className="text-xs text-gray-500">{tx.date}</p>
                      </div>
                      <p
                        className={`font-bold ${
                          tx.amount > 0 ? "text-green-600" : "text-gray-500"
                        }`}
                      >
                        {tx.amount > 0 ? "+" : "-"}$
                        {Math.abs(tx.amount).toLocaleString()}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Budgets */}
            <section className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Budgets</h2>
                <div className="flex items-center gap-2 text-green-600 cursor-pointer">
                  <span className="text-sm">See details</span>
                  <img src="public\images\icon-caret-right.svg" alt="arrow-right-icon" className="" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 mb-6">
                  <ResponsiveContainer>
                    <RePieChart>
                      <Pie
                        data={budgets}
                        dataKey="value"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={2}
                      >
                        {budgets.map((b, idx) => (
                          <Cell key={idx} fill={b.color} />
                        ))}
                      </Pie>
                    </RePieChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-2xl font-bold">${338}</p>
                <p className="text-sm text-gray-500 mb-4">of ${totalBudget} limit</p>
                <ul className="space-y-2 w-full">
                  {data.budgets.map((b) => (
                    <li
                      key={b.category}
                      className="flex justify-between text-sm text-gray-600"
                    >
                      <span>{b.category}</span>
                      <span>${b.maximum}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            {/* Recurring Bills */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Recurring Bills</h3>
                <a href="#" className="text-sm text-gray-500">
                  See Details
                </a>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span>Paid Bills</span>
                  <span>$190.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Total Upcoming</span>
                  <span>$194.98</span>
                </li>
                <li className="flex justify-between">
                  <span>Due Soon</span>
                  <span>$59.98</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
