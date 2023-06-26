import React from "react";

function Label({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <label id={id} className="text-2xl text-rose-600">
      {children}
    </label>
  );
}

export default Label;
