<template>
  <nav class="nav-container">
    <div class="nav-wrapper">
      <div class="left-side">
        <a href="#" class="brand-logo">BudgetWise</a>
        <ul class="menu-items">
          <li><a href="#" class="home-tab">Home</a></li>
          <li><a href="#" class="other-tabs">Community</a></li>
          <li><a href="#" class="other-tabs">FAQs</a></li>
        </ul>
      </div>
      <div class="profile-section">
        <div class="profile-circle"></div>
        <span class="profile-name">John Doe</span>
        <span class="dropdown-icon">&#9660;</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap');

.nav-container {
  background-color: #FFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1); 
  font-family: 'Manrope', sans-serif;
  width: 100%; 
  position: relative; 
  z-index: 1; 
  overflow: hidden; 
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.left-side {
  display: flex;
  align-items: center;
}

.brand-logo {
  color: #5157BF;
  font-size: 24px;
  text-decoration: none;
  margin-right: 20px;
  font-weight: bold; 
}

.home-tab::after {
  content: '';
  position: absolute;
  width: 90%;
  height: .1px; 
  background-color: #5157BF;
  bottom: -10px; 
  left: 0;
  font-weight: bold;
}

.menu-items {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu-items li {
  margin-left: 70px;
}

.home-tab {
  color: #5157BF;
  font-weight: bold;
}

.other-tabs {
  color: #707070;
  text-decoration: none;
}

.profile-section {
  display: flex;
  align-items: center;
}

.profile-circle {
  width: 24px;
  height: 24px;
  background-color: #5157BF;
  border-radius: 50%;
}

.profile-name {
  margin-left: 8px;
  margin-right: 8px;
}

.dropdown-icon {
  font-size: 12px;
}
</style>
