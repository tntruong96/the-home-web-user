import { gql } from "graphql-request";

const GET_CATEGORIES = gql`
  query Categories($locale: I18NLocaleCode, $filters: CategoryFiltersInput) {
    categories(locale: $locale, filters: $filters) {
      documentId
      title
      slug
      dishes {
        name
        documentId
        price
        thumbnail {
          url
          name
          documentId
        }
        description
        ingredient
      }
    }
  }
`;

export { GET_CATEGORIES };
