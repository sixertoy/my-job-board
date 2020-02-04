import MyHelper from '../MyHelper';

describe('src | components | MyHelper', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('it expect something', () => {
    const value = { prop: 'prop' };
    const expected = { prop: 'prop' };
    const result = MyHelper(value);
    expect(result).toStrictEqual(expected);
  });
});
