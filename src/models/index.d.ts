import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum OrderStatus {
  NEW = "NEW",
  PROCESSING = "PROCESSING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETE = "COMPLETE"
}



type EagerOrderDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly orderID: string;
  readonly ServiceItem?: ServiceItem | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDishServiceItemId?: string | null;
}

type LazyOrderDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly orderID: string;
  readonly ServiceItem: AsyncItem<ServiceItem | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDishServiceItemId?: string | null;
}

export declare type OrderDish = LazyLoading extends LazyLoadingDisabled ? EagerOrderDish : LazyOrderDish

export declare const OrderDish: (new (init: ModelInit<OrderDish>) => OrderDish) & {
  copyOf(source: OrderDish, mutator: (draft: MutableModel<OrderDish>) => MutableModel<OrderDish> | void): OrderDish;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly Laundromat?: Laundromat | null;
  readonly subtotal?: number | null;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly OrderDishes?: (OrderDish | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderLaundromatId?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly Laundromat: AsyncItem<Laundromat | undefined>;
  readonly subtotal?: number | null;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly OrderDishes: AsyncCollection<OrderDish>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderLaundromatId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerBasketService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity?: number | null;
  readonly ServiceItem?: ServiceItem | null;
  readonly basketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketServiceServiceItemId?: string | null;
}

type LazyBasketService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity?: number | null;
  readonly ServiceItem: AsyncItem<ServiceItem | undefined>;
  readonly basketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketServiceServiceItemId?: string | null;
}

export declare type BasketService = LazyLoading extends LazyLoadingDisabled ? EagerBasketService : LazyBasketService

export declare const BasketService: (new (init: ModelInit<BasketService>) => BasketService) & {
  copyOf(source: BasketService, mutator: (draft: MutableModel<BasketService>) => MutableModel<BasketService> | void): BasketService;
}

type EagerBasket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BasketServices?: (BasketService | null)[] | null;
  readonly userID: string;
  readonly laundromatID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBasket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BasketServices: AsyncCollection<BasketService>;
  readonly userID: string;
  readonly laundromatID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Basket = LazyLoading extends LazyLoadingDisabled ? EagerBasket : LazyBasket

export declare const Basket: (new (init: ModelInit<Basket>) => Basket) & {
  copyOf(source: Basket, mutator: (draft: MutableModel<Basket>) => MutableModel<Basket> | void): Basket;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address?: string | null;
  readonly lat: number;
  readonly lng: number;
  readonly Orders?: (Order | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address?: string | null;
  readonly lat: number;
  readonly lng: number;
  readonly Orders: AsyncCollection<Order>;
  readonly Baskets: AsyncCollection<Basket>;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerServiceItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image_url?: string | null;
  readonly price: number;
  readonly laundromatID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServiceItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image_url?: string | null;
  readonly price: number;
  readonly laundromatID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ServiceItem = LazyLoading extends LazyLoadingDisabled ? EagerServiceItem : LazyServiceItem

export declare const ServiceItem: (new (init: ModelInit<ServiceItem>) => ServiceItem) & {
  copyOf(source: ServiceItem, mutator: (draft: MutableModel<ServiceItem>) => MutableModel<ServiceItem> | void): ServiceItem;
}

type EagerLaundromat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Laundromat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime?: number | null;
  readonly maxDeliveryTime?: number | null;
  readonly rating?: number | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly image_url: string;
  readonly Services?: (ServiceItem | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLaundromat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Laundromat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime?: number | null;
  readonly maxDeliveryTime?: number | null;
  readonly rating?: number | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly image_url: string;
  readonly Services: AsyncCollection<ServiceItem>;
  readonly Baskets: AsyncCollection<Basket>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Laundromat = LazyLoading extends LazyLoadingDisabled ? EagerLaundromat : LazyLaundromat

export declare const Laundromat: (new (init: ModelInit<Laundromat>) => Laundromat) & {
  copyOf(source: Laundromat, mutator: (draft: MutableModel<Laundromat>) => MutableModel<Laundromat> | void): Laundromat;
}