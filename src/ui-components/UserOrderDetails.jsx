/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function UserOrderDetails(props) {
  const { orderUser, userdetails, overrides, ...rest } = props;
  return (
    <View
      width="434px"
      height="188px"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(60,60,60,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="15px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "UserOrderDetails")}
    >
      <Flex
        gap="18px"
        position="absolute"
        top="22px"
        left="10px"
        direction="row"
        width="408px"
        height="45px"
        justifyContent="space-between"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 14")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          width="124px"
          height="35px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={orderUser?.OrderNUmber}
          {...getOverrideProps(overrides, "Order Number")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="right"
          display="flex"
          direction="column"
          justifyContent="center"
          width="248px"
          height="35px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={orderUser?.TaskName}
          {...getOverrideProps(overrides, "Task Number")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="25px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="401px"
        height="38px"
        position="absolute"
        top="67px"
        left="17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={orderUser?.TaskDesc}
        {...getOverrideProps(overrides, "Task Description")}
      ></Text>
      <Flex
        gap="0"
        position="absolute"
        top="105px"
        left="19px"
        direction="row"
        width="399px"
        height="33px"
        justifyContent="space-between"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 17")}
      >
        <Flex
          gap="7px"
          direction="row"
          width="187px"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          height="20px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 15mom")}
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
            justifyContent="center"
            width="67px"
            height="20px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Created by"
            {...getOverrideProps(overrides, "Created by")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="25px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            width="113px"
            height="20px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Name"
            {...getOverrideProps(overrides, "Name")}
          ></Text>
        </Flex>
        <Flex
          gap="7px"
          direction="row"
          width="187px"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          height="20px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 16miu")}
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
            justifyContent="center"
            width="67px"
            height="20px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Due Date"
            {...getOverrideProps(overrides, "Due Date")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="25px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            width="113px"
            height="20px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={orderUser?.Date}
            {...getOverrideProps(overrides, "Date")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        position="absolute"
        top="144px"
        left="19px"
        direction="row"
        width="399px"
        height="33px"
        justifyContent="space-between"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 18")}
      >
        <Flex
          gap="7px"
          direction="row"
          width="187px"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          height="20px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 15ivi")}
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
            justifyContent="center"
            width="67px"
            height="20px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sent by"
            {...getOverrideProps(overrides, "Sent by")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="25px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            width="113px"
            height="20px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={userdetails?.username}
            {...getOverrideProps(overrides, "Nameaff")}
          ></Text>
        </Flex>
        <Flex
          gap="7px"
          direction="row"
          width="187px"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          height="20px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 16cdb")}
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
            justifyContent="center"
            width="67px"
            height="20px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sent to"
            {...getOverrideProps(overrides, "Sent to")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="25px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            width="113px"
            height="20px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Name"
            {...getOverrideProps(overrides, "Namenpr")}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
