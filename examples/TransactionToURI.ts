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
