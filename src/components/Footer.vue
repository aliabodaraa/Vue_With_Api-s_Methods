<template>
    <footer>
        <p>Copyright &copy; 2022</p>
        <!-- <a href="/about">About</a> -->
          <router-link to="/about">About</router-link>
    </footer>
</template>
<style scoped>
a{
    color:#333;
}
footer{
    background-color: #7e7e7e;
    position: fixed;
    width: 100%;
    height: 150px;
    bottom: 0px;
    padding: 45px;
    z-index: 9999999;
}
</style>