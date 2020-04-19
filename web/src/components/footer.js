import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PortableText from './portableText';

const useStyles = makeStyles({
  logo: {
    width: 400,
    maxWidth: '100%',
  },
});

const Footer = props => {
  const { logo, footerText } = props;
  const classes = useStyles();

  return (
    <footer>
      <Box textAlign="center" py={10}>
        {logo && logo.asset && (
          <img
            src={logo.asset.fluid.src}
            alt={logo.alt}
            className={classes.logo}
          />
        )}
        <Box mt={10}>
          <PortableText blocks={footerText} />
        </Box>
      </Box>
    </footer>
  );
};

Footer.propTypes = {
  logo: PropTypes.object,
  footerText: PropTypes.arrayOf(PropTypes.object),
};

Footer.defaultProps = {
  logo: '',
  footerText: '',
};

export default Footer;
