import { gql } from "apollo-server";

export default gql`
  type Product {
    id: Int!
    productName: String!
    productEngName: String
    price: Int!
    discountRate: Int!
    thumbnail: String
    detailPage1: String
    detailPage2: String
    sizes: [Size]
    colors: [Color]
    createdAt: String!
    updatedAt: String!
    orders: [Order]
    orderItems: [OrderItem]
    productSliderPictures: [ProductSliderPicture]
  }
  type ProductSliderPicture {
    id: Int!
    product: Product!
    productId: Int!
    order: Int
    productSliderPicture: String!
    createdAt: String!
    updatedAt: String!
  }

  type Size {
    id: Int!
    size: String!
    createdAt: String!
    updatedAt: String!
    products: [Product]
  }
  type Color {
    id: Int!
    color: String!
    createdAt: String!
    updatedAt: String!
    products: [Product]
  }
`;
