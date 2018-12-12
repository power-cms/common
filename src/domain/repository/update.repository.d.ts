export interface IUpdateRepository<T> {
    update: (item: T) => Promise<void>;
}
