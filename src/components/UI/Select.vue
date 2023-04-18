<template>
    <select :value="modelValue" @change="changeOption">
        <option disabled value="">Choose from</option>
        <option 
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: String,
            },
            options: {
                type: Array,
                default: () => []
            }
        },

        methods: {
            changeOption(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        },

        name: 'Choose'
    }
</script>

<style scoped>

</style>