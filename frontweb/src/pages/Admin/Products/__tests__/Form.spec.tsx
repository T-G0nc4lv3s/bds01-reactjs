import { render, screen } from '@testing-library/react';
import Form from '../Form';
import { Router } from 'react-router-dom';
import history from 'util/history';
import { useParams } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('Product form create tests', () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({
      productId: 'create',
    });
  });

  test('should render Form', () => {
    render(
      <Router history={history}>
        <Form />
      </Router>
    );

    screen.debug();
  });
});
