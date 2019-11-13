import merge from 'lodash.merge';
import { yellow } from 'mdx-deck/themes';

const textTransformNone = {
  textTransform: 'none',
};

export default merge(yellow, {
  styles: {
    h1: textTransformNone,
    h2: textTransformNone,
    h3: textTransformNone,
    li: {
      fontSize: 'larger',
      listStyle: 'none',
      margin: '1.5rem 0',
    },
    blockquote: {
      position: 'relative',
      '::before': {
        content: '"❝"',
        color: 'grey',
        position: 'absolute',
        fontSize: '5rem',
        left: '-11%',
      },
    },
    Image: {
      backgroundPositionY: 'top',
    },
    Slide: {
      padding: '1rem 2rem',
      backgroundColor: '#d1e9ff',
    },
  },
});
