import { render, screen } from '@testing-library/react';
import Form from '../Form';
import { Router } from 'react-router-dom';
import history from 'util/history';

test('should render Form', () => {
  render(
    <Router history={history}>
      <Form />
    </Router>
  );

  screen.debug();
});
