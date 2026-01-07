import { ComponentType } from "react";

export interface IWaringButton {
    span: string;
    icon?: ComponentType;
    action?: () => void;
}

export interface IWaringsProps {
    id: string;
    icon: ComponentType;
    title: string;
    label: string;
    button?: IWaringButton;
}

export interface IToastWarningProps {
    id: string;
}