import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String
    username: String
    email: String
    password: String
    phone: String
    size: String
    age: String
    gender: String
    creditCard: String
    expireDate: String
    cvcNumber: String
    isSuperUser: Boolean!
    d_address: String
    d_detailAddress: String
    d_zipCode: String
    totalPurchase: Int
    shippingAddresses: [ShippingAddress]
    order: [Order]
    createdAt: String!
    updatedAt: String!
  }

  type ShippingAddress {
    id: Int!
    user: User!
    addressName: String!
    shippingName: String!
    shippingPhone: String!
    shippingAddress: String!
    shippingDetailAddress: String!
    shippingZipCode: String!
    createdAt: String!
    updatedAt: String!
  }
`;
