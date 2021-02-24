<template>
    <div>
        <UserTable />
    </div>
</template>

<script>
import UserTable from '@/components/TableComponents/UserTable'

export default {
    name: 'App',
    components: {
        UserTable
    }, 
    created() {
        this.$store.dispatch('fetchUsers')
    },
 
}
</script>

<style global>

ul {
    list-style: none;
}
a {
    text-decoration: none;
}
.wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0px 25px;
}
</style>
