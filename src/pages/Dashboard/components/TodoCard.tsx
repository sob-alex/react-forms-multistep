import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Checkbox,
  Box,
  TextField,
} from '@material-ui/core';
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

interface TodoCardProps {
  id: string;
  title: string;
  text: string;
  completed: boolean;
}

const TodoCard = ({
  id,
  title,
  text,
  completed,
}: TodoCardProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [localTitle, setLocalTitle] = useState<
    null | string
  >(null);
  const [localText, setLocalText] = useState<null | string>(
    null
  );
  const handleCheckTodo = () => {
    dispatch(editTodo({ id, completed: !completed }));
  };
  const handleDeleteTodo = () => {
    dispatch(removeTodo({ id }));
  };
  const handleEdit = () => {
    if (isEditMode) {
      dispatch(
        editTodo({ id, title: localTitle, text: localText })
      );
    }
    setIsEditMode((prev) => !prev);
  };
  useEffect(() => {
    setLocalTitle(title);
    setLocalText(text);
  }, [title, text]);
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
          {isEditMode ? (
            <TextField
              value={localTitle}
              onChange={(e) =>
                setLocalTitle(e.target.value)
              }
            />
          ) : (
            localTitle
          )}
        </Typography>

        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
        >
          {isEditMode ? (
            <TextField
              value={localText}
              onChange={(e) => setLocalText(e.target.value)}
            />
          ) : (
            localText
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleEdit} size='small'>
          {isEditMode ? 'Save' : 'Edit'}
        </Button>
        <Button size='small' onClick={handleDeleteTodo}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoCard;
