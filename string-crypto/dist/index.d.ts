/// <reference types="node" />
declare class StringCrypto {
    static defaultDeriveKeyOpts: DeriveKeyOpts;
    private _deriveKeyOptions;
    constructor(options?: DeriveKeyOpts);
    deriveKey: (password: StringLike, options?: DeriveKeyOpts) => Buffer;
    encryptString: (str: StringLike, password: StringLike) => string;
    decryptString: (encryptedStr: StringLike, password: StringLike) => string;
}
export default StringCrypto;
