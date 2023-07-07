const APP_COLORS = [
  {
    className: "",
    colorCode: "#00B04C",
    name: "Primary Green",
  },
  {
    className: "",
    colorCode: "#DA2020",
    name: "Primary Error",
  },
  {
    className: "",
    colorCode: "#131313",
    name: "Dark",
  },
  {
    className: "",
    colorCode: "#DE8317",
    name: "Warning",
  },
  {
    className: "",
    colorCode: "#0288D1",
    name: "Info",
  },
  {
    className: "",
    colorCode: "#41DB84",
    name: "Success",
  },
  {
    className: "",
    colorCode: "#6A6A6A",
    name: "Gray",
  },
  {
    className: "",
    colorCode: "#101010",
    name: "Black",
  },
  {
    className: "",
    colorCode: "linear-gradient(177deg, #00B04C 0%, #037534 100%)",
    name: "Gradient Green",
  },
  {
    className: "",
    colorCode: "linear-gradient(177deg, #DA2020 0%, #9A0B0B 100%)",
    name: "Gradient Red",
  },
];

const AppColors = ({ color }: { color: string }) => {
  const colorName = APP_COLORS.find(colorItem => colorItem.colorCode === color)?.name || "";
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="color-change-card flex flex-col w-full gap-2">
        <h3>You can see different colors change here...</h3>
        <p>
          Current Color variant: <strong style={{ color: `${color}` }}>{colorName}</strong>
        </p>
        <div
          className="color-card min-w-[150px] max-w-[150px] min-h-[150px] border border-cyaan-500 rounded-sm"
          style={{ background: `${color}` }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1>All App Colors (static)</h1>
        <div className="all-colors-container flex justify-start flex-wrap gap-2">
          {APP_COLORS.map(color => {
            return (
              <div key={color.name} className="flex flex-col items-start gap-1">
                <div
                  className={`border border-cyaan-500 rounded-sm min-w-[150px] max-w-[150px] min-h-[150px]`}
                  style={{ background: `${color.colorCode}` }}
                />
                <div className="flex flex-col gap-1">
                  <span style={{ color: `${color.colorCode}` }} className="text-sm font-bold">
                    {color.name}
                  </span>{" "}
                  <span style={{ color: `${color.colorCode}` }} className="text-sm">
                    ({color.colorCode})
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppColors;
