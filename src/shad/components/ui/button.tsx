import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-sbPrimaryGreen text-sbWhite hover:bg-sbGreen-primaryDark",
        primary: "bg-sbPrimaryGreen text-sbWhite hover:bg-sbGreen-primaryDark",
        error: "bg-sbError text-sbWhite hover:bg-sbError-dark",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-w-[117px] max-w-[117px] min-h-[35px] max-h-[35px] rounded px-[10px]",
        sm: "min-w-[100px] max-w-[100px] min-h-[32px] max-h-[32px] rounded px-[10px]",
        md: "min-w-[105px] max-w-[105px] min-h-[33px] max-h-[33px] rounded px-[10px]",
        lg: "min-w-[117px] max-w-[117px] min-h-[35px] max-h-[35px] rounded px-[10px]",
        xl: "min-w-[149px] max-w-[149px] min-h-[50px] max-h-[50px] rounded px-[10px]",
      },
      outlined: {
        default: "",
        primary: "border-solid",
        secondary: "border-solid",
        error: "border-solid",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      outlined: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  text: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, text, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, outlined, className }))} ref={ref} {...props}>
        <span>{text}</span>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
