/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { OrderTable } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type DemoProps = React.PropsWithChildren<Partial<FlexProps> & {
    order?: OrderTable;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Demo(props: DemoProps): React.ReactElement;
