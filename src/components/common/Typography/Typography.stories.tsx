import type { Meta, StoryObj } from "@storybook/react";
import TypographyComponent from "components/common/Typography/Typography";

const meta: Meta<typeof TypographyComponent> = {
  title: "Components/Common/Typography",
  component: TypographyComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [story => <div className="mx-10 my-10">{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof TypographyComponent>;

export const Typography: Story = {};
