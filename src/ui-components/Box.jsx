/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Box(props) {
  const { ordertable, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="255px"
      height="82px"
      justifyContent="space-between"
      overflow="hidden"
      position="relative"
      padding="9px 15px 9px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Box")}
    >
      <Flex
        gap="0"
        direction="row"
        width="223px"
        height="23px"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="127px"
          height="27px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={ordertable?.OrderNUmber}
          {...getOverrideProps(overrides, "Order Number")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="right"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="96px"
          height="27px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={ordertable?.Time}
          {...getOverrideProps(overrides, "Time")}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        height="27px"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 3")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="127px"
          height="27px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={ordertable?.TaskName}
          {...getOverrideProps(overrides, "Task Name")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="right"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="96px"
          height="27px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={ordertable?.Date}
          {...getOverrideProps(overrides, "Date")}
        ></Text>
      </Flex>
    </Flex>
  );
}
