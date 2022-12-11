import { CSSProperties, ReactNode } from "react";
import cx from "@client/lib/cx";

function H2({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) {
  return (
    <h2
      {...props}
      className={cx(
        className,
        "font-bold text-white text-[1.875rem] !leading-[2.25rem] tracking-[-.015em]"
      )}
    >
      {children}
    </h2>
  );
}

export default H2;
