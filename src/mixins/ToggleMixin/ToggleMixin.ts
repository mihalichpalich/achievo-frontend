import { SetupContext } from "vue";

export default {
    name: 'toggleMixin',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    setup(_: any, { emit }: SetupContext) {
        const hideDialog = () => {
            emit('update:show', false)
        }

        return {
            hideDialog
        }
    }
}