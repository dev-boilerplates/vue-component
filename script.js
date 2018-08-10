import template from '../templates/%s.html'
import styles from './computed-styles'
export default {
    name: "%s",
    template,
    props: [],
    data() {
        return {}
    },
    computed: {
        ...styles
    }
}