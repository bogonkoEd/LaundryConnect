// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "PROCESSING": "PROCESSING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETE": "COMPLETE"
};

const { OrderDish, Order, BasketService, Basket, User, ServiceItem, Laundromat } = initSchema(schema);

export {
  OrderDish,
  Order,
  BasketService,
  Basket,
  User,
  ServiceItem,
  Laundromat,
  OrderStatus
};