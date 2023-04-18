<template>
    <input class="input" type="text" @input="updateInput" :value="modelValue"/>
</template>

<script>
    export default {
        name: 'TextField',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(e) {
                this.$emit('update:modelValue', e.target.value)
            }
        }
    }
</script>

<style scoped>
    .input {
        width: 100%;
        padding: 10px 15px;
        border: 2px solid teal
    }     
</style>