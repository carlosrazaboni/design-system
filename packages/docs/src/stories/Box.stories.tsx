import { Box, BoxProps, Text } from "@ignite-ui-carlosr/react";
import type { Meta, StoryObj } from "@storybook/react";
import { P } from "storybook/internal/components";

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <Text>Box text</Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  
}