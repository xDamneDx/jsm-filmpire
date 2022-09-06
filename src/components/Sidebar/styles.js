import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  image: {
    width: '70%',
  },
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImages: {
    filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
  },
}));
