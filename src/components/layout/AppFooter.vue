<template>
    <footer class="footer">
        <div class="footer__wrapper">
            <div class="footer__grid">
                 <ul class="footer__list">
                    <li class="footer__item">
                        <a class="footer__link" href="/">Home</a>
                    </li>
                    <li class="footer__item">
                        <a class="footer__link" href="/">Dashboard</a>
                    </li>
                    <li class="footer__item">
                        <a class="footer__link" href="/">Profile</a>
                    </li>
                </ul>
                <div  class="footer__right">
                    <ul>
                        <li class="footer__item">
                           Address: Elestree
                        </li>
                        <li class="footer__item">
                           Phone: 07489 243 222
                        </li>
                        <li class="footer__item">
                           Email: info@info.com
                        </li>
                    </ul>
                </div>
            </div>
           
        </div>
    </footer>
</template>


<script>
export default {
    name: 'AppFooter'
}
</script>
<style scoped>

.footer {
    background-color: #214368;
    color: white;
}
.footer__wrapper {
    padding: 35px 25px;
}
.footer__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    margin: 0 auto;
}
.footer__right {
    text-align: right;
}
.footer__list {
    border-right: 2px solid white;
}
.footer__item {
    margin-bottom: 20px;
    font-size: 2rem;
}
.footer__link {
    color: white;
    text-decoration: none;
    transition: color 0.2s linear;
}
.footer__link:hover {
    color: #d88b06;
}
</style>