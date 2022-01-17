import React from 'react';
import { TodoItem } from './todoItem';
import { useSelector } from 'react-redux';

 export const TodoList = () => {

	const todos = useSelector((state) => state.todos);

	return (
		<ul style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 0, marginTop: 40 }}>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} />
			))}
		</ul>
	);
};
