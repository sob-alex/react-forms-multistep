import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    textDecoration: 'none',
    height: '100%',
    '& .MuiCardActionArea-root': {
      height: '100%',
    },
  },
  media: {
    height: 140,
    backgroundSize: 'contain',
  },
});

interface CardProps {
  imageUrl: string;
  title: string;
  text: string;
}

export default function MediaCard({
  imageUrl,
  title,
  text,
}: CardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
          >
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
      </CardActionArea>
    </Card>
  );
}
