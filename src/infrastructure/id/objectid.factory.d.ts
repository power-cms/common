import { ObjectID } from 'bson';
import { Id } from '../../domain/id/id';
export declare const ObjectIDFactory: {
    fromDomainId: (id: Id) => ObjectID;
    fromString: (id: string) => ObjectID;
};
