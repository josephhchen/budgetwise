import { createStore } from 'vuex'

export default createStore({
  state: {
    spent: 0,
    available: 0,
    budget: 0,
    budgetCreated: false,
    categories: [
      { name: 'Education', barColor: '#46BDC6', iconColor: '#46BDC6', spent: 40, total: 100 },
      { name: 'Entertainment', barColor: '#FF8301', iconColor: '#FF8301', spent: 10, total: 40 },
      { name: 'Food', barColor: '#213B80', iconColor: '#213B80', spent: 68, total: 150 },
      { name: 'Groceries', barColor: '#00BC38', iconColor: '#00BC38', spent: 100, total: 200 },
      { name: 'Healthcare', barColor: '#AD3B9B', iconColor: '#AD3B9B', spent: 100, total: 100 },
      { name: 'Housing', barColor: '#FF373C', iconColor: '#FF373C', spent: 1750, total: 1750 },
      { name: 'Miscellaneous', barColor: '#B0866D', iconColor: '#B0866D', spent: 0, total: 50 },
      { name: 'Office', barColor: '#E4759D', iconColor: '#E4759D', spent: 0, total: 20 },
      { name: 'Pets', barColor: '#783F05', iconColor: '#783F05', spent: 0, total: 100 },
      { name: 'Shopping', barColor: '#386BBC', iconColor: '#386BBC', spent: 20, total: 100 },
      { name: 'Subscriptions', barColor: '#4F7F88', iconColor: '#4F7F88', spent: 35, total: 50 },
      { name: 'Transportation', barColor: '#FFB900', iconColor: '#FFB900', spent: 30, total: 100 },
      { name: 'Travel', barColor: '#8E7CC3', iconColor: '#8E7CC3', spent: 0, total: 100 },
      { name: 'Utilities', barColor: '#009EDF', iconColor: '#009EDF', spent: 160, total: 300 }
    ]
  },
  mutations: {
    setBudget(state, payload) {
      state.spent = payload.spent
      state.available = payload.available
      state.budget = payload.budget
    },
    setBudgetCreated(state, value) {
      state.budgetCreated = value;
    },
    incrementGroceries(state, amount) {
      let groceriesCategory = state.categories.find(
        (category) => category.name === 'Groceries'
      );
    
      groceriesCategory.spent += amount;
    
      if (groceriesCategory.spent > groceriesCategory.total) {
        groceriesCategory.spent = groceriesCategory.total;
      }
    },

  },
})