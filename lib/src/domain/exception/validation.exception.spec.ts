import { ValidationException } from './validation.exception';

describe('Validation exception', () => {
  it('Parses joi exception', () => {
    const exception = ValidationException.fromJoiError({
      name: 'test',
      message: 'Validation error',
      isJoi: true,
      annotate: () => 'test',
      _object: {},
      details: [
        {
          message: 'Field is required',
          type: 'required',
          path: ['foo', 'bar'],
        },
      ],
    });

    expect(exception.details).toEqual([
      {
        path: 'foo.bar',
        message: 'required',
      },
    ]);
  });
});
