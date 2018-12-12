export interface IContainer {
    resolve<T>(name: string): T;
    register<T>(name: string, registration: T): this;
}
