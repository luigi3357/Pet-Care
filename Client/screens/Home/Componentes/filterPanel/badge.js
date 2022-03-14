import React from 'react';
import { Badge } from 'react-native-paper';

const BadgeF = ({value, size}) => (
  <Badge size={size} >{value} </Badge>
);

export default BadgeF;