<template>
    <div class="wrapper">
        <div class="separate">
            <UserTableHead />
            <UserTableBody />
        </div>

    </div>
</template>

<script>
import UserTableHead from '@/components/TableComponents/UserTableHead'
import UserTableBody from '@/components/TableComponents/UserTableBody.vue'

export default {
    name: 'UserTable',
    components: {
        UserTableHead,
        UserTableBody
    }
}
</script>
<style scoped>
.separate {
    margin-top: 90px;
    margin-bottom: 90px;
}
</style>
