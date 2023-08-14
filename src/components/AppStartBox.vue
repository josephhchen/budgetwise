<template>
  <div class="start-box" v-if="!budgetCreated">
    <h2>Let's get started!</h2>
    <button class="create-budget-btn" @click="createBudget">Create a budget</button>
  </div>
  <div class="budget-box" v-else>
    <div class="monthly">
          <h2 class="monthly-budget-header">
      Monthly Budget
      <button class="plus-button" @click="addGroceryBudget">+</button>
      <font-awesome-icon icon="fa-solid fa-caret-down" />
    </h2>
      <div class="date-box">
        <span>April 2022</span>
        <font-awesome-icon icon="fa-solid fa-caret-down" />
      </div>
    </div>
    <div class="icons">
      <font-awesome-icon icon="ellipsis-vertical" />
    </div>
  </div>
</template>
  <script>
  export default {
    name: 'AppStartBox',
    data() {
      return {
        budgetCreated: false,
      };
    },
    methods: {
      createBudget() {
        // Incrementing values with a certain delay
        let currentSpent = 0;
        let currentAvailable = 0;
        let currentBudget = 0;
  
        const incrementBy = 10; // The step value
        const delay = 20;
        const targetSpent = 800;
        const targetAvailable = 1200;
        const targetBudget = 2000;
  
        const interval = setInterval(() => {
    if (currentSpent < targetSpent) currentSpent += incrementBy;
    if (currentAvailable < targetAvailable) currentAvailable += incrementBy;
    if (currentBudget < targetBudget) currentBudget += incrementBy;

    this.$store.commit('setBudget', {
      spent: currentSpent,
      available: currentAvailable,
      budget: currentBudget,
    });

    if (currentSpent >= targetSpent && currentAvailable >= targetAvailable && currentBudget >= targetBudget) {
      clearInterval(interval);
      this.$store.commit('setBudgetCreated', true);
      this.$emit('budget-created'); 
    }
  }, delay);

  
        this.budgetCreated = true;
      },
      
    },
    addGroceryBudget() {
    this.$store.commit('incrementGroceries', 100);
  },
  };
  </script>
  
  
  <style scoped>
 .start-box {
  width: 600px;
  padding: 20px;
  border: 1px solid #DDDDDD;
  border-radius: 10px;
  font-family: 'Manrope', sans-serif;
  position: absolute;
  left: 20%;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .start-box h2 {
    font-weight: bold;
    color: black;
    text-align: center; 
  }
  
  .create-budget-btn {
    background-color: #5157BF;
    color: white;
    font-family: 'Manrope', sans-serif;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px; 
    margin-bottom: 10px;
    width: 200px; 
    font-weight: bold;

  }

 

.budget-box {
  width: 600px;
  padding: 20px;
  position: absolute;
  left: 20%;
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Manrope', sans-serif;

}

.monthly {
  display: flex;
  flex-direction: column;
}

.monthly-budget-header {
  font-weight: bold;
  color: black;
  font-family: 'Manrope', sans-serif;

}

.date-box {
  background-color: #E6F5EA;
  border-radius: 20px;
  padding: 5px 20px;
  color: #9DD7AB;
  display: flex;
  align-items: center;
  width: 40%;
}

.icons {
  display: flex;
  justify-content: space-between;
}

.fa-plus-circle {
  background-color: #5157BF;
  border-radius: 50%;
}
.plus-button {
  background-color: #53BD71;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
}

  </style>
  