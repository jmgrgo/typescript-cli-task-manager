export class TitleNotAvailableError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "TitleIsEmptyError";
        Object.setPrototypeOf(this, TitleNotAvailableError.prototype);
    }
}