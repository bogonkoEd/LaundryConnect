/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrderDish = /* GraphQL */ `
  subscription OnCreateOrderDish(
    $filter: ModelSubscriptionOrderDishFilterInput
  ) {
    onCreateOrderDish(filter: $filter) {
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
export const onUpdateOrderDish = /* GraphQL */ `
  subscription OnUpdateOrderDish(
    $filter: ModelSubscriptionOrderDishFilterInput
  ) {
    onUpdateOrderDish(filter: $filter) {
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
export const onDeleteOrderDish = /* GraphQL */ `
  subscription OnDeleteOrderDish(
    $filter: ModelSubscriptionOrderDishFilterInput
  ) {
    onDeleteOrderDish(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateBasketService = /* GraphQL */ `
  subscription OnCreateBasketService(
    $filter: ModelSubscriptionBasketServiceFilterInput
  ) {
    onCreateBasketService(filter: $filter) {
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
export const onUpdateBasketService = /* GraphQL */ `
  subscription OnUpdateBasketService(
    $filter: ModelSubscriptionBasketServiceFilterInput
  ) {
    onUpdateBasketService(filter: $filter) {
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
export const onDeleteBasketService = /* GraphQL */ `
  subscription OnDeleteBasketService(
    $filter: ModelSubscriptionBasketServiceFilterInput
  ) {
    onDeleteBasketService(filter: $filter) {
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
export const onCreateBasket = /* GraphQL */ `
  subscription OnCreateBasket($filter: ModelSubscriptionBasketFilterInput) {
    onCreateBasket(filter: $filter) {
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
export const onUpdateBasket = /* GraphQL */ `
  subscription OnUpdateBasket($filter: ModelSubscriptionBasketFilterInput) {
    onUpdateBasket(filter: $filter) {
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
export const onDeleteBasket = /* GraphQL */ `
  subscription OnDeleteBasket($filter: ModelSubscriptionBasketFilterInput) {
    onDeleteBasket(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
      _version
      _deleted
      _lastChangedAt
      __typename
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
      _version
      _deleted
      _lastChangedAt
      __typename
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
      _version
      _deleted
      _lastChangedAt
      __typename
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
