import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box' 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { Edit } from '@mui/icons-material';
import { Delete } from '@mui/icons-material';
import { Save } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

import { deleteTodo } from '../redux/todoSlice';
import { updateTodo } from '../redux/todoSlice';



export const TodoItem = ({ id, title }) => {

	const dispatch = useDispatch();

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id: id}));
	};

	const [editing, setEditing] = useState(false);
	const [name, setName] = useState(title);

	return (
		<Box sx={{ width: '100%', maxWidth: 500, alignItems: 'center' }}>
			<List style={{  padding: '10px', background: '#e5e5e5', marginBottom: 6, borderRadius: 10 } }>
				<ListItem disablePadding>
					<Typography variant="h5">
						{editing ? <FormControl>
						<TextField type="text"
						id="outlined-basic"
						label="Update todo..."
						variant="outlined"
						value={name}
						onChange={(e) => setName(e.target.value)}
						/>
						</FormControl> : title }
					</Typography>
						<IconButton
						onClick={() => {
							// dispatch(updateTodo({
							// 	title: title
							// }))
							if (editing) {
								dispatch(updateTodo({id, name}));
							}
							setEditing(!editing);
						}} 
						style={{ marginLeft: 'auto' }}>
							{editing ? <Save color='primary' /> : <Edit color='primary'/>}
						</IconButton>
						<IconButton onClick={handleDeleteClick}>
					<Typography variant="h5" style={{ height: '24px' }}>
						<Delete color='primary'/>
					</Typography>
						</IconButton>
				</ListItem>
			</List>
		</Box>
	);
};
