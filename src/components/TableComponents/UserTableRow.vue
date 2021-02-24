<template>
    <div class="row">
        <div class="row__col">
            {{name}}
        </div>
        <div class="row__col">
            {{age}}
        </div>
        <div class="row__innergrid">
            <div>
                {{preferences.pet}}     
            </div>
            <div>
                {{preferences.fruit}}
            </div>
           
        </div>
        <div class="row__col">
            {{eyeColor}}
        </div>
    </div>
</template>

<script>


export default {
    name: 'TableRow',
    props: {
        name: String,
        age: Number,
        eyeColor: String,
        preferences: Object,

    },
    methods: {
        show() {
            console.log(this.person)
        }
    }
}
</script>
<style  scoped>
.row {
    font-family: 'Roboto';
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr;
    padding: 20px 25px;
    background-color: #214368;
    color: white;
    font-size: .9rem;
    font-weight: 300;
    border-bottom: 1px solid grey;
}
.row__innergrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style> 

