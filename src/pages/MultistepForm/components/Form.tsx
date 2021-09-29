import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

interface FormProps {
  onSubmit: () => void;
}

export const Form: FC<FormProps> = ({
  children,
  ...props
}) => {
  const styles = useStyles();

  return (
    <form {...props} className={styles.root} noValidate>
      {children}
    </form>
  );
};
