import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BASE_URL } from 'util/requests';

const categoriesResponse = {
  content: [
    {
      id: 3,
      name: 'Computadores',
    },
    {
      id: 2,
      name: 'Eletrônicos',
    },
    {
      id: 1,
      name: 'Livros',
    },
  ],
  pageable: {
    sort: {
      sorted: true,
      unsorted: false,
      empty: false,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 10,
    paged: true,
    unpaged: false,
  },
  totalPages: 1,
  totalElements: 3,
  last: true,
  size: 10,
  number: 0,
  sort: {
    sorted: true,
    unsorted: false,
    empty: false,
  },
  numberOfElements: 3,
  first: true,
  empty: false,
};

export const server = setupServer(
  rest.get(`${BASE_URL}/categories`, (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(categoriesResponse)
        );
  })
);
