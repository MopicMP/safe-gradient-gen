const { gen, batch } = require('./index');

describe('safe-gradient-gen', () => {
  test('should process string input', () => {
    expect(gen('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => gen(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = gen('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
