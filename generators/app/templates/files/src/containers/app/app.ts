import Vue from 'vue';
import { Navbar } from '../../components/navbar';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  template: require('./app.html'),
  components: {
    Navbar
  }
})
export class App extends Vue {

}