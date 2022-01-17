import React from 'react';
import { AddTodoForm } from './components/addTodoForm';
import { TodoList } from './components/todoList';
import { Typography } from '@mui/material';

const App = () => {
	return (
		<div className='container'>
			<Typography variant="h2" style={{ textAlign: "center", marginBottom: "50px", color: "blue" }}>
				Todo List
			</Typography>
			<AddTodoForm />
			<TodoList />
		</div>
	);
};

export default App;