import {
  Paper,
  Box,
  TextField,
  Button,
  makeStyles,
  Container,
} from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SortingSearchPanel from './components/SortingSearchPanel';
import TodoCard from './components/TodoCard';
import { addTodo } from '../../store/redux/todoSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));

const Dashboard = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const classes = useStyles();
  const [values, setValues] = useState({
    title: '',
    text: '',
  });

  const handleTextField = (e) => {
    const {
      target: { value, name },
    } = e;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const todo = {
      id: String(Date.now()),
      title: values.title,
      text: values.text,
      completed: false
    };
    dispatch(addTodo(todo));
  };

  return (
    <Container maxWidth='sm'>
      <Box className={classes.root} mt={4}>
        <TextField
          label='Todo title'
          name='title'
          variant='outlined'
          value={values.title}
          onChange={handleTextField}
          fullWidth
        />
        <TextField
          label='Todo text'
          name='text'
          variant='outlined'
          value={values.text}
          onChange={handleTextField}
          fullWidth
        />

        <Box mt={1}>
          <Button
            variant='contained'
            color='secondary'
            fullWidth
            onClick={handleSubmit}
          >
            Enter
          </Button>
        </Box>
      </Box>
      <Box mt={1}>
        <SortingSearchPanel />
        <Box mt={3}>
          {todos.map((todo) => (
            <TodoCard key={todo.id} {...todo} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
