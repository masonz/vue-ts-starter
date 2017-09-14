import { expect } from 'chai';
import { HomePage } from './home';
import { ComponentTest } from '../../util/component-test';

describe('Home component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><home></home></div>', { 'home': HomePage });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      const mode = process.env.ENV;
      expect(vm.$el.querySelector('.mode').textContent).to.equal(`${mode} mode`);
      expect(vm.$el.querySelector('.package').textContent).to.equal('vue-ts-starter');
    });
  });
});
