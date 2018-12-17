import * as awilix from 'awilix';
import { AwilixContainer } from 'awilix';
import { Constructor } from 'awilix/lib/resolvers';

export const getDecorator = (container: AwilixContainer) => ({
  decorate<T, Y>(key: string, className: Constructor<T>, decoratorName: Constructor<Y>, innerName: string = 'inner') {
    const innerKey = `${key}_inner`;

    container.register({
      [innerKey]: awilix.asClass<T>(className),
      [key]: awilix
        .asClass<Y>(decoratorName)
        .inject((awilixContainer: AwilixContainer) => ({ [innerName]: awilixContainer.resolve<T>(innerKey) })),
    });
  },
});
