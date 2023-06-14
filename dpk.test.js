const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
  it('Should return the "TRIVIAL_PARTITION_KEY" value when given no input', () => {
    const trivialKey = deterministicPartitionKey();

    expect(trivialKey).toBe('0');
  });

  it('Should return the "partitionKey" from the event object', () => {
    const event = { partitionKey: 'custom-key' };
    const key = deterministicPartitionKey(event);

    expect(key).toBe('custom-key');
  });

  it('Should generate a hash-based partition key for the event object', () => {
    const event = { name: 'John Doe', age: 30 };
    const key = deterministicPartitionKey(event);

    expect(key).not.toBe('0');
    expect(typeof key).toBe('string');
  });

  it('Should handle non-string "partitionKey" values', () => {
    const event = { partitionKey: 123 };
    const key = deterministicPartitionKey(event);

    expect(key).toBe('123');
    expect(typeof key).toBe('string');
  });

  it('Should handle "partitionKey" value inputs longer than expected', () => {
    const longKey = 'x'.repeat(300);
    const event = { partitionKey: longKey };
    const key = deterministicPartitionKey(event);

    expect(key).not.toBe(longKey);
    expect(key.length).toBeLessThanOrEqual(256);
  });

  it('Should handle undefined "partitionKey" values by generating a hash', () => {
    const event = { partitionKey: undefined };
    const key = deterministicPartitionKey(event);

    expect(key).not.toBeUndefined();
    expect(key.length).toBeLessThanOrEqual(256);
  });
});
