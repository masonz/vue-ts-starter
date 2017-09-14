import Vue from 'vue';
import Component from 'vue-class-component';

import './home.scss';

@Component({
    template: require('./home.html')
})
export class HomePage extends Vue {

    package: string = 'vue-ts-starter';
    repo: string = 'https://github.com/masonz/generator-vue-ts-starter';
    mode: string = process.env.ENV;

}
