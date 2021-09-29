import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  childrenWrapper: {
    width: '100%'
  }
}));

export const MainContainer: FC = ({
  children,
  ...props
}) => {
  const styles = useStyles();

  return (
    <Container
      className={styles.root}
      component='main'
      maxWidth='sm'
      {...props}
    >
      <div  className={styles.childrenWrapper}>{children}</div>
    </Container>
  );
};
