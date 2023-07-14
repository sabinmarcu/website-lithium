import { style } from '@vanilla-extract/css';
import { colors } from '.';

const boxSize = 75;
export const containerStyle = style({
  borderRadius: 3,
  display: 'flex',
});
export const boxStyle = style([containerStyle, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 2px black',
  width: boxSize,
  height: boxSize,
}]);

export const sectionStyle = style([containerStyle, {
  display: 'flex',
  flexDirection: 'column',
  background: colors.background.paper,
  margin: '5px 0',
  padding: 10,
}]);

export const sectionTitle = style({
  fontSize: '3em',
  lineHeight: '1.2em',
  margin: 0,
  padding: 0,
  marginBottom: 10,
});

export const sectionList = style({
  display: 'flex',
  gap: 20,
});
