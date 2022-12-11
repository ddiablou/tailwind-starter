import { ReactNode } from "react";
import cx from "@client/lib/cx";

function Text({
  children,
  className,
}: {
  children: ReactNode | ReactNode[];
  className?: string;
}) {
  return (
    <span
      className={cx(
        className,
        "text-base md:text-lg leading-9 text-on-50 whitespace-pre-line break-word w-full tracking-[-.025em]"
      )}
    >
      {children}
    </span>
  );
}

export default Text;
