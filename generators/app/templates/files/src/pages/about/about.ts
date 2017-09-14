import Vue from 'vue';
import Component from 'vue-class-component';
import { Logger } from '../../util/log';

@Component({
    template: require('./about.html')
})
export class AboutPage extends Vue {

    protected logger: Logger;
    repo: string = 'https://github.com/masonz/generator-vue-ts-starter';

    mounted() {
        if (!this.logger) this.logger = new Logger();
        this.$nextTick(() => this.logger.info('about is ready!'));
    }
}
