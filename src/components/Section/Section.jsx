import PropTypes from 'prop-types';
import { Box } from 'Box';
export const Section = ({ title, children }) => {
  return (
    <Box
      position="relative"
      maxWidth={8}
      minWidth={5}
      display="flex"
      flexDirection="column"
      backgroundColor="backgroundWhite"
      boxShadow="all"
      ml="auto"
      mr="auto"
      p={7}
      pt={4}
      pb={4}
      justifyContent="space-evenly"
      textAlign="center"
    >
      <h2>{title}</h2>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
