import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 3105;

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const createTodos = ({ title, userId, completed }: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', { title, userId, completed });
};

export const updateTodos = ({ id, title, userId, completed }: Todo) => {
  return client.patch<Todo>(`/todos/${id}`, { title, userId, completed });
};

export const deleteTodos = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};
