/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrderDish = /* GraphQL */ `
  mutation CreateOrderDish(
    $input: CreateOrderDishInput!
    $condition: ModelOrderDishConditionInput
  ) {
    createOrderDish(input: $input, condition: $condition) {
      id
      quantity
      orderID
      ServiceItem {
        id
        name
        description
        image_url
        price
        laundromatID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderDishServiceItemId
      __typename
    }
  }
`;
export const updateOrderDish = /* GraphQL */ `
  mutation UpdateOrderDish(
    $input: UpdateOrderDishInput!
    $condition: ModelOrderDishConditionInput
  ) {
    updateOrderDish(input: $input, condition: $condition) {
      id
      quantity
      orderID
      ServiceItem {
        id
        name
        description
        image_url
        price
        laundromatID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderDishServiceItemId
      __typename
    }
  }
`;
export const deleteOrderDish = /* GraphQL */ `
  mutation DeleteOrderDish(
    $input: DeleteOrderDishInput!
    $condition: ModelOrderDishConditionInput
  ) {
    deleteOrderDish(input: $input, condition: $condition) {
      id
      quantity
      orderID
      ServiceItem {
        id
        name
        description
        image_url
        price
        laundromatID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderDishServiceItemId
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      userID
      Laundromat {
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      subtotal
      status
      OrderDishes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderLaundromatId
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      userID
      Laundromat {
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      subtotal
      status
      OrderDishes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderLaundromatId
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      userID
      Laundromat {
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      subtotal
      status
      OrderDishes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderLaundromatId
      __typename
    }
  }
`;
export const createBasketService = /* GraphQL */ `
  mutation CreateBasketService(
    $input: CreateBasketServiceInput!
    $condition: ModelBasketServiceConditionInput
  ) {
    createBasketService(input: $input, condition: $condition) {
      id
      quantity
      ServiceItem {
        id
        name
        description
        image_url
        price
        laundromatID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      basketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketServiceServiceItemId
      __typename
    }
  }
`;
export const updateBasketService = /* GraphQL */ `
  mutation UpdateBasketService(
    $input: UpdateBasketServiceInput!
    $condition: ModelBasketServiceConditionInput
  ) {
    updateBasketService(input: $input, condition: $condition) {
      id
      quantity
      ServiceItem {
        id
        name
        description
        image_url
        price
        laundromatID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      basketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketServiceServiceItemId
      __typename
    }
  }
`;
export const deleteBasketService = /* GraphQL */ `
  mutation DeleteBasketService(
    $input: DeleteBasketServiceInput!
    $condition: ModelBasketServiceConditionInput
  ) {
    deleteBasketService(input: $input, condition: $condition) {
      id
      quantity
      ServiceItem {
        id
        name
        description
        image_url
        price
        laundromatID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      basketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketServiceServiceItemId
      __typename
    }
  }
`;
export const createBasket = /* GraphQL */ `
  mutation CreateBasket(
    $input: CreateBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    createBasket(input: $input, condition: $condition) {
      id
      BasketServices {
        nextToken
        startedAt
        __typename
      }
      userID
      laundromatID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateBasket = /* GraphQL */ `
  mutation UpdateBasket(
    $input: UpdateBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    updateBasket(input: $input, condition: $condition) {
      id
      BasketServices {
        nextToken
        startedAt
        __typename
      }
      userID
      laundromatID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteBasket = /* GraphQL */ `
  mutation DeleteBasket(
    $input: DeleteBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    deleteBasket(input: $input, condition: $condition) {
      id
      BasketServices {
        nextToken
        startedAt
        __typename
      }
      userID
      laundromatID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      address
      lat
      lng
      Orders {
        nextToken
        startedAt
        __typename
      }
      Baskets {
        nextToken
        startedAt
        __typename
      }
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      address
      lat
      lng
      Orders {
        nextToken
        startedAt
        __typename
      }
      Baskets {
        nextToken
        startedAt
        __typename
      }
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      address
      lat
      lng
      Orders {
        nextToken
        startedAt
        __typename
      }
      Baskets {
        nextToken
        startedAt
        __typename
      }
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
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
      _version
      _deleted
      _lastChangedAt
      __typename
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
      _version
      _deleted
      _lastChangedAt
      __typename
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
      _version
      _deleted
      _lastChangedAt
      __typename
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
      Baskets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
      Baskets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
      Baskets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
