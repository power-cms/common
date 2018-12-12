export declare class Id {
    id: string;
    static fromString(id: string): Id;
    static generate(): Id;
    private constructor();
    toString(): string;
}
