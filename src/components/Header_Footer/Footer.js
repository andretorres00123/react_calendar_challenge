import React from 'react';
import Grid from '@material-ui/core/Grid';
import './_Header&Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-wrapper"> 
      <div className="footer_img">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
        </Grid>
      </Grid>
      </div>
      <div className="footer_text">
        Andre Torres.
      </div>
    </footer> 
  );
};

export default Footer;
