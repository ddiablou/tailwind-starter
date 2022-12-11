import { IconLoader2, TablerIcon } from "@tabler/icons";
import { useRouter } from "next/router";
import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";
import cx from "@client/lib/cx";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: TablerIcon;
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "outline";
  children?: ReactNode;
  href?: string;
}

export default function Button({
  isLoading,
  variant = "primary",
  href,
  ...props
}: ButtonProps): JSX.Element {
  const router = useRouter();

  return (
    <button
      onClick={
        props.onClick ? props.onClick : href ? () => router.push(href) : null
      }
      {...props}
      className={cx(
        "py-2 px-4 flex items-center justify-center rounded-lg transition-all duration-200 font-[500] outline-none disabled:opacity-60 disabled:cursor-not-allowed",
        variant === "primary" &&
          "bg-primary-500 hover:!bg-opacity-70 text-bear focus:ring-2 ring-primary-400",
        variant === "secondary" &&
          "bg-white/5 hover:bg-white/10 text-white/70 focus:ring-2 ring-primary-400",
        variant === "outline" &&
          "bg-transparent border-2 border-on-50/30 hover:border-on-50 text-white/70 hover:text-white",
        isLoading && "pointer-events-none",
        props.className
      )}
    >
      {isLoading ? (
        <IconLoader2 className="animate-spin" />
      ) : (
        <>
          {props.icon && (
            <props.icon
              className={cx("opacity-70", props.children && "mr-1 w-5 h-5")}
            />
          )}
          {props.children}
        </>
      )}
    </button>
  );
}
