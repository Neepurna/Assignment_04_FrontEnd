import React, { useState, useRef } from 'react';
import { 
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    
    IconButton,
    Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef();

    const addTodo = () => {
        const newTask = inputRef.current.value.trim();
        if (newTask) {
            setTodos([...todos, newTask]);
            inputRef.current.value = '';
        }
    };

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
                    To-Do List
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, mb: 4 }}>
                    <TextField
                        inputRef={inputRef}
                        fullWidth
                        variant="outlined"
                        placeholder="Add a new task"
                        size="small"
                    />
                    <Button
                        variant="contained"
                        onClick={addTodo}
                        startIcon={<AddIcon />}
                    >
                        Add
                    </Button>
                </Box>

                <List>
                    {todos.map((todo, index) => (
                        <ListItem 
                            key={index}
                            sx={{
                                bgcolor: 'background.paper',
                                mb: 1,
                                borderRadius: 1,
                                boxShadow: 1
                            }}
                        >
                            <ListItemText primary={todo} />
                            
                                <IconButton 
                                    edge="end" 
                                    onClick={() => removeTodo(index)}
                                    
                                >
                                    <DeleteIcon />
                                </IconButton>
                            
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
};

export default Todo;