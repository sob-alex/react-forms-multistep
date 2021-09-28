import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Checkbox, Box } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  editTodo,
  removeTodo,
} from '../../../store/redux/todoSlice';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    minWidth: 275,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
  },
});

const TodoCard = ({ id, title, text, completed }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleCheckTodo = () => {
    dispatch(editTodo({ id, completed: !completed }));
  };
  const handleDeleteTodo = () => {
    dispatch(removeTodo({ id }));
  };
  return (
    <Card className={classes.root}>
      <Box position='absolute' top={7} right={7}>
        <Checkbox
          defaultChecked
          color='primary'
          checked={completed}
          onChange={handleCheckTodo}
        />
      </Box>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>

        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
        >
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Edit</Button>
        <Button size='small' onClick={handleDeleteTodo}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoCard;
