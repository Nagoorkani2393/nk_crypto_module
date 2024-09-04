import { Inject, Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { CryptoOptions } from './crpto.interface';
import { CRYPTO_CONFIG } from './crypto.constants';

@Injectable()
export class CryptoService {
  constructor(
    @Inject(CRYPTO_CONFIG) private readonly cryptoOptions: CryptoOptions,
  ) {}

  private readonly _hexEncoding: BufferEncoding | crypto.Encoding = 'hex';
  private readonly _utfEncoding: BufferEncoding = 'utf8';

  public encrypt(text: string): string {
    const cipher = crypto.createCipheriv(
      this.cryptoOptions.algorithm,
      this.cryptoOptions.secretKey,
      Buffer.from(this.cryptoOptions.iv, this._hexEncoding),
    );
    const encrypted = Buffer.concat([
      cipher.update(text, this._utfEncoding),
      cipher.final(),
    ]);
    return encrypted.toString(this._hexEncoding);
  }

  public decrypt(ciphertext: string): string {
    const decipher = crypto.createDecipheriv(
      this.cryptoOptions.algorithm,
      this.cryptoOptions.secretKey,
      Buffer.from(this.cryptoOptions.iv, this._hexEncoding),
    );
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(ciphertext, this._hexEncoding)),
      decipher.final(),
    ]);
    return decrypted.toString(this._utfEncoding);
  }
}
