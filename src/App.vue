<template>
  <div id="app">
    <AppNavbar />
    <AppSidebar />
    <AppStartBox @budget-created="toggleCategories" /> 
    <AppCategoriesBox :budgetCreated="showCategories" />
    <AppRightSidebar />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppStartBox from './components/AppStartBox.vue';
import AppCategoriesBox from './components/AppCategoriesBox.vue'; 
import AppRightSidebar from './components/AppRightSideBar.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppSidebar,
    AppStartBox, 
    AppCategoriesBox, 
    AppRightSidebar
  },
  data() {
    return {
      showCategories: false,
      
    };
  },
  methods: {
    toggleCategories() { 
      this.showCategories = true;
    },
  },
};
</script>
