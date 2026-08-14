import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-360 px-5 sm:px-7 lg:px-10 xl:px-12 ${className}`}
    >
      {children}
    </div>
  );
}