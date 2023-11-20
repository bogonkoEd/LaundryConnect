/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getServiceItem = /* GraphQL */ `
  query GetServiceItem($id: ID!) {
    getServiceItem(id: $id) {
      id
      name
      description
      image_url
      price
      laundromatID
      createdAt
      updatedAt
    }
  }
`;
export const listServiceItems = /* GraphQL */ `
  query ListServiceItems(
    $filter: ModelServiceItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServiceItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image_url
        price
        laundromatID
        createdAt
        updatedAt
        _deleted
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncServiceItems = /* GraphQL */ `
  query SyncServiceItems(
    $filter: ModelServiceItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServiceItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        image_url
        price
        laundromatID
        createdAt
        updatedAt
        _deleted
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const serviceItemsByLaundromatID = /* GraphQL */ `
  query ServiceItemsByLaundromatID(
    $laundromatID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelServiceItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    serviceItemsByLaundromatID(
      laundromatID: $laundromatID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        image_url
        price
        laundromatID
        createdAt
        updatedAt
        _deleted
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getLaundromat = /* GraphQL */ `
  query GetLaundromat($id: ID!) {
    getLaundromat(id: $id) {
      id
      name
      address
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      lat
      lng
      image_url
      Services {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLaundromats = /* GraphQL */ `
  query ListLaundromats(
    $filter: ModelLaundromatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLaundromats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        lat
        lng
        image_url
        createdAt
        updatedAt
        _deleted
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncLaundromats = /* GraphQL */ `
  query SyncLaundromats(
    $filter: ModelLaundromatFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLaundromats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        address
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        lat
        lng
        image_url
        createdAt
        updatedAt
        _deleted
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
