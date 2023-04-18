


export default {
    props: {
        show: {
            type: Boolean,
            default: true
        }
    },
    method: {
        hide() {
            this.$emit('update:show', false)
        }
    }
}