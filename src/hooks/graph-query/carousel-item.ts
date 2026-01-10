import { gql } from "graphql-request";

export const CAROUSEL_ITEM_QUERY = gql`
  query HeroCarouselItems {
    heroCarouselItems {
      title
      images {
        name
        url
        documentId
      }
    }
  }
`;
