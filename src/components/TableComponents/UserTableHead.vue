<template>
    <div class="head">
        <div>Name - Gender </div>
        <div>Age </div>
        <div>Preferences </div>
        <div>Eye Color </div>
    </div>
</template>

<script>
export default {
    name: 'UserTableHead',

}
</script>
<style scoped>
.head {
    font-family: 'Raleway';
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr;
    padding: 30px 25px;
    color: white;
    background-color: #c77e00;
    font-weight: bold;
    letter-spacing: 2px;
}
</style>