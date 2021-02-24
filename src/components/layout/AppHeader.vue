<template>
    <header class="header">
            <nav class="nav">
                <div class="nav__wrapper">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <router-link class="nav__link" to="/">Home</router-link>
                        </li>
                        <li class="nav__item">
                            <router-link  class="nav__link" to="/about">About</router-link>
                        </li>
                        <li class="nav__item">
                            <router-link class="nav__link" to="/dashboard">Dashboard</router-link>
                        </li>
                    </ul>
                </div>

            </nav>
    </header>
</template>
<script>
export default {
    name: 'AppHeader'
}
</script>
<style scoped>
.header {
    background-color: rgb(231, 231, 231);
}
.nav__wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px 0;
}

.nav__list {
    display: flex;
    justify-content: center;
}
.nav__item {
    margin-right: 25px;
}
.nav__link {
    color: #219090;
    letter-spacing: 1px;
    font-size: 2rem;
}
</style>