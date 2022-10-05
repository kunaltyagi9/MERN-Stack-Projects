import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import configureStore from "redux-mock-store"
import { Provider } from 'react-redux';

import Todo from '../Todo';

afterEach(() => {
    cleanup();
})

// test('first test', () => {
//     expect(true).toBe(false);
// })

test('should render todo component', () => {
    const initialState = { state: [] };
    const mockStore = configureStore();

    const store = mockStore(initialState);

    render(
        <Provider store={store}>*
            <Todo />
        </Provider>
    );
    
    const todoElement = screen.getByTestId('todo-test');
    expect(todoElement).toBeInTheDocument();
})

test('should render our todos', () => {
    const initialState = { state: [] };
    const mockStore = configureStore();

    const store = mockStore(initialState);

    const todo = { data: 'This is a task', done: true, createdAt: ''}
    render(
        <Provider store={store}>
            <Todo todo={todo} />
        </Provider>
    );
    
    const todoElement = screen.getByTestId('todo-test');

    expect(todoElement).toHaveTextContent('This is a task');

    expect(todoElement).toContainHTML('</form>');

    expect(todoElement).not.toContainHTML('<ul>');
});


test('matches snapshot', () => {
    const todo = { data: 'This is a task', done: true, createdAt: ''}

    const initialState = { state: [] };
    const mockStore = configureStore();

    const store = mockStore(initialState);

    const tree = renderer.create(
        <Provider store={store}>
            <Todo todo={todo} />
        </Provider>
    ).toJSON();

    console.log(tree)

    expect(tree).toMatchSnapshot();
})

