import Asidebar from "../components/Asidebar";
import type {Transaction } from "../types";

interface props {
    transaction: Transaction[]
}

export default function TransactionsPage({transaction}: props) {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Asidebar />

      <main className="flex-1 p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">Transactions</h2>

        {/* Filters Row */}
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search transaction"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3 focus:ring focus:ring-green-300 outline-none"
            />

            {/* Filters */}
            <div className="flex gap-4">
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Latest</option>
                <option>Oldest</option>
              </select>

              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>All Transactions</option>
                <option>Dining Out</option>
                <option>Groceries</option>
                <option>Entertainment</option>
                <option>General</option>
              </select>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3">Recipient / Sender</th>
                <th className="pb-3">Category</th>
                <th className="pb-3">Transaction Date</th>
                <th className="pb-3 text-right">Amount</th>
              </tr>
            </thead>
            {transaction.map((item, idx) => (         
            <tbody key={idx}>
              {/* Example Row 1 */}
              <tr className="border-b last:border-0 hover:bg-gray-50">
                <td className="py-3 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-semibold">{item.name}</span>
                </td>
                <td className="py-3 text-gray-600">{item.category}</td>
                <td className="py-3 text-gray-600">{item.date.split("T")[0]}</td>
                <td className="py-3 text-right font-bold text-green-600">
                  {item.amount > 0 ? "+" : "-"}
                       {Math.abs(item.amount)}
                </td>
              </tr>
              <tr className="last:border-0 hover:bg-gray-50"></tr>
            </tbody>
             ))}
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <button className="px-3 py-1 rounded border border-gray-300">
              Prev
            </button>

            <div className="flex gap-2">
              <button className="px-3 py-1 rounded border bg-gray-800 text-white">
                1
              </button>
              <button className="px-3 py-1 rounded border border-gray-300">
                2
              </button>
              <button className="px-3 py-1 rounded border border-gray-300">
                3
              </button>
              <button className="px-3 py-1 rounded border border-gray-300">
                4
              </button>
              <button className="px-3 py-1 rounded border border-gray-300">
                5
              </button>
            </div>

            <button className="px-3 py-1 rounded border border-gray-300">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
