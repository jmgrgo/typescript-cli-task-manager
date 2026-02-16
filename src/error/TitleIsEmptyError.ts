export class TitleIsEmptyError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "TitleIsEmptyError";
        Object.setPrototypeOf(this, TitleIsEmptyError.prototype);
    }
}