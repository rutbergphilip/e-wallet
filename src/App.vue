<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <button class="home">Home</button>
      </router-link> |
      <router-link to="/new-card">
        <button class="add-new-card">Add Card</button>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

    .home, .add-new-card {
    cursor: pointer;
    border: 1px solid #3498db; 
    background-color: transparent; 
    height: 40px; 
    width: 100px; 
    color: #3498db; 
    font-size: 0.8rem;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.6);
    margin-top: 20px;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }

  .home:hover, .add-new-card:hover {
  border-color: #3498db;
  text-shadow:0px 0px 30px #3498db;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

body{
  background-color: #292929
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
