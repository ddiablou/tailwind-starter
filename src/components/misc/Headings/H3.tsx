import { ReactNode } from "react";
import cx from "@client/lib/cx";

function H3({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cx(className, "text-xl md:text-2xl font-medium md:font-bold")}
    >
      {children}
    </h3>
  );
}

export default H3;
