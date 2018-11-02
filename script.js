import template from '../../templates/%s.html'
import classes from './computed-classes'
export default {
    name: "%s",
    template,
    props: [],
    data() {
        return {}
    },
    computed: {
        ...classes
    }
}