const crypto = require('crypto');

exports.deterministicPartitionKey = (event) => {
    const TRIVIAL_PARTITION_KEY = '0';
    const MAX_PARTITION_KEY_LENGTH = 256;
    let candidate;

    if (event)
        candidate = event?.partitionKey || crypto.createHash('sha3-512').update(JSON.stringify(event)).digest('hex');

    candidate = typeof candidate !== 'string' ? JSON.stringify(candidate) : candidate;

    if (candidate?.length > MAX_PARTITION_KEY_LENGTH)
        candidate = crypto.createHash('sha3-512').update(candidate).digest('hex');

    return candidate || TRIVIAL_PARTITION_KEY;
};

// Example entry object
// const event = {
//     id: 1,
//     name: 'Example',
//     date: '2023-06-12'
// };
//
// console.log('Result simulation:', exports.deterministicPartitionKey(event));
