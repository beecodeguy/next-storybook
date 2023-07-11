import type { Meta, StoryObj } from "@storybook/react";
import { GoogleIcon } from "assets/images/icon";
import { Button as ButtonsComponent } from "shad/components/ui/button";

const meta: Meta<typeof ButtonsComponent> = {
  title: "Components/Common/Buttons",
  component: ButtonsComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [story => <div className="mx-10 my-10">{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof ButtonsComponent>;

export const BaseButton: Story = {
  args: {
    text: "Base Button",
    icon: <GoogleIcon />,
  },
};
