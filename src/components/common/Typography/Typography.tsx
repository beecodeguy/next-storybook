export const Responsive = [
  { className: "hl-h1-bold", name: "h1 (Bold)" },
  { className: "hl-h2-bold", name: "h2 (Bold)" },
  { className: "hl-h3-bold", name: "h3 (Bold)" },
  { className: "hl-h4-bold", name: "h4 (Bold)" },
  { className: "hl-h1", name: "h1" },
  { className: "hl-h2", name: "h2" },
  { className: "hl-h3", name: "h3" },
  { className: "hl-h4", name: "h4" },
  { className: "hl-body-bold", name: "Body (medium/p)" },
  { className: "hl-body-1", name: "Body (Regular/H1)" },
  { className: "hl-body-2", name: "Body (Regular/H2)" },
  { className: "hl-body-3", name: "Body (Regular/H3)" },
  { className: "hl-body-4", name: "Body (Regular/H4)" },
  { className: "hl-body-small", name: "Body (Regular/P)" },
];
export const BasicFont = ({ name, className }: { name: string; className: string }) => {
  return (
    <div className={`font-wrapper ${className} flex justify-between items-start gap-5 border-b p-3`}>
      <span className="min-w-max text-sbBlack">{name}</span>
      <span className="text-sbBlack">Lorem ipsum dolor sit amet</span>
    </div>
  );
};

const Typography = () => {
  return (
    <div className="sb-typography-container flex flex-col items-start justify-start gap-2">
      <h1>Responsive Fonts</h1>
      <small>To see the Responsiveness, adjust the size of the screen</small>
      <div className="fonts-container flex- flex-col gap-2 items-start justify-start">
        {Responsive.map(item => (
          <BasicFont {...item} key={item.className} />
        ))}
      </div>
    </div>
  );
};

export default Typography;
