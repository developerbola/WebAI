import { request, gql } from "graphql-request";

const graphAPI = import.meta.env.VITE_PUBLIC_HYGRAPH_ENDPOINT;

export const BlogService = {
  async getAllBlogs() {
    const query = gql`
      query Blogs {
        blogs {
          createdAt
          id
          slug
          title
          paragraph {
            text
          }
          image {
            url
          }
        }
      }
    `;
    const result = await request(graphAPI, query);
    return result.blogs;
  },
  async lastBlogs(number) {
    const query = gql`
      query lastBlogs {
        blogs(last: ${number}) {
          title
          slug
          image {
            url
          }
          paragraph {
            text
          }
        }
      }
    `;
    const result = await request(graphAPI, query);
    return result.blogs;
  },
  async bySlug(slug) {
    const query = gql`
      query bySlug {
        blogs(where: { slug: "${slug}" }) {
          createdAt
          id
          slug
          title
          paragraph {
            text
          }
          image {
            url
          }
        }
      }
    `;
    const result = await request(graphAPI, query);
    return result.blogs;
  },
};
