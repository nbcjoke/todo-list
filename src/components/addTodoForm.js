import React, { useState } from "react";
import { FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";



export const AddTodoForm = () => {
	const [value, setValue] = useState('');

    const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
        dispatch(addTodo({
            title: value,
        }));
		setValue('');
	};

	const handleChange = (event) => {
		setValue(event.target.value);
	}

	return (
		<form onSubmit={onSubmit} style={ { display: 'flex', justifyContent: 'center' } }>
			<FormControl>
			 	<Box
      			component="TextField"
      			sx={{
        		'& > :not(style)': { m: 1, width: '50ch' },
      			}}
      			noValidate
      			autoComplete="off"
    			>
      				<TextField id="outlined-basic" label="Add todo..." variant="outlined" value={value}
					onChange={handleChange}/>
	  			</Box>
				<Button type="submit" variant="outlined" style={{ margin: '10px auto 0', width: 200 }}>Add todo</Button>
	  		</FormControl>
	  </form>
	);
};
