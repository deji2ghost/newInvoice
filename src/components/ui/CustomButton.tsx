// import { ThreeCircles } from "react-loader-spinner";

import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../lib/utils";


const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-orange-500 hover:bg-opacity-80 rounded-md text-white p-1 outline-none border-none shadow-md hover:translate-y-[1px] text-[#fff]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        solid: "bg-oliveBlue-400 text-customWhite-100 border-none outline-none text-[16px] rounded-[8px] py-2 px-5 hover:bg-opacity-80",
        transparent: "bg-transparent text-destructive-foreground border border-oliveBlue-500 text-oliveBlue-400 text-[16px] rounded-[8px] py-2 px-5 hover:bg-opacity-80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, children, size, ...props }, ref) => {

  return (
    <button 
    ref={ref}
    className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {/* <ThreeCircles
        visible={true}
        height="20"
        width="20"
        color="#fff"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /> */}
      {children}
    </button>
  );
})

CustomButton.displayName = "CustomButton";
export default CustomButton;
// function cva(arg0: string, arg1: { variants: { variant: { default: string; destructive: string; outline: string; secondary: string; ghost: string; link: string; solid: string; transparent: string; }; size: { default: string; sm: string; lg: string; icon: string; }; }; defaultVariants: { variant: string; size: string; }; }) {
//   throw new Error("Function not implemented.");
// }

