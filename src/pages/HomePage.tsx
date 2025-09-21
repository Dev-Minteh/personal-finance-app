import {
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";
import data from "../data/data.json"
import { Link } from "react-router";
  

export default function OverviewPage(){
    const chartBudgets = data.budgets.map((b, idx) => ({
    category: b.category,
    value: b.maximum,
    color: ["#277c78", "#82c9d7", "#f2cdac", "#696868"][idx % 4],
  }));

  const totalBudget = chartBudgets.reduce((acc, b) => acc + b.value, 0);
  
  const formatCurrency = (n: number) => {
  return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };
return(
    <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Overview</h2>

        {/* Overview Row (full width) */}
        <div className="grid md:grid-cols-3 gap-6 mb- w-[1060px] h-[119px]">
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow">
            <p className="text-sm text-gray-400">Current Balance</p>
            <p className="text-2xl font-bold mt-2">
              {formatCurrency(data.balance.current)}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Income</p>
            <p className="text-2xl font-bold mt-2">
              {formatCurrency(data.balance.income)}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Expenses</p>
            <p className="text-2xl font-bold mt-2">
              {formatCurrency(data.balance.expenses)}
            </p>
          </div>
        </div>

        {/* Second Row: 2 Columns */}
        <div className="grid md:grid-cols-2 mt-5   gap-50 h-[761px] w-[1060px]">
          {/* Left Column */}
          <div className="space-y-6 ">
            <div className="bg-white p-6 rounded-2xl shadow w-[608px] h-[218px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Pots</h3>
                <div>
                  <a href="#" className="text-sm text-gray-500">
                    See Details
                  </a>
                  <img
                    src="images\icon-caret-right.svg"
                    alt="arrow-right-icon"
                    className="inline ml-1"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 w-[544px] h-[110px]">
                {/* <div className=""> */}
                <div className="flex gap-4 items-center p-4 rounded-lg bg-gray-100 w-[247px] h-[110px]">
                  <img
                    src="images\icon-nav-pots.svg"
                    alt="pots-icon"
                    className=""
                  />
                  <div className="mr-10">
                    <p>Total Saved</p>
                    <p className="text-2xl font-bold w-8 h-8">{formatCurrency(data.pots.reduce((s,p)=> s + p.total, 0))}</p>
                  </div>
                </div>
                {/* </div>               */}
                <div className="grid grid-cols-2  text-sm text-gray-600 h-[110px] w-[211px]">
                  {data.pots
                    .filter((pot) => pot.name !== "Holiday")
                    .map((pot) => (
                      <div key={pot.name} className="flex items-center gap-2 ">
                        <div
                          className={`w-[5px] h-10 rounded ${
                            pot.theme ?? "bg-gray-400"
                          }`}
                        ></div>
                        <div>
                          <h3 className="text-[12px] font-semibold text-gray-400">
                            {pot.name}
                          </h3>
                          <p className="text-sm font-bold">
                            {pot.total}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Transactions */}
            <div className="bg-white p-6 rounded-2xl shadow w-[608px] ">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Transactions</h3>
                <div className="flex items-center gap-2 text-green-600 cursor-pointer">
                  <Link to="/transactions" className="text-sm text-gray-500">
                    View All
                  </Link>
                  <img
                    src="public\images\icon-caret-right.svg"
                    alt="arrow-right-icon"
                    className=""
                  />
                </div>
              </div>
              <ul className="space-y-4 text-sm">
                {data.transactions
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
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center">
                          <img
                            src="/public/images/avatars/emma-richardson.jpg "
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-700">
                            {tx.name}
                          </h3>
                        </div>
                      </div>

                      <div className="text-right">
                        <p
                          className={`font-bold ${
                            tx.amount > 0 ? "text-green-600" : "text-gray-500"
                          }`}
                        >
                          {tx.amount > 0 ? "+" : "-"}
                          {formatCurrency(Math.abs(tx.amount))}
                        </p>
                        <p className="text-xs font-semi-bold text-gray-500">
                          {tx.date.split("T")[0]}
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Budgets */}
            <section className="bg-white p-6 rounded-lg shadow w-[428px] h-[380px]">
              <div className="flex justify-between  items-center mb-4">
                <h2 className="text-xl font-semibold">Budgets</h2>
                <div className="flex items-center gap-2 text-gray-500 cursor-pointer">
                  <span className="text-sm">See details</span>
                  <img
                    src="public\images\icon-caret-right.svg"
                    alt="arrow-right-icon"
                    className=""
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="w-[247px] h-[240px]">
                  <ResponsiveContainer width="100%" height={240}>
                    <RePieChart>
                      <Pie
                        data={chartBudgets}
                        dataKey="value"
                        innerRadius={85}
                        outerRadius={115}
                        paddingAngle={0}
                        startAngle={100}
                        endAngle={-270}
                      >

                        {chartBudgets.map((b, idx) => (
                          <Cell key={idx} fill={b.color} />
                        ))}
                       
                        <Label
                          position="center"
                          content={() => (
                            <g>
                              <text
                                x="50%"
                                y="48%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="24"
                                fontWeight="bold"
                                fill="#111827"
                              >
                                $
                                {chartBudgets.reduce(
                                  (acc, b) => acc + b.value,
                                  0
                                )}
                              </text>
                              <text
                                x="50%"
                                y="62%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="12"
                                fill="#6B7280"
                              >
                                of ${totalBudget} limit
                              </text>
                            </g>
                          )}
                        />
                      </Pie>
                    </RePieChart>
                  </ResponsiveContainer>
                </div>

                <ul className="space-y-3 text-sm">
                  {data.budgets.map((b) => (
                    <li key={b.category} className="flex gap-3 items-center">
                      <div
                        className={`w-[6px] h-10 rounded ${
                          b.theme ?? "bg-gray-400"
                        }`}
                      ></div>
                      <div className="flex flex-col">
                        <span className="text-gray-700">{b.category}</span>
                        <span className="font-semibold">{formatCurrency(b.maximum)}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            {/* Recurring Bills */}

            <div className="bg-white p-6 rounded-2xl shadow-md w-[428px] h-[200px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Recurring Bills</h3>
                <div className="flex gap-2">
                  <a href="#" className="text-sm text-gray-500">
                    See Details
                  </a>
                  <img
                    src="public\images\icon-caret-right.svg"
                    alt="arrow-right-icon"
                    className=""
                  />
                </div>
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
)
}



