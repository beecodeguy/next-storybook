export const Responsive = [
  { className: "hl-h1-bold", name: "h1 bold" },
  { className: "hl-h2-bold", name: "h2 bold" },
  { className: "hl-h3-bold", name: "h3 bold" },
  { className: "hl-h4-bold", name: "h4 bold" },
  { className: "hl-h1", name: "h1" },
  { className: "hl-h2", name: "h2" },
  { className: "hl-h3", name: "h3" },
  { className: "hl-h4", name: "h4" },
  { className: "hl-body-small", name: "Body small" },
];
export const BasicFont = ({ name, className }: { name: string; className: string }) => {
  return (
    <div className={`font-wrapper ${className}`}>
      <span>{name}</span>
      <span>Lorem ipsum dolor sit amet</span>
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
