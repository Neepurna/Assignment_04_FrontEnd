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
    Box,
    Checkbox  
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef();

    const addTodo = () => {
        const newTask = inputRef.current.value.trim();
        if (newTask) {
            setTodos([...todos, { text: newTask, completed: false }]);
            inputRef.current.value = '';
        }
    };

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const toggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ 
                p: 4, 
                mt: 4, 
                bgcolor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: 2,
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#0a192f' }}>
                    To-Do List
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, mb: 4 }}>
                    <TextField
                        inputRef={inputRef}
                        fullWidth
                        variant="outlined"
                        placeholder="Add a new task"
                        size="small"
                        sx={{ 
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#0a192f',
                                }
                            }
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={addTodo}
                        startIcon={<AddIcon />}
                        sx={{
                            bgcolor: '#0a192f',
                            '&:hover': {
                                bgcolor: '#172a45'
                            }
                        }}
                    >
                        Add
                    </Button>
                </Box>

                <List>
                    {todos.map((todo, index) => (
                        <ListItem 
                            key={index}
                            sx={{
                                bgcolor: 'rgba(255, 255, 255, 0.8)',
                                mb: 1,
                                borderRadius: 1,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
                                }
                            }}
                        >
                            <ListItemText 
                                primary={todo.text} 
                                sx={{
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                    color: todo.completed ? 'text.disabled' : 'text.primary'
                                }}
                            />
                            <Checkbox 
                                checked={todo.completed}
                                onChange={() => toggleComplete(index)}
                                color="primary"
                            />
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