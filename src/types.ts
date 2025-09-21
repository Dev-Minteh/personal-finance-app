
// Balance section
export interface Balance {
  current: number;
  income: number;
  expenses: number;
}

// Budgets
export interface Budget {
  category: string;
  maximum: number;
  theme?: string; // optional Tailwind class like "border-blue-500"
}

// Pots (savings goals)
export interface Pot {
  name: string;
  total: number;
  target?: number;
  theme?: string;
}

// Transactions
export interface Transaction {
  id: string;
  name: string;
  avatar: string
  category: string;
  date: string; // ISO string
  amount: number;
  type: "income" | "expense";
  image?: string; // optional avatar/logo
}

// Recurring bills
export interface Bill {
  id: string;
  name: string;
  amount: number;
  status: "paid" | "upcoming" | "due";
}

// Root data.json type
export interface Data {
  balance: Balance;
  budgets: Budget[];
  pots: Pot[];
  transactions: Transaction[];
  bills?: Bill[];
}
