
import './styles.css';

import {TodoList, Todo} from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList

todoList.todos.forEach ( todo => crearTodoHtml ( todo ) );


