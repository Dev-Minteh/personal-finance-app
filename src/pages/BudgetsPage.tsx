import Asidebar from "../components/Asidebar"
// import BudgetCard from "../components/BudgetCard"
// export default function BudgetsPage({budget}: props){
//     return(
//         <div className="flex">
//         <Asidebar /> 
//         <div className="flex-1  p-6" >  
//         {budget.map((bd) =>  (
//         <h1 className="flex-2">{bd.category}</h1>    
//         ))}
//         </div>
//         <BudgetCard />
//        </div>
//     )
// }
import BudgetCard from "../components/BudgetCard"
export default function BudgetsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Asidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Budgets</h2>
          <button className="px-4 py-2 bg-black text-white rounded-lg">
            + Add New Budget
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex flex-col items-center">
              {/* Placeholder Circle Chart */}
              <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">$338</span>
              </div>
              <p className="text-sm text-gray-500">of $591 limit</p>
            </div>

            {/* Spending Summary */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Spending Summary</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Entertainment</span> <span>$15 / $50</span>
                </li>
                <li className="flex justify-between">
                  <span>Bills</span> <span>$150 / $750</span>
                </li>
                <li className="flex justify-between">
                  <span>Dining Out</span> <span>$133 / $75</span>
                </li>
                <li className="flex justify-between">
                  <span>Personal Care</span> <span>$40 / $100</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Budget Cards */}
          <div className="col-span-2 space-y-6">
            <BudgetCard
              category="Entertainment"
              maximum={50}
              spent={15}
              color="#22c55e"
              transactions={[
                // { id: "1", name: "James Thompson", date: "2025-08-19", amount: 5, image: "/images/avatar1.png" },
                // { id: "2", name: "Pixel Playground", date: "2025-08-18", amount: 10, image: "/images/avatar2.png" },
              ]}
            />

            <BudgetCard
              category="Bills"
              maximum={750}
              spent={150}
              color="#3b82f6"
              transactions={[
                // { id: "3", name: "Spark Electric Solutions", date: "2025-08-02", amount: 100, image: "/images/avatar3.png" },
                // { id: "4", name: "Aqua Flow Utilities", date: "2025-08-01", amount: 50, image: "/images/avatar4.png" },
              ]}
            />

            <BudgetCard
              category="Dining Out"
              maximum={75}
              spent={133.75}
              color="#f97316"
              transactions={[
                // { id: "5", name: "Savory Bites Bistro", date: "2025-08-19", amount: 65, image: "/images/avatar5.png" },
                // { id: "6", name: "Ethan Clark", date: "2025-08-15", amount: 68.75, image: "/images/avatar6.png" },
              ]}
            />

            <BudgetCard
              category="Personal Care"
              maximum={100}
              spent={40}
              color="#6b7280"
              transactions={[
                // { id: "7", name: "William Harris", date: "2025-08-10", amount: 20, image: "/images/avatar7.png" },
                // { id: "8", name: "Jane Smith", date: "2025-08-08", amount: 20, image: "/images/avatar8.png" },
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}