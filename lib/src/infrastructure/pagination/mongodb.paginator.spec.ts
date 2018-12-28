import { Collection } from 'mongodb';
import { MongodbPaginator } from './mongodb.paginator';
import { Pagination } from '../../application/pagination/pagination';

const CollectionMock = jest.fn<Collection>(() => ({
  find: jest.fn(() => ({
    skip: jest.fn(() => ({
      limit: jest.fn(() => ({
        toArray: jest.fn(() => []),
      })),
    })),
  })),
  estimatedDocumentCount: jest.fn(() => 1),
}));

const PaginationMock = jest.fn<Pagination>(() => ({
  getPage: () => 1,
  getLimit: () => 10,
}));

describe('Mongodb paginator', () => {
  it('Paginates collection', async () => {
    const collection = new CollectionMock();
    const pagination = new PaginationMock();
    const paginator = new MongodbPaginator();

    const result = await paginator.paginate(collection, pagination, data => data);

    expect(result.page).toBe(1);
    expect(result.totalPages).toBe(1);
    expect(result.data).toEqual([]);
  });
});
