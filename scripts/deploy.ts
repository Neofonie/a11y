import { Buffer } from "buffer";
import Client from "ssh2-sftp-client";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

interface Secrets {
  host: string;
  port: number;
  username: string;
  passphrase: string;
  privateKey: string;
  destination: string;
}

const secrets = yargs(hideBin(process.argv)).argv as unknown as Secrets;
const sftp = new Client();
const src = "./build";

sftp
  .connect({
    host: secrets.host,
    port: secrets.port,
    username: secrets.username,
    passphrase: secrets.passphrase,
    privateKey: Buffer.from(secrets.privateKey.replace(/\|/g, "\n"), "utf-8"),
  })
  .then(() => sftp.uploadDir(src, secrets.destination))
  .then((msg: string) => {
    console.log("Upload done", msg);
    return sftp.end();
  })
  .catch((err: string) => {
    console.log("Upload error", err);
  });
