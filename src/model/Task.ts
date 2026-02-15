/**
 * Represents a task in the system.
 * Each task has a unique identifier, a title, and a completion status.
 */
export class Task {
    private readonly _id: number;
    private _title: string;
    private _isCompleted: boolean;

    constructor(id: number, title: string, isCompleted: boolean) {
        this._id = id;
        this._title = title;
        this._isCompleted = isCompleted;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get isCompleted(): boolean {
        return this._isCompleted;
    }

    set isCompleted(value: boolean) {
        this._isCompleted = value;
    }

}