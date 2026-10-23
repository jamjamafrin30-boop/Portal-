const STORAGE_KEY = "pet_transactions_v1"; const BUDGET_KEY = "pet_budget_v1"; const THEME_KEY = "pet_theme_v1";
 
const CATEGORIES = {
  expense: ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Health", 
"Education", "Other"],
  income: ["Salary", "Pocket Money", "Freelance", "Gift", "Other"]
};
const COLORS = ["#4f46e5", "#06b6d4", "#f59e0b", "#ef4444", "#10b981", "#ec4899", "#8b5cf6", 
"#64748b"];
 
/* ---------- State ---------- */ let transactions = loadJSON(STORAGE_KEY, []); let budget = Number(localStorage.getItem(BUDGET_KEY)) || 0;

