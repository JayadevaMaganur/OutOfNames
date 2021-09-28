
<template>
<header>
    <!-- <nav class="container">
        <div class="branding">
            <router-link class="header" to="#"></router-link>
        </div>
        <div class="nav-links">
            <ul>
                <router-link class="nav-link text-white" to ="/" ></router-link>
                <router-link class="nav-link text-white" to="/dashboard">Dashboard</router-link>
                <router-link class="nav-link text-white" to="/departments">Departments</router-link>
                <router-link class="nav-link text-white" to="/store">Store</router-link>
            </ul>
        </div> 

    </nav> -->
    <div class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">TECHNO TOOLS</a>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/dashboard"
                    >Dashboard</router-link
                >
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/departments"
                    >Departments</router-link
                >
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/store"
                    >Store</router-link
                >
            </li>
            <li class="nav-item dropdown">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    More
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
                    
                    <a class="dropdown-item" href="/enquiry">Enquiry</a>
                    <a class="dropdown-item" href="/orders">Orders</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/logout">Logout</a>
                </div>
            </li>
        </ul>
    </div>

</header>

    <!-- <div class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">TECHNO TOOLS</a>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/dashboard"
                    >Dashboard</router-link
                >
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/departments"
                    >Departments</router-link
                >
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/store"
                    >Store</router-link
                >
            </li>
            <li class="nav-item dropdown">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    More
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
                    
                    <a class="dropdown-item" href="/enquiry">Enquiry</a>
                    <a class="dropdown-item" href="/orders">Orders</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/logout">Logout</a>
                </div>
            </li>
        </ul>
    </div> -->


    
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
