import { ComponentType } from "react";

export interface IWaringButton {
    span: string;
    icon?: ComponentType;
}

export interface IWaringsProps {
    id: string;
    icon: ComponentType;
    title: string;
    label: string;
    button?: IWaringButton;
}

export interface ToastWarningProps {
    id: string;
}