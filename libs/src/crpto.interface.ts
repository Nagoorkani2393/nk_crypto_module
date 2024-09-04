import { ModuleMetadata } from "@nestjs/common";

export interface CryptoOptions {
  secretKey: string;
  iv: string;
  algorithm: string;
}

export interface CryptoAsyncOptions extends Pick<ModuleMetadata, "imports"> {
  name?: string;
  useFactory: (...args: any[]) => Promise<CryptoOptions> | CryptoOptions;
  inject?: any[];
}
