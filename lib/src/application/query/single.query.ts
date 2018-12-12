import { Id } from "../../domain/id/id";

export interface ISingleQuery<T> {
  get(id: Id): Promise<T>
}
