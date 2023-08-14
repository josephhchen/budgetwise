<template>
  <div class="right-sidebar">
    <div class="status-box">
      <div class="status-section">
          <div class="status-item">
              <strong>Spent</strong>
              <div class="red">${{ spent }}</div>
          </div>
        <div class="status-item">
          <strong>Available</strong>
          <div class="green">${{ available }}</div>
        </div>
        <div class="status-item">
          <strong>Budget</strong>
          <div>${{ budget }}</div>
        </div>
      </div>
      <div class="gray-bar">
<div class="fill-bar" :style="fillBarStyle"></div>
</div>      </div>
    <h3 class="snapshot-title">6 Months Snapshot</h3>
    <div class="graph-box">
  <div class="bar-graph">
    <div v-if="!budgetCreated" class="empty-graph-text">
      Create a budget to view a 6-month summary of your spending by category
    </div>
    <div v-else class="bars-container">
      <div v-for="(month, i) in ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']" :key="i" class="bar-container">
<div class="bar">
  <div v-for="(category, j) in categories" :key="`${i}-${j}`" :style="barStyle(category, i)" class="bar-section"></div>
</div>
<span class="month">{{ month }}</span>
</div>
</div>
          <div class="legend">
        <div class="legend-row">
          <div class="dot" :style="{backgroundColor: '#FF373C'}"></div><span>Housing</span>
          <div class="dot" :style="{backgroundColor: '#009EDF'}"></div><span>Utilities</span>
          <div class="dot" :style="{backgroundColor: '#FF8301'}"></div><span>Entertainment</span>
        </div>
        <div class="legend-row">
          <div class="dot" :style="{backgroundColor: '#FFB900'}"></div><span>Transportation</span>
          <div class="dot" :style="{backgroundColor: '#213B80'}"></div><span>Food</span>
          <div class="dot" :style="{backgroundColor: '#984F88'}"></div><span>Other</span>
        </div>
      </div>
      </div>

    </div>
    <h3 class="snapshot-title">Recent Transactions</h3>
<div v-if="!budgetCreated" class="transactions-box">
  Create a budget to start adding transactions.
</div>
<div v-else>
  <div v-for="transaction in transactions" :key="transaction.id" class="transaction-item">
  <div class="rectangle"></div>
  <div class="details">
    
    <strong>{{ transaction.product }}</strong>
        <div class="gray">{{ transaction.brand }}</div>

  </div>
  <div class="price-date">
    <strong>${{ transaction.price }}</strong>
    <div class="gray">{{ transaction.date }}</div>
  </div>
  <div class="arrow-icon">
    <font-awesome-icon icon="arrow-right" />
  </div>
</div>
</div>
    <h3 class="snapshot-title">Bank & Credit Cards</h3>
    <div class="transactions-box2" v-if="!budgetCreated">
  Connect your bank accounts to DoughRise to see bank information
</div>
<div v-else class="transaction-item">
  <div class="rectangle-card" style="background-color: red; width: 45px; height: 45px;"></div>
  <div class="details-card">
    <strong style="font-weight: bold; margin-left: 10px;">Bank of America</strong>
    <div class="gray-card">... 4765</div>
  </div>
  <div class="balance-info">
    <div style="color: #5157BF;">Balance</div>
    <div style="color: #5157BF; font-weight: bold;">$1.326.23</div>
  </div>
</div>

    <h3 class="saving-snapshot-title">Savings Goals</h3>
<div class="transactions-box3" v-if="!budgetCreated">
<div class="savings-goals">
  <div class="piggybank-icon">
<i class="fas fa-piggy-bank"></i>
</div>
  <div class="savings-text">
    <strong>Start saving up!</strong>
    <div>Create a budget to add a savings goal</div>
  </div>
</div>
</div>
<div v-else class="transactions-box-budget">
  <div class="savings-goals">
  <div class="savings-header">
    <strong class="italy-trip">Italy Trip</strong>
    <div class="see-details" style="color: #5157BF;">See details</div>
  </div>
  <div class="progress-ring">
    <div id="cont" data-pct="100">
      <svg id="svg" width="160" height="160" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle r="70" cx="80" cy="80" fill="transparent" stroke-dasharray="439.82" stroke-dashoffset="219.91"></circle>
        <circle id="bar" r="70" cx="80" cy="80" fill="transparent" stroke-dasharray="439.82" stroke-dashoffset="0"></circle>
      </svg>
      <div class="progress-label" style="color: #53BD71; font-weight: bold; font-size: 20px;">$300</div>
      <div class="progress-sublabel" style="color: #000; font-size: 12px;">of $600 saved this month</div>
    </div>
    <div class="total-savings">Total savings: $300 of $3000 by April 15, 2023</div>
  </div>
</div>
</div>
  </div>
</template>
<script>


export default {
data() {
  return {
    
    categories: [
      { label: 'Housing', color: '#FF373C' },
      { label: 'Utilities', color: '#009EDF' },
      { label: 'Entertainment', color: '#FF8301' },
      { label: 'Transportation', color: '#FFB900' },
      { label: 'Food', color: '#213B80' },
      { label: 'Other', color: '#984F88' },
    ],
    transactions: [
{ product: 'Cold Brew', brand: 'Starbucks', price: 5.92, date: '03-30-2022' },
{ product: 'Coursera', brand: 'Education', price: 39.01, date: '03-12-2022' },
{ product: 'AppleTree', brand: 'Groceries', price: 3.98, date: '03-03-2022' },
{ product: 'BKST-U-PENN', brand: 'Shopping', price: 49.89, date: '03--3-2022' },

  ],
  bankInfo: null
  };
},
methods: {
  barStyle(category) {
const height = '20px'; 
return { backgroundColor: category.color, height };
},
},
computed: {
  spent() {
    return this.$store.state.spent;
  },
  available() {
    return this.$store.state.available;
  },
  budget() {
    return this.$store.state.budget;
  },
  fillBarStyle() { 
    const percentage = this.budget > 0 ? '50%' : '0%';
    return { width: percentage };
  },
  budgetCreated() {
    return this.$store.state.budgetCreated;
  }
},

};
</script>
<style scoped>
.right-sidebar {
width: 200px;
position: absolute;
right: 300px;
top: 100px;
}

.status-box {
border: 1px solid #DDDDDD;
border-radius: 20px;
padding: 20px;
width: 400px;
}

.status-section {
display: flex;
justify-content: space-around;
}

.status-item {
text-align: center;
color: gray;
font-family: 'Manrope', sans-serif;
padding: 5px 25px;
flex: 1;
position: relative; 
}

.status-item:not(:last-child):after {
content: '';
border-right: 1px solid black;
position: absolute;
top: 25%; 
bottom: 25%; 
right: 0;
}


.status-item:last-child {
border-right: none;
}

.status-item div {
font-weight: normal;
padding: 5px 0;
transition: all 0.3s ease; 
}


.red {
color: red;
}

.green {
color: green;
}

.gray-bar {
background-color: #DDDDDD;
border-radius: 10px;
height: 25px;
margin: 10px 10px;
margin-top: 20px;
}

.snapshot-title {
font-weight: bold;
font-family: 'Manrope', sans-serif; 
text-align: center;
margin: 10px 0;
}

.saving-snapshot-title {
font-weight: bold;
font-family: 'Manrope', sans-serif; 
text-align: center;
margin-left: -50px; 
}
.graph-box {
  border: 1px solid #DDDDDD;
  border-radius: 10px;
  height: 350px;
  padding: 20px;
  margin: 10px 0;
  font-family: 'Manrope', sans-serif;
  width: 400px;
}



.bar-graph {
  flex: 1;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
}

.bar {
background-color: #838BD3;
width: 100%;
height: 20px;
margin-bottom: 5px;
}

.bar.white {
background-color: white;
border: 1px solid #838BD3;
color: #838BD3;
}

.x-axis {
  display: flex;
  justify-content: space-between;
  width: 80%; 
  align-self: center;
}
.month {
color: #838BD3;
}

.month.bold {
font-weight: bold;
color: white;
}

.empty-graph-text {
text-align: center; 
margin: 50px 0;

}




.legend {
display: flex;
flex-direction: column;
align-items: flex-start;
}

.legend-row {
display: flex;
align-items: center;
margin-bottom: 5px;

}

.dot {
width: 10px;
height: 10px;
border-radius: 50%;
margin-right: 5px;
}
.month.bold {
font-weight: bold;
color: #838BD3;
}
.legend-row span {
  margin-right: 10px; 
}

.transactions-box {
  border: 1px solid #DDDDDD;
  border-radius: 20px;
  padding: 20px; 
  margin: 10px 0;
  font-family: 'Manrope', sans-serif;
  width: 400px;
  text-align: center; 
  line-height: 60px; 
  font-weight: 400;
}
.transactions-box2 {
  border: 1px solid #DDDDDD;
  border-radius: 20px;
  padding: 20px; 
  margin: 10px 0;
  font-family: 'Manrope', sans-serif;
  width: 400px;
  text-align: center; 
  line-height: 20px; 
  font-weight: 400;
}
.transaction-item {
  border: 1px solid #DDDDDD;
  border-radius: 20px;
  padding: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  font-family: 'Manrope', sans-serif;
  width: 400px;
  text-align: center;
  font-weight: 400;
  line-height: 20px;
}
.savings-goals {
display: flex;
align-items: center;
padding: 10px;
}

.piggybank-icon {

width: 40px;
height: 40px;
background-color: #f0f0f0; 
border-radius: 50%;
margin-right: 10px;
}

.savings-text {

text-align: center;
}

.transactions-box3 {
border: 1px solid #DDDDDD;
border-radius: 20px;
padding: 20px;
margin: 10px 0;
font-family: 'Manrope', sans-serif;
width: 400px;
text-align: left; 
line-height: 20px;
font-weight: 400;
}
.transactions-box-budget {
border: 1px solid #DDDDDD;
border-radius: 20px;
padding: 15px;
margin: 10px 0;
font-family: 'Manrope', sans-serif;
width: 400px;
line-height: 20px;
}
.fill-bar {
height: 100%;
background-color: #5157BF; 
width: 0; 
transition: width 0.5s linear; 
border-radius: 20px;
}

.bars-container {
display: flex;
flex-direction: row; 
justify-content: space-between;
align-items: center;

}

.bar-container {
display: flex;
flex-direction: column; 
align-items: center;
}

.bar {
width: 30px;
height: 100px; 
margin: 5px 0;
transition: all 0.5s ease;
}

.month {
color: #838BD3;
margin-top: 15px;
}

.bar-section {
width: 100%;
}
.transaction-item {
display: flex;
align-items: center;

}

.rectangle {
width: 30px; 
height: 30px; 
border: 2px solid #213B80;
border-radius: 17px;
}
.balance-info {
  margin-left: auto;
  text-align: right;
  color: #5157BF;
}

.details {
flex: 1;
margin-left: -40px;
}

.gray {
color: gray;
}

.price-date {
flex: 1;
text-align: right;
}

.arrow-icon {
margin-left: 10px;
}

.rectangle-card {
  width: 60px; 
height: 60px; 
border-radius: 17px;
}
.savings-goals {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.savings-header {
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.italy-trip {
  font-weight: bold;
  margin-right: 180px;
  font-size: 25px;
}

.see-details {
}

.progress-ring {
  display: flex;
  align-items: center;
}

.progress-circle {
  position: relative;
  width: 100px;
  height: 100px;
}

.circle-svg {
  position: absolute;
  width: 100%;
  height: 100%;
}

.progress-label {
  font-weight: bold;
  position: absolute;
  text-align: center;
  
}

.progress-sublabel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  text-align: center;
  margin-top: -10px;
}

.total-savings {
  font-size: 20px;
}

.date {
  color: black;
  text-align: center;
}

#svg circle {
  stroke: #DDDDDD;
  stroke-width: 10;
  stroke-dasharray: 565.48;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s linear;
}
#svg #bar {
  stroke: #53BD71;
  stroke-width: 10;
  stroke-dasharray: 565.48;
  stroke-dashoffset: 282.74;
  transition: stroke-dashoffset 1s linear;
}
#cont {
  display: block;
  height: 200px;
  width: 200px;
  margin: 2em auto;
  position: relative;
}
#cont .progress-label {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 2em;
}
#cont .progress-sublabel {
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  font-size: 1em;
}
</style>