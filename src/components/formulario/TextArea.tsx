import React from "react";

function TextArea({
  children,
  name,
  value,
  handleChange,
  rows,
  cols,
}: {
  children?: React.ReactNode;
  name: string;
  value: string;
  handleChange: any;
  rows?: number;
  cols?: number;
}) {
  return (
    <textarea
      className="bg-zinc-800 p-2 text-white focus:outline-rose-600 outline-none mb-3"
      name={name}
      value={value}
      onChange={handleChange}
      required
      rows={rows == undefined ? 5 : rows}
      cols={cols}
    >
      {children}
    </textarea>
  );
}

export default TextArea;
