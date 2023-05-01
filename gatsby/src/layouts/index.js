import React from 'react';
import { Link } from 'gatsby';

import 'typeface-rochester';
import 'typeface-josefin-sans';
import 'typeface-josefin-slab';

// import { rhythm, scale } from "../utils/typography"
// import constants from "../utils/constants"
import Container from '../components/container';

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Drupal and Gatsby</h1>
        </header>
        <Container>
          <div>
            {this.props.children}
            <Link to='/pages/'>See Pages Listing</Link>
          </div>
        </Container>

        <footer>
          <Container>
            <div>Copyright {new Date().getFullYear()} Terms & Conditions</div>
          </Container>
        </footer>
      </div>
    );
  }
}

export default DefaultLayout;
