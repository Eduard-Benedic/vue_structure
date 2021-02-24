<template>
    <div>
        <div>
        <user-table-row     v-for="person in this.$store.getters.usersList"
                            v-bind:key="person._id"
                            v-bind:name="person.name"
                            v-bind:age="person.age"
                            v-bind:eyeColor="person.eyeColor"
                            v-bind:preferences="person.preferences"> 
            </user-table-row>
        </div>
    </div>
</template>

<script>
import UserTableRow from './UserTableRow'

export default {
    name: 'UserTableBody',
    components: {
        UserTableRow
    }
   
}
</script>
