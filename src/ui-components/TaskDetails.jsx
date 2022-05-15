/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function TaskDetails(props) {
  const { orderUserDetails, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="375px"
      height="173px"
      justifyContent="space-between"
      overflow="hidden"
      position="relative"
      borderRadius="10px"
      padding="20px 10px 20px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "TaskDetails")}
    >
      <Flex
        gap="17px"
        direction="column"
        width="353px"
        height="133px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 11")}
      >
        <Flex
          gap="43px"
          direction="row"
          width="344px"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 6")}
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
            width="93px"
            height="27px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={orderUserDetails?.OrderNUmber}
            {...getOverrideProps(overrides, "Order Number")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="25px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="221px"
            height="27px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={orderUserDetails?.TaskName}
            {...getOverrideProps(overrides, "Task Name")}
          ></Text>
        </Flex>
        <Flex
          gap="43px"
          direction="row"
          width="353px"
          height="39px"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 7")}
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
            width="71px"
            height="39px"
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
            width="166px"
            height="39px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Name"
            {...getOverrideProps(overrides, "Name")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="25px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="center"
            width="96px"
            height="39px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Due Date"
            {...getOverrideProps(overrides, "Due Date")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="348px"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 10")}
        >
          <Flex
            gap="1px"
            direction="row"
            width="173px"
            justifyContent="space-between"
            alignItems="flex-start"
            shrink="0"
            height="26px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 8")}
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
              width="52px"
              height="26px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Send to "
              {...getOverrideProps(overrides, "Send to")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="25px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="center"
              width="124px"
              height="26px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Name"
              {...getOverrideProps(overrides, "Nametbq")}
            ></Text>
          </Flex>
          <Flex
            gap="1px"
            direction="row"
            width="154px"
            justifyContent="space-between"
            alignItems="flex-start"
            shrink="0"
            height="26px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 9")}
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
              width="48px"
              height="26px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Send by"
              {...getOverrideProps(overrides, "Send by")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="25px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="center"
              width="101px"
              height="26px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Name"
              {...getOverrideProps(overrides, "Nameuim")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
