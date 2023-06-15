import React from "react";

function LayoutInput({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between text-xl ">{children}</div>
  );
}

export default LayoutInput;
