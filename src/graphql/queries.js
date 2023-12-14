/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrderDish = /* GraphQL */ `
  query GetOrderDish($id: ID!) {
    getOrderDish(id: $id) {
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

        _deleted

        __typename
      }
      createdAt
      updatedAt
      _deleted
      orderDishServiceItemId
      __typename
    }
  }
`;
export const listOrderDishes = /* GraphQL */ `
  query ListOrderDishes(
    $filter: ModelOrderDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantity
        orderID
        createdAt
        updatedAt

        _deleted

        orderDishServiceItemId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncOrderDishes = /* GraphQL */ `
  query SyncOrderDishes(
    $filter: ModelOrderDishFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderDishes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        quantity
        orderID
        createdAt
        updatedAt

        _deleted

        orderDishServiceItemId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const orderDishesByOrderID = /* GraphQL */ `
  query OrderDishesByOrderID(
    $orderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderDishesByOrderID(
      orderID: $orderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        quantity
        orderID
        createdAt
        updatedAt

        _deleted

        orderDishServiceItemId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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

        _deleted

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
      _deleted
      orderLaundromatId
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        subtotal
        status
        createdAt
        updatedAt

        _deleted

        orderLaundromatId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        subtotal
        status
        createdAt
        updatedAt

        _deleted

        orderLaundromatId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const ordersByUserID = /* GraphQL */ `
  query OrdersByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        subtotal
        status
        createdAt
        updatedAt

        _deleted

        orderLaundromatId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBasketService = /* GraphQL */ `
  query GetBasketService($id: ID!) {
    getBasketService(id: $id) {
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

        _deleted

        __typename
      }
      basketID
      createdAt
      updatedAt
      _deleted
      basketServiceServiceItemId
      __typename
    }
  }
`;
export const listBasketServices = /* GraphQL */ `
  query ListBasketServices(
    $filter: ModelBasketServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBasketServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantity
        basketID
        createdAt
        updatedAt

        _deleted

        basketServiceServiceItemId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBasketServices = /* GraphQL */ `
  query SyncBasketServices(
    $filter: ModelBasketServiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBasketServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        quantity
        basketID
        createdAt
        updatedAt

        _deleted

        basketServiceServiceItemId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const basketServicesByBasketID = /* GraphQL */ `
  query BasketServicesByBasketID(
    $basketID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBasketServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    basketServicesByBasketID(
      basketID: $basketID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        quantity
        basketID
        createdAt
        updatedAt

        _deleted

        basketServiceServiceItemId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBasket = /* GraphQL */ `
  query GetBasket($id: ID!) {
    getBasket(id: $id) {
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
      _deleted
      __typename
    }
  }
`;
export const listBaskets = /* GraphQL */ `
  query ListBaskets(
    $filter: ModelBasketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBaskets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
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
export const syncBaskets = /* GraphQL */ `
  query SyncBaskets(
    $filter: ModelBasketFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBaskets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
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
export const basketsByUserID = /* GraphQL */ `
  query BasketsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBasketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    basketsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
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
export const basketsByLaundromatID = /* GraphQL */ `
  query BasketsByLaundromatID(
    $laundromatID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBasketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    basketsByLaundromatID(
      laundromatID: $laundromatID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
      _deleted
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        lat
        lng
        sub
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
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        address
        lat
        lng
        sub
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
      _deleted
      __typename
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
      Baskets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _deleted
      __typename
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
