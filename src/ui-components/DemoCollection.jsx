/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { OrderTable } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Demo from "./Demo";
import { Collection } from "@aws-amplify/ui-react";
export default function DemoCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: OrderTable,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      isSearchable={true}
      searchPlaceholder="Search..."
      itemsPerPage={1}
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "DemoCollection")}
    >
      {(item, index) => (
        <Demo
          order={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Demo>
      )}
    </Collection>
  );
}
