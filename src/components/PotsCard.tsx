import type{ Pot } from "../types";

interface potProps {
    pot: Pot[];
}
// const SAMPLE_POTS: Pot[] = [
// { id: "p1", name: "Savings", total: 159, target: 2000, color: "#0f9d7a" },
// { id: "p2", name: "Concert Ticket", total: 110, target: 150, color: "#6b6270" },
// { id: "p3", name: "Gift", total: 40, target: 60, color: "#7ad0db" },
// { id: "p4", name: "New Laptop", total: 10, target: 1000, color: "#f4d6c1" },
// { id: "p5", name: "Holiday", total: 531, target: 1440, color: "#8b63d9" },
// ];

const formatCurrency = (n: number) => {
return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export default function PotCard({pot}: potProps) {
const percent = pot.target > 0 ? (pot.total / pot.target) * 100 : 0;
const percentDisplay = Math.round(percent * 10) / 10; // one decimal if needed


return (
<div className="bg-white p-6 rounded-2xl shadow-md">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<span
className="inline-block w-3 h-3 rounded-full mt-1"
style={{ backgroundColor: pot.theme ?? "#111827" }}
/>
<h3 className="text-lg font-semibold">{pot.name}</h3>
</div>


{/* menu dots */}
<div className="text-gray-400 text-xl leading-none">⋯</div>
</div>


<div className="flex items-center justify-between mt-6">
<div>
<p className="text-sm text-gray-500">Total Saved</p>
</div>
<div>
<p className="text-2xl font-bold">{formatCurrency(pot.total)}</p>
</div>
</div>


{/* Progress Bar */}
<div className="mt-4">
<div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
<div
style={{ width: `${Math.min(100, percent)}%`, backgroundColor: pot.color }}
className="h-3 rounded-full"
/>
</div>


<div className="flex justify-between items-center mt-2 text-sm text-gray-500">
<span>{percentDisplay}%</span>
<span>Target of {formatCurrency(pot.target)}</span>
</div>
</div>


{/* Actions */}
<div className="mt-6 grid grid-cols-2 gap-4">
<button className="px-4 py-3 bg-[#f5efe9] rounded-lg font-medium">+ Add Money</button>
<button className="px-4 py-3 bg-[#f5efe9] rounded-lg font-medium">Withdraw</button>
</div>
</div>
);
}