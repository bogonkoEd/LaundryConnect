import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Laundromat = LazyLoading extends LazyLoadingDisabled ? EagerLaundromat : LazyLaundromat

export declare const Laundromat: (new (init: ModelInit<Laundromat>) => Laundromat) & {
  copyOf(source: Laundromat, mutator: (draft: MutableModel<Laundromat>) => MutableModel<Laundromat> | void): Laundromat;
}