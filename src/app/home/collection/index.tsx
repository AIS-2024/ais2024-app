/** @format */

import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

const Collection = () => {
  return (
    <>
      <Text>Collectionページ</Text>
      <Link href="./CollectionDetail">CollectionDetailページに移動</Link>
    </>
  );
};

export default Collection;
