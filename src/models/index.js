// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ServiceItem, Laundromat } = initSchema(schema);

export {
  ServiceItem,
  Laundromat
};