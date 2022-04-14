# dHealth URI Library

[![npm version](https://badge.fury.io/js/@dhealth%2Furi-library.svg)][npm]
[![Discord](https://img.shields.io/badge/chat-on%20discord-green.svg)][discord]

URI Scheme library to create dHealth Network transactions ready to be signed.

## Requirements

- Node.js 12 LTS

## Installation

``npm install @dhealth/uri-library``

## Usage

### Generate URI from Transaction

```ts
// examples/TransactionToURI.ts

import { Account, Deadline, EmptyMessage, Currency, NetworkType, TransferTransaction, TransactionMapping } from '@dhealth/sdk';

import { TransactionURI } from '@dhealth/uri-library';

const epochAdjustment = 1637848847;
const serializedTransaction = TransferTransaction.create(
    Deadline.create(epochAdjustment),
    Account.generateNewAccount(NetworkType.TEST_NET).address,
    [Currency.PUBLIC.createRelative(10)],
    EmptyMessage,
    NetworkType.TEST_NET
).serialize();

const generationHash = 'ABC'; // replace with network generation hash
const nodeUrl = 'http://localhost:3000';
const webhookUrl = 'http://myapp.local/id';

const transactionURI = new TransactionURI(serializedTransaction, TransactionMapping.createFromPayload, generationHash, nodeUrl, webhookUrl);
console.log(transactionURI.build());

```

### Create Transaction from URI

```ts
// examples/URIToTransaction.ts

import { TransactionMapping } from '@dhealth/sdk';
import { TransactionURI } from '@dhealth/uri-library';

const serializedTransaction = 'B600000000000000000000000000000000000000000' +
'0000000000000000000000000000000000000000000000000000000000000000000000000' +
'0000000000000000000000000000000000000000000000000000000000000000000000000' +
'0000000000000000000000000000190544100000000000000005816E98404000000900FFE' +
'A45AEA2EE9B880D5E4F9B91B75857F444F1766CDCB0600010000000000CC403C7A113BDF7' +
'C80969800000000000068656C6C6F';

const URI = 'web+dhealth://transaction?data=' + serializedTransaction + '&generationHash=test' +
    '&nodeUrl=http://localhost:3000&webhookUrl=http://myapp.local/id';
const transactionURI = TransactionURI.fromURI(URI, TransactionMapping.createFromPayload);

const transaction = transactionURI.toTransaction();
console.log(transaction);

```

## Getting help

Use the following available resources to get help:

- [dHealth Documentation][docs]
- Join the community [Discord][discord] 
- If you found a bug, [open a new issue][issues]

## Contributing

Contributions are welcome and appreciated. 
Check [CONTRIBUTING](CONTRIBUTING.md) for information on how to contribute.

## License

Copyright 2019 NEM

Copyright 2022-present dHealth Network, All rights reserved

Licensed under the [Apache License 2.0](LICENSE)

[npm]: https://www.npmjs.com/package/@dhealth/uri-library
[docs]: https://docs.dhealth.com
[issues]: https://github.com/dhealthproject/dhealth-uri-library/issues
[discord]: https://discord.gg/P57WHbmZjk
