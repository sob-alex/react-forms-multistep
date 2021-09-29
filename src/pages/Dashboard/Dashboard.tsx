import {
  Paper,
  Box,
  TextField,
  Button,
  makeStyles,
  Container,
} from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SortingSearchPanel from './components/SortingSearchPanel';
import TodoCard from './components/TodoCard';
import { addTodo } from '../../store/redux/todoSlice';
import { useAppSelector } from '../../hooks';
import { ITodo } from '../../types/types';
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
  const todos = useAppSelector(
    (state) => state.todos.todos
  );

  const [searchWord, setSearchWord] = useState<string>('');
  const [localTodos, setLocalTodos] = useState<
    Array<ITodo> | []
  >([]);
  const classes = useStyles();
  const [values, setValues] = useState({
    title: '',
    text: '',
  });
  const [titleError, setTitleError] = useState<
    string | null
  >(null);
  const [textError, setTextError] = useState<string | null>(
    null
  );

  const handleTextField = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (titleError) setTitleError(null);
    if (textError) setTextError(null);
    const {
      target: { value, name },
    } = e;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!values.title || !values.text) {
      !values.title &&
        setTitleError('Поле не должно быть пустым');
      !values.text &&
        setTextError('Поле не должно быть пустым');
      return;
    }
    const todo = {
      id: String(Date.now()),
      title: values.title,
      text: values.text,
      completed: false,
    };
    dispatch(addTodo(todo));
  };
  useEffect(() => {
    const filteredTodos = todos.filter(
      (todo) =>
        todo.title.includes(searchWord) ||
        todo.text.includes(searchWord)
    );
    setLocalTodos(filteredTodos);
  }, [todos, searchWord]);
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
          error={Boolean(titleError)}
          helperText={titleError}
        />
        <TextField
          label='Todo text'
          name='text'
          variant='outlined'
          value={values.text}
          onChange={handleTextField}
          fullWidth
          error={Boolean(textError)}
          helperText={textError}
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
        <SortingSearchPanel
          searchWord={searchWord}
          onChangeSearchWord={setSearchWord}
        />
        <Box mt={3}>
          {localTodos.map((todo) => (
            <TodoCard key={todo.id} {...todo} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
