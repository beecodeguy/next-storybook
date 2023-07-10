import type { Meta, StoryObj } from "@storybook/react";
import TypographyComponent from "components/common/Typography/Typography";

const meta: Meta<typeof TypographyComponent> = {
  title: "Components/Common/Typography",
  component: TypographyComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [story => <div className="mx-10 my-10">{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof TypographyComponent>;

export const Typography: Story = {};
