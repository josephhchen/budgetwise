<template>
  <nav class="sidebar-container">
    <ul>
      <li :class="{ active: activeItem === 'Overview' }"><a href="#">Overview</a></li>
      <li class="nav-item" @mouseover="setActiveItem('Budget')" @mouseleave="resetActiveItem"><a href="#">Budget</a></li>
      <li class="nav-item" @mouseover="setActiveItem('Transactions')" @mouseleave="resetActiveItem"><a href="#">Transactions</a></li>
      <li class="nav-item" @mouseover="setActiveItem('Trends')" @mouseleave="resetActiveItem"><a href="#">Trends</a></li>
      <li class="nav-item" @mouseover="setActiveItem('Savings Goals')" @mouseleave="resetActiveItem"><a href="#">Savings Goals</a></li>
      <li class="nav-item" @mouseover="setActiveItem('Alerts')" @mouseleave="resetActiveItem"><a href="#">Alerts</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppSidebar',
  data() {
    return {
      activeItem: 'Overview', 
    };
  },
  methods: {
    setActiveItem(item) {
      this.activeItem = item; 
    },
    resetActiveItem() {
      this.activeItem = 'Overview'; 
    },
  },
};
</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');
  
  .sidebar-container {
    width: 200px;
    background-color: #fff;
    height: calc(100vh - 60px);
    padding: 20px;
    padding-top: 80px;
    border-right: 1px solid #DBDBDB;
    position: absolute;
    top: 60px;
    z-index: 0;
  }
  
  .sidebar-container ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .sidebar-container li {
    padding: 10px 0;
    transition: all 0.3s; 
  }
  
  .sidebar-container a {
    color: #707070;
    text-decoration: none;
    font-family: 'Manrope', sans-serif;
    padding-left: 0; 
    border-left: 4px solid transparent; 
    transition: all 0.3s ease; 
  }

    
  .sidebar-container .active a,
  .sidebar-container .nav-item:hover a {
    font-weight: bold;
    color: #2B2B2B;
    border-left: 4px solid #2B2B2B;
    padding-left: 10px;
  }
  .sidebar-container .nav-item:hover a { 
    font-weight: bold;
    color: #2B2B2B;
    border-left: 4px solid #2B2B2B;
    padding-left: 10px;
  }
  
  .sidebar-container .nav-item:hover ~ .active a { 
    font-weight: normal;
    color: #707070;
    border-left: none;
    padding-left: 0;
  }
  </style>
  