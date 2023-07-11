import type { Meta, StoryObj } from "@storybook/react";
import { Button as AppButtonComponent } from "shad/components/ui/button";

const meta: Meta<typeof AppButtonComponent> = {
  title: "Components/Common/Buttons",
  component: AppButtonComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [story => <div className="mx-10 my-10">{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof AppButtonComponent>;

export const AppButton: Story = {};
