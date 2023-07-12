import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "lib/utils";
import Image from "next/image";

const buttonVariants = cva(
  "flex items-center justify-center rounded text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-sbPrimaryGreen text-sbWhite hover:bg-sbGreen-primaryDark",
        primary:
          "bg-sbPrimaryGreen text-sbWhite hover:bg-sbGreen-primaryDark focus:border-2 focus:border-solid focus:border-sbGreen-primaryDark",
        error:
          "bg-sbError text-sbWhite hover:bg-sbError-dark focus:border-2 focus:border-solid focus:border-sbError-dark",
      },
      size: {
        default: "min-w-[117px] max-w-[117px] min-h-[35px] max-h-[35px] rounded px-[10px]",
        sm: "min-w-[100px] max-w-[100px] min-h-[32px] max-h-[32px] rounded px-[10px]",
        md: "min-w-[105px] max-w-[105px] min-h-[33px] max-h-[33px] rounded px-[10px]",
        lg: "min-w-[117px] max-w-[117px] min-h-[35px] max-h-[35px] rounded px-[10px]",
        xl: "min-w-[149px] max-w-[149px] min-h-[50px] max-h-[50px] rounded px-[10px]",
      },
      outlined: {
        default: "border-0",
        primary:
          "border border-solid border-sbPrimaryGreen bg-transparent text-sbGreen hover:border-sbGreen-primaryDark hover:text-sbGreen-primaryDark hover:bg-sbGreen-light focus:border-2",
        secondary:
          "border border-solid border-sbBlack text-sbBlack bg-transparent hover:bg-sbGreen-light focus:border-2",
        success:
          "border border-solid border-sbSuccess text-sbSuccess bg-transparent hover:text-sbSuccess-dark hover:border-sbSuccess-dark hover:bg-sb-success-light focus:border-2",
        error:
          "border border-solid border-sbError text-sbError bg-transparent hover:text-sbError-dark hover:border-sbError-dark hover:bg-sbError-light focus:border-2",
        none: "border-0",
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
  icon?: JSX.Element | null;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, outlined, asChild = false, text, icon, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    console.log(icon);

    return (
      <Comp className={cn(buttonVariants({ variant, size, outlined, className }))} ref={ref} {...props}>
        {/* {Icon && <span className="min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]">{Icon}</span>} */}
        <span>{text}</span>
        {/* <GoogleIcon /> */}
        <Image src="assets/images/icon/icon_google.svg" width={24} height={24} alt="icon" />
        {/* <img src="src/assets/images/icon/icon_google.svg" alt="" /> */}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
