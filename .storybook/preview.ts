import type { Preview } from "@storybook/react";
import "app/globals.css";
import "assets/styles/main.scss";

const BREAKPOINTS_INT = {
  ["xs [mobile]"]: 375,
  ["sm [Tablet]"]: 600,
  ["md [Tablet Landscape]"]: 900,
  ["lg [Desktop]"]: 1440,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 6.5) * 10}vh`,
        },
      },
    ];
  }),
);

// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props: any) => (
//     <OriginalNextImage
//       {...props}
//       unoptimized
//     />
//   ),
// });

const preview: Preview = {
  globalTypes: {
    darkMode: {
      defaultValue: true,
      stylePreview: true,
    },
    className: {
      defaultValue: "",
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    viewport: { viewports: customViewports, defaultViewport: "lg [Desktop]" },
    layout: "fullscreen",
    backgrounds: {
      default: "light",
      values: [
        {
          name: "dark",
          value: "#111",
          // value: "#161c2d",
        },
        {
          name: "light",
          value: "#f9f9f9",
        },
      ],
    },
  },
};

export default preview;
