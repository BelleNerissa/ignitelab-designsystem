import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  child: ReactNode;
  asChild?: boolean;
}

export function Button({ child, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-cian-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cian-300 focus:ring-2 ring-cian-500"
      )}
    >
      {child}
    </Comp>
  );
}
