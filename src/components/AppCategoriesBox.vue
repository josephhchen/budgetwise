<template>
    <div class="categories-box" v-if="budgetCreated">
      <h2 class="categories-header">Categories</h2>
      <div class="category" v-for="category in categories" :key="category">
        <div class="category-icon" :style="{ 'background-color': category.iconColor }">
    <font-awesome-icon icon="fa-solid fa-book" /> <!-- Change this icon based on the category -->
  </div>
  <div class="category-info">
    <div class="category-detail-container">
      <span class="category-title">{{ category.name }}</span>
      <span class="category-detail" :style="{ 'color': category.amountColor }">spent <span :style="{ 'color': category.amountColor }">${{ category.spent }}</span> of ${{ category.total }}</span>
    </div>
    <div class="category-progress">
      <div class="category-bar" :style="{ 'background-color': category.barColor, 'width': (category.spent / category.total) * 100 + '%' }"></div>
    </div>
</div>
  <div class="category-remaining">
    <div class="remaining-container">
      <span :style="{ 'color': category.amountColor }">{{ remainingAmount(category) }}</span>
      <span class="remaining-label">left</span>
    </div>
  </div>
      </div>
    </div>
  </template>
<script>
export default {
  props: ['budgetCreated'],

  computed: {
    remainingAmount() {
      return (category) => {
        let remaining = category.total - category.spent;
        if (remaining <= 0) {
          category.amountColor = '#FF373C'; 
        } else if (remaining < category.total / 2) {
          category.amountColor = '#FFB900'; 
        } else {
          category.amountColor = '#53BD71'; 
        }
        return `$${remaining}`;
      };
    },
  categories() {
    return this.$store.state.categories;
  },
  
  },
  watch: {
  'categories[3].spent'(newVal, oldVal) {
    if (newVal > oldVal) {
      let currentSpent = oldVal;
      const incrementBy = 10; 
      const delay = 20;

      const interval = setInterval(() => {
        if (currentSpent < newVal) currentSpent += incrementBy;

        this.categories[3].spent = currentSpent;

        if (currentSpent >= newVal) {
          clearInterval(interval);
        }
      }, delay);
    }
  },
  
},
methods: {
  addGroceryBudget() {
    this.$store.commit('incrementGroceries', 100);
  },
}
};

</script>

  
  <style scoped>
.categories-box {
  font-family: 'Manrope', sans-serif;
  padding: 20px;
  border-radius: 10px;
  width: 600px;
  position: absolute;
  left: 20%;
  top: 240px;
}
  
.categories-header {
  font-weight: bold;
  color: black;
}
.category {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #DDDDDD; 
  padding-bottom: 10px; 
}
.category-icon {
  border-radius: 50%;
  background-color: #E6F5EA;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-bottom: 10px;
}
.category-info {
  margin-left: 20px; 
  display: flex;
  flex-direction: column;
}
.category-title {
  font-weight: bold;
}
.category-detail {
  font-size: 0.8em; 
}
.category-detail-container {
  display: flex;
  flex-direction: column;
}


  
.category-progress {
  width: 500px; 
  height: 8px;
  background-color: #DDDDDD;
  border-radius: 20px;
  margin-top: 10px; 
  
}

.category-bar {
  width: 40%;
  height: 8px;
  background-color: #5157BF;
  border-radius: 20px;
}
  
.category-remaining {
  margin-left: auto;
  display: flex;
  flex-direction: column;
}

.remaining-container {
  display: flex;
  flex-direction: column;
}

.remaining-label {
  color: black
}

  </style>