import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';

export default function BlogSingle({
  data, // prop injected by GraphQL query below
}) {
  const { markdownRemark } = data; //data.markdownRemark holds our post
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }}>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;