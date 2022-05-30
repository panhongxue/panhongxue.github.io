export declare class ParsedURL {
    isValid: boolean;
    url: string;
    scheme: string;
    user: string;
    host: string;
    port: string;
    path: string;
    queryParams: string;
    fragment: string;
    folderPathComponents: string;
    lastPathComponent: string;
    readonly blobInnerScheme: string | undefined;
    private displayNameInternal?;
    private dataURLDisplayNameInternal?;
    constructor(url: string);
    static fromString(string: string): ParsedURL | null;
    static platformPathToURL(fileSystemPath: string): string;
    static urlToPlatformPath(fileURL: string, isWindows?: boolean): string;
    static urlWithoutHash(url: string): string;
    static urlRegex(): RegExp;
    static extractPath(url: string): string;
    static extractOrigin(url: string): string;
    static extractExtension(url: string): string;
    static extractName(url: string): string;
    static completeURL(baseURL: string, href: string): string | null;
    static splitLineAndColumn(string: string): {
        url: string;
        lineNumber: (number | undefined);
        columnNumber: (number | undefined);
    };
    static removeWasmFunctionInfoFromURL(url: string): string;
    static isRelativeURL(url: string): boolean;
    get displayName(): string;
    dataURLDisplayName(): string;
    isAboutBlank(): boolean;
    isDataURL(): boolean;
    isHttpOrHttps(): boolean;
    isBlobURL(): boolean;
    lastPathComponentWithFragment(): string;
    domain(): string;
    securityOrigin(): string;
    urlWithoutScheme(): string;
    static urlRegexInstance: RegExp | null;
}
