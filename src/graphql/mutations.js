/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createServiceItem = /* GraphQL */ `
  mutation CreateServiceItem(
    $input: CreateServiceItemInput!
    $condition: ModelServiceItemConditionInput
  ) {
    createServiceItem(input: $input, condition: $condition) {
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
export const updateServiceItem = /* GraphQL */ `
  mutation UpdateServiceItem(
    $input: UpdateServiceItemInput!
    $condition: ModelServiceItemConditionInput
  ) {
    updateServiceItem(input: $input, condition: $condition) {
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
export const deleteServiceItem = /* GraphQL */ `
  mutation DeleteServiceItem(
    $input: DeleteServiceItemInput!
    $condition: ModelServiceItemConditionInput
  ) {
    deleteServiceItem(input: $input, condition: $condition) {
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
export const createLaundromat = /* GraphQL */ `
  mutation CreateLaundromat(
    $input: CreateLaundromatInput!
    $condition: ModelLaundromatConditionInput
  ) {
    createLaundromat(input: $input, condition: $condition) {
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
export const updateLaundromat = /* GraphQL */ `
  mutation UpdateLaundromat(
    $input: UpdateLaundromatInput!
    $condition: ModelLaundromatConditionInput
  ) {
    updateLaundromat(input: $input, condition: $condition) {
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
export const deleteLaundromat = /* GraphQL */ `
  mutation DeleteLaundromat(
    $input: DeleteLaundromatInput!
    $condition: ModelLaundromatConditionInput
  ) {
    deleteLaundromat(input: $input, condition: $condition) {
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
