import type { Meta, StoryObj } from "@storybook/react";
import AppColorsComponent from "components/common/AppColors/AppColors";

const meta: Meta<typeof AppColorsComponent> = {
  title: "Components/Common/Colors",
  component: AppColorsComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [story => <div className="mx-10 my-10">{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof AppColorsComponent>;

export const AppColors: Story = {};

AppColors.args = {
  color: "#00B04C",
};
