<template>
    <div>
        <span>{{ message }}</span>

        <button @click="clickMe">Click Me</button>
        <ul>
            <li style="margin-top: 10px" class="message" @click="handleClick">
                {{info}}
            </li>
        </ul>


    </div>

</template>

<script>
    export default {
        name: 'TestComponent',
        props: [{
            info: {
                type: String,
                required: true,
                validator: value => value.length > 1
            },
            info2: String,

            movie: {
                type: String,
                default: 'Avengers'
            }
        }],
        data() {
            return {
                message: '',
                info: ''
            }
        },
        created() {
            this.message = 'Vesper'
        },
        methods: {
            clickMe: () => {
                return "kuku"
            },
            handleClick() {
                console.log('lalala')
                this.$emit('message-clicked', this.info)
            }
        }
    }
</script>