/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateServiceItem = /* GraphQL */ `
  subscription OnCreateServiceItem(
    $filter: ModelSubscriptionServiceItemFilterInput
  ) {
    onCreateServiceItem(filter: $filter) {
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
export const onUpdateServiceItem = /* GraphQL */ `
  subscription OnUpdateServiceItem(
    $filter: ModelSubscriptionServiceItemFilterInput
  ) {
    onUpdateServiceItem(filter: $filter) {
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
export const onDeleteServiceItem = /* GraphQL */ `
  subscription OnDeleteServiceItem(
    $filter: ModelSubscriptionServiceItemFilterInput
  ) {
    onDeleteServiceItem(filter: $filter) {
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
export const onCreateLaundromat = /* GraphQL */ `
  subscription OnCreateLaundromat(
    $filter: ModelSubscriptionLaundromatFilterInput
  ) {
    onCreateLaundromat(filter: $filter) {
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
export const onUpdateLaundromat = /* GraphQL */ `
  subscription OnUpdateLaundromat(
    $filter: ModelSubscriptionLaundromatFilterInput
  ) {
    onUpdateLaundromat(filter: $filter) {
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
export const onDeleteLaundromat = /* GraphQL */ `
  subscription OnDeleteLaundromat(
    $filter: ModelSubscriptionLaundromatFilterInput
  ) {
    onDeleteLaundromat(filter: $filter) {
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
