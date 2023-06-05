import type { Meta, StoryObj } from "@storybook/react";
import ButtonsComponent from "components/common/Buttons/Buttons";

const meta: Meta<typeof ButtonsComponent> = {
  title: "Components/Common/Buttons",
  component: ButtonsComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ButtonsComponent>;

export const BaseButton: Story = {
  args: {
    btnText: "Start",
    backgroundColor: "coral",
  },
};
