export interface ICreateRepository<T> {
  create: (item: T) => Promise<void>;
}
