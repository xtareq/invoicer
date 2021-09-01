export declare class Invoicer {
    html: any;
    data: any;
    page: any;
    browser: any;
    constructor(htmlTemplate: string, data: any);
    toImage(path: string, options?: {}): Promise<string>;
    toPdf(path: string): Promise<string>;
}
//# sourceMappingURL=index.d.ts.map