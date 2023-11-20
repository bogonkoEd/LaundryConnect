// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, ServiceItem, Laundromat } = initSchema(schema);

export {
  User,
  ServiceItem,
  Laundromat
};