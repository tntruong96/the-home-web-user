import { gql } from "graphql-request";

export const GET_DISHES_QUERY = gql`
  query Dishes($locale: I18NLocaleCode, $filters: DishFiltersInput) {
    dishes(locale: $locale, filters: $filters) {
      documentId
      name
      price
      thumbnail {
        url
        name
        documentId
      }
      region
      slug
      ingredient
    }
  }
`;
