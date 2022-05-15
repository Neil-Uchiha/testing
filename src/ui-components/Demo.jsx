/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Demo(props) {
  const { order, overrides, ...rest } = props;
  return (
    <Flex
      gap="17px"
      direction="column"
      width="352px"
      height="116px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="15px 24px 15px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Demo")}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="25px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="312px"
        height="28px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={order?.OrderNUmber}
        {...getOverrideProps(overrides, "Order Number")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="25px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="310px"
        height="37px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={order?.TaskName}
        {...getOverrideProps(overrides, "Order Name")}
      ></Text>
    </Flex>
  );
}
