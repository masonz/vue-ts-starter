import { spy, assert } from 'sinon';
import { expect } from 'chai';
import Component from 'vue-class-component';
import { ComponentTest, MockLogger } from '../../util/component-test';
import { AboutPage } from './about';

let loggerSpy = spy();

@Component({
  template: require('./about.html')
})
class MockAboutComponent extends AboutPage {
  constructor() {
    super();
    this.logger = new MockLogger(loggerSpy);
  }
}

describe('About component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><about></about></div>', { 'about': MockAboutComponent });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();

    await directiveTest.execute((vm) => {
      expect(vm.$el.querySelector('.repo-link').getAttribute('href')).to.equal('https://github.com/masonz/generator-vue-ts-starter');
      assert.calledWith(loggerSpy, 'about is ready!');
    });
  });
});
