import * as awilix from 'awilix';
import { getDecorator } from './awilix.decorator';

const doLogging = jest.fn();

interface IFoo {
  foo: () => string;
}

class FooService implements IFoo {
  public foo() {
    return 'bar';
  }
}

class ServiceLogger implements IFoo {
  constructor(private inner: IFoo) {}

  public foo() {
    const result = this.inner.foo();

    doLogging();

    return result;
  }
}

describe('Joi validator', () => {
  it('Decorates service', () => {
    const container = awilix.createContainer({
      injectionMode: awilix.InjectionMode.CLASSIC,
    });

    const decorator = getDecorator(container);
    decorator.decorate('foo', FooService, ServiceLogger);

    const service = container.resolve<IFoo>('foo');

    expect(service.foo()).toBe('bar');
    expect(doLogging).toBeCalled();
  });
});
