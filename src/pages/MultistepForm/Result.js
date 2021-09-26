import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useData } from '../../store/context/FormContext';
import { MainContainer } from './components/MainContainer';
import { PrimaryButton } from './components/PrimaryButton';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import {
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  Typography,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  Table,
  TableBody,
} from '@material-ui/core';
import { setIsAuthorized } from '../../store/redux/appSlice';

const useStyles = makeStyles({
  root: {
    marginBottom: '30px',
  },
  table: {
    marginBottom: '30px',
  },
});

export const Result = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const styles = useStyles();
  const { data } = useData();

  const entries = Object.entries(data).filter(
    (entry) => entry[0] !== 'files'
  );
  const { files } = data;

  const onSubmit = async () => {
    // const formData = new FormData();
    // if (data.files) {
    //   data.files.forEach((file) => {
    //     formData.append("files", file, file.name);
    //   });
    // }

    // entries.forEach((entry) => {
    //   formData.append(entry[0], entry[1]);
    // });

    // const res = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   body: formData,
    // });
    dispatch(setIsAuthorized(true));
    history.push('/dashboard');
  };

  return (
    <>
      <MainContainer>
        <Typography component='h2' variant='h5'>
          Form Values
        </Typography>
        <TableContainer
          className={styles.root}
          component={Paper}
        >
          <Table
            className={styles.table}
            aria-label='simple table'
          >
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell align='right'>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((entry) => (
                <TableRow key={entry[0]}>
                  <TableCell component='th' scope='row'>
                    {entry[0]}
                  </TableCell>
                  <TableCell align='right'>
                    {entry[1] || 'none'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {files && (
          <>
            <Typography component='h2' variant='h5'>
              Files
            </Typography>
            <List>
              {files.map((f, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText
                    primary={f.name}
                    secondary={f.size}
                  />
                </ListItem>
              ))}
            </List>
          </>
        )}
        <PrimaryButton onClick={onSubmit}>
          Submit
        </PrimaryButton>
        <Link to='/multistep'>Start over</Link>
      </MainContainer>
    </>
  );
};
