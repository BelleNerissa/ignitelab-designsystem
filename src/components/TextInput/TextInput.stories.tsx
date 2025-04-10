import { Meta, StoryObj } from "@storybook/react";
import { Envelope, Lock } from "phosphor-react";
import { TextInput, TextInputRootProps } from "./TextInput";

//Global props
export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Input placeholder="Type your lorem inpsus" />,
    ],
  },
  argTypes: {
    asChild: { table: { disable: true } },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const emailInput: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your lorem inpsus" />,
    ],
  },
};
export const passwordInput: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Lock />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your lorem inpsus" type='password'/>,
    ],
  },
};
