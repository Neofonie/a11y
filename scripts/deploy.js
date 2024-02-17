import { Buffer } from 'buffer';
import Client from 'ssh2-sftp-client';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const secrets = yargs(hideBin(process.argv)).argv;
const sftp = new Client();
const src = './public';

let privateKey = '';
privateKey =
    '-----BEGIN OPENSSH PRIVATE KEY-----' +
    secrets.privateKey.replace(/\|/g, '\n') +
    '\n-----END OPENSSH PRIVATE KEY-----\n';
privateKey = Buffer.from(privateKey, 'utf-8');

if (true) {
    sftp
        .connect({
            host: secrets.host,
            port: secrets.port,
            username: secrets.username,
            passphrase: secrets.passphrase,
            privateKey,
        })
        .then(() => sftp.uploadDir(src, secrets.destination))
        .then(msg => {
            console.log('Upload done:', msg);
            return sftp.end();
        })
        .catch(err => {
            console.log(err, 'catch error');
        });
}