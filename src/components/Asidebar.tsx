import { Home, List, PieChart, Wallet, Repeat } from "lucide-react";
import { CreditCard, PiggyBank } from "lucide-react"
export default function Asidebar() {
  return (
    //  <aside className="w-72 bg-black text-white p-6 flex flex-col">
    //      <h2 className="text-2xl font-bold mb-8">Finance</h2>
    //      <nav>
    //     <ul className="space-y-6">
    //          {["Overview", "Transactions", "Budgets", "Pots", "Recurring Bills"].map(
    //            (label) => (
    //              <li
    //                key={label}
    //                className="flex items-center gap-3 hover:text-green-400 cursor-pointer"
    //              >
    //                <span className="text-sm">{label}</span>
    //              </li>
    //            )
    //          )}
    //        </ul>
    //      </nav>
    //    </aside>
        <aside className="w-72 bg-[#1b1b1f] text-white p-6 flex flex-col shadow-lg rounded-r-2xl ">
        <h2 className="text-2xl font-bold mb-10">finance</h2>
        <nav>
          <ul className="space-y-6">
            {[
              { label: "Overview", icon: <Home size={18} /> },
              { label: "Transactions", icon: <CreditCard size={18} /> },
              { label: "Budgets", icon: <PieChart size={18} /> },
              { label: "Pots", icon: <PiggyBank size={18} /> },
              { label: "Recurring Bills", icon: <Repeat size={18} /> },
            ].map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${
                  item.label === "Overview"
                    ? "bg-white text-black"
                    : "hover:text-green-400"
                }`}
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto text-xs text-gray-400 cursor-pointer">
          Minimize Menu
        </div>
      </aside>
  )
}