import Vue from 'vue';
import Chart from 'chart.js';
import Component from 'vue-class-component';
import { Logger } from '../../util/log';
import './<%= smallName %>.scss';

@Component({
    template: require('./<%= smallName %>.html')
})
export class <%= className %> extends Vue {

    protected logger: Logger = new Logger();

    mounted() {
        this.$nextTick(() => {
            this.logger.info('<%= smallName %> is ready!');
        });
    }

}
