import { DynamicModule, Module } from "@nestjs/common";
import { CryptoAsyncOptions, CryptoOptions } from "./crpto.interface";
import { CRYPTO_CONFIG } from "./crypto.constants";
import { CryptoService } from "./crypto.service";

@Module({})
export class CryptoModule {
  static forRoot(options: CryptoOptions): DynamicModule {
    return {
      module: CryptoModule,
      providers: [
        {
          provide: CRYPTO_CONFIG,
          useValue: options,
        },
        CryptoService,
      ],
      exports: [CryptoService],
      global: true,
    };
  }

  static forRootAsync(options: CryptoAsyncOptions): DynamicModule {
    const cryptoAsyncProvider = {
      provide: CRYPTO_CONFIG,
      useFactory: options.useFactory,
      inject: options.inject || [],
    };

    return {
      module: CryptoModule,
      imports: options.imports,
      providers: [cryptoAsyncProvider],
      exports: [CryptoService],
    };
  }
}
