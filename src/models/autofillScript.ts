export default class AutofillScript {
    script: string[][] = [];
    documentUUID: string;
    properties: {delay_between_operations?: number} = {};
    options: {} = {};
    metadata: {} = {};
    autosubmit: null = null;

    constructor(documentUUID: string) {
        this.documentUUID = documentUUID;
    }
}
