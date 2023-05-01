import React from 'react';
import { Link, graphql } from 'gatsby';
// import gray from 'gray-percentage';
// import Img from 'gatsby-image';

import Layout from '../layouts';
import Container from '../components/container';

// class IndexPage extends React.Component {
//   render() {
// const data = this.props.data;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div>
        <Container>
          <h1>Welcome</h1>
        </Container>

        <div>
          <Container>
            <h2>Most recent pages</h2>

            <ul>
              {data.mostRecent.nodes.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path.alias}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </div>
      </div>
    </Layout>
  );
};
// }

export default IndexPage;

export const pageQuery = graphql`
  {
    mostRecent: allDrupalNodePage(sort: { created: ASC }, limit: 3) {
      nodes {
        title
        drupal_internal__nid
        uid {
          drupal_internal__target_id
        }
        relationships {
          node_type {
            name
          }
        }
        path {
          alias
        }
      }
      totalCount
    }
  }
`;
