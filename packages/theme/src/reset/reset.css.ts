import { globalStyle } from '@vanilla-extract/css';
import { layers } from '../layers';

globalStyle('html, body', {
  '@layer': {
    [layers.reset]: {
      height: '100%',
    },
  },
});

globalStyle('*, *::before, *::after', {
  '@layer': {
    [layers.reset]: {
      boxSizing: 'border-box',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
  },
});

globalStyle([
  'html',
  'body',
  'div',
  'span',
  'applet',
  'object',
  'iframe,h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'blockquote',
  'pre,a',
  'abbr',
  'acronym',
  'address',
  'big',
  'cite',
  'code,del',
  'dfn',
  'em',
  'img',
  'ins',
  'kbd',
  'q',
  's',
  'samp',
  'small',
  'strike',
  'strong',
  'sub',
  'sup',
  'tt',
  'var,b',
  'u',
  'i',
  'center,dl',
  'dt',
  'dd',
  'ol',
  'ul',
  'li,fieldset',
  'form',
  'label',
  'legend,table',
  'caption',
  'tbody',
  'tfoot',
  'thead',
  'tr',
  'th',
  'td,article',
  'aside',
  'canvas',
  'details',
  'embed',
  'figure',
  'figcaption',
  'footer',
  'header',
  'hgroup',
  'menu',
  'nav',
  'output',
  'ruby',
  'section',
  'summary',
  'time',
  'mark',
  'audio',
  'video',
].join(', '),
{
  '@layer': {
    [layers.reset]: {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  },
});

globalStyle([
  'article',
  'aside',
  'details',
  'figcaption',
  'figure',
  'footer',
  'header',
  'hgroup',
  'menu',
  'nav',
  'section',
].join(', '), {
  '@layer': {
    [layers.reset]: {
      display: 'block',
    },
  },
});

globalStyle('body', {
  '@layer': {
    [layers.reset]: {
      lineHeight: '1',
    },
  },
});

globalStyle('ol, ul', {
  '@layer': {
    [layers.reset]: {
      listStyle: 'none',
    },
  },
});

globalStyle('blockquote, q', {
  '@layer': {
    [layers.reset]: {
      quotes: 'none',
    },
  },
});

globalStyle([
  'blockquote:before',
  'blockquote:after',
  'q:before',
  'q:after',
].join(', '), {
  '@layer': {
    [layers.reset]: {
      content: ['', 'none'],
    },
  },
});

globalStyle('table', {
  '@layer': {
    [layers.reset]: {
      borderCollapse: 'collapse',
      borderSpacing: 0,
    },
  },
});
