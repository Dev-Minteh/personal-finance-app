import type{ Transaction } from "../types";



interface BudgetCardProps {
  category: string;
  maximum: number;
  spent: number;
  color: string;
  transactions: Transaction[];
}

export default function BudgetCard({ category, maximum, spent, color, transactions  }: BudgetCardProps) {
  const remaining = maximum - spent;
  const progress = (spent / maximum) * 100;

  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">{category}</h3>
        <span className="text-sm text-gray-500">Maximum of ${maximum}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="h-2 rounded-full"
          style={{ width: `${progress}%`, backgroundColor: color }}
        />
      </div>
      <div className="flex justify-between text-sm mb-4">
        <span className="text-gray-600">Spent ${spent}</span>
        <span className="text-gray-600">Remaining ${remaining}</span>
      </div>

      {/* Transactions */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-gray-700">Latest Spending</p>
          <button className="text-xs text-blue-500">See All</button>
        </div>

        <ul className="space-y-3">
          {transactions.map((t) => (
            <li key={t.id} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={t.image || "/images/default.png"}
                  alt={t.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm">{t.name}</span>
              </div>
              <div className="text-sm text-gray-600">${t.amount}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}