// import { Link } from "react-router"
// export default function Asidebar() {
//   return (



  
//         <aside className="w-72 bg-[#1b1b1f] text-white pr-4 flex flex-col shadow-lg rounded-r-2xl ">
//         <div>
//          <h2 className="text-2xl font-bold mb-10 pl-6 pt-6 ">finance</h2>
//         <nav>
//           <ul className="space-y-6">
//             {[
//               { label:"Overview", icon: <img src="public\images\icon-nav-overview.svg" /> },
//               { label: "Transactions", icon: <img src="images\icon-nav-transactions.svg" /> },
//               { label: "Budgets", icon: <img src="\images\icon-nav-budgets.svg" /> },
//               { label: "Pots", icon: <img src="/images/icon-nav-pots.svg " /> },
//               { label: "Recurring Bills", icon: <img src="images\icon-nav-recurring-bills.svg" /> },
//             ].map((item, idx) => (
//               <li key={idx}>
//                <Link
//                 to={item.path}
//                 className={`flex items-center gap-3 font-semi-bold px-4 py-2 rounded-r-lg cursor-pointer ${
//                   item.label === "Overview" ? "bg-white text-black" : "hover:text-green-400"
//                 }`}
//               >
//                 {item.icon}
//                 <span className="text-medium">{item.label}</span>
//               </Link>
//             </li>


//             ))}
//           </ul>
//         </nav> 
//         </div>
//          <div className="mt-auto text-xs text-gray-400 cursor-pointer">
//           Minimize Menu
//         </div> 
//       </aside>
//   )
// }
import { Link } from "react-router";
const Asidebar: React.FC = () => {
return (
<aside className="w-64 bg-gray-900 text-white min-h-screen p-6 flex flex-col justify-between">
<div>
<h1 className="text-2xl font-bold mb-8">finance</h1>
<nav className="space-y-3">

<Link to="/" className="flex items-center gap-3 bg-white/10 px-3 py-2 rounded-lg font-medium">
<span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
Overview
</Link>
<Link to="/transactions" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5" href="#">
<span className="w-3 h-3 rounded-full bg-gray-400 inline-block" />
Transactions
</Link>
<Link to="/budgets" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5" href="#">
<span className="w-3 h-3 rounded-full bg-gray-400 inline-block" />
Budgets
</Link>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5" href="#">
<span className="w-3 h-3 rounded-full bg-gray-400 inline-block" />
Pots
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5" href="#">
<span className="w-3 h-3 rounded-full bg-gray-400 inline-block" />
Recurring Bills
</a>
</nav>
</div>


<div className="text-sm text-gray-400">&#9664; Minimize Menu</div>
</aside>
);
};

export default Asidebar