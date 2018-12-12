export interface IPaginationView<T> {
    data: T[];
    page: number;
    totalPages: number;
}
