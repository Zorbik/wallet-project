import { NavLink } from 'react-router-dom';
import { Box } from '../Box';

export const AppBar = () => {
  return (
    <Box>
      <NavLink to="/">Home</NavLink>
      <NavLink to="statistic">Statistics</NavLink>
      <Box>YOUR BALANCE</Box>
    </Box>
  );
};
