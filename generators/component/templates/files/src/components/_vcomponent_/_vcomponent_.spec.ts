import { spy, assert } from 'sinon';
import { expect } from 'chai';
import Component from 'vue-class-component';
import { ComponentTest, MockLogger } from '../../util/component-test';
import { <%= className %> } from './<%= smallName %>';

let loggerSpy = spy();

@Component({
  template: require('./<%= smallName %>.html')
})
class MockComponent extends <%= className %> {
  constructor() {
    super();
    this.logger = new MockLogger(loggerSpy);
  }
}

describe('<%= smallName %> component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><v-component></v-component></div>', { 'v-component': MockComponent });
  });

  it('should render correct', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      let instance = <MockComponent>vm.$children[0];
      // expect(vm.$el.querySelectorAll('.tile-holder .title')[0].textContent).to.equal('Google Guidelines');
      assert.calledWith(loggerSpy, '<%= smallName %> is ready!');
    });
  });
});
