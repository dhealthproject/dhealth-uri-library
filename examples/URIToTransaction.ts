import { TransactionMapping } from '@dhealth/sdk';
import { TransactionURI } from '@dhealth/uri-library';

const serializedTransaction = 'B600000000000000000000000000000000000000000' +
'0000000000000000000000000000000000000000000000000000000000000000000000000' +
'0000000000000000000000000000000000000000000000000000000000000000000000000' +
'0000000000000000000000000000190544100000000000000005816E98404000000900FFE' +
'A45AEA2EE9B880D5E4F9B91B75857F444F1766CDCB0600010000000000CC403C7A113BDF7' +
'C80969800000000000068656C6C6F';

const URI = 'web+symbol://transaction?data=' + serializedTransaction + '&generationHash=test' +
    '&nodeUrl=http://localhost:3000&webhookUrl=http://myapp.local/id';
const transactionURI = TransactionURI.fromURI(URI, TransactionMapping.createFromPayload);

const transaction = transactionURI.toTransaction();
console.log(transaction);
