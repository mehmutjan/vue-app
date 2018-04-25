<style scoped>

</style>
<template>
    <div>{{ token }}</div>
</template>
<script>
    export default {
        data() {
            return {
                token: localStorage.getItem('token'),
            };
        },
        props: [],
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    };
</script>