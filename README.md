# nk_crypto_module
A nestjs crypto module library



## Crypto module

```bash

CryptoModule.forRoot({
     algorithm: 'xxxxxxx',
    secretKey: 'xxxxxxx',
    iv: 'xxxxxxx',
    global: true,
    }),

(or)

CryptoModule.forRootAsync({
    imports:[ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService) => {
      algorithm: configService.getOrThrow('xxxxxxx')',
    secretKey: configService.getOrThrow('xxxxxxx')',
    iv: configService.getOrThrow('xxxxxxx')',
    global: true,
    },
)

//function to perform encryption & decription
CryptoService().encrypt(){
  //logic
}
CryptoService().decrypt(){
  //logic
}
```