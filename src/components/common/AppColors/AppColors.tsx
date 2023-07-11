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
    name: "Gradient Dark",
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
    colorCode: "#F8A547",
    name: "Orange",
  },
  {
    className: "",
    colorCode: "#ADE8FB",
    name: "Water Blue",
  },
  {
    className: "",
    colorCode: "#D0DBFF",
    name: "Light Blue",
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

const SuccessColors = [
  {
    className: "",
    colorCode: "#41DB84",
    name: "Success (Default)",
  },
  {
    className: "",
    colorCode: "#3DC277",
    name: "Success (Dark)",
  },
  {
    className: "",
    colorCode: "#F9FFFB",
    name: "Success (Light)",
  },
];

const ErrorColors = [
  {
    className: "",
    colorCode: "#DA2020",
    name: "Error (Default)",
  },
  {
    className: "",
    colorCode: "#B11212",
    name: "Error (Dark)",
  },
  {
    className: "",
    colorCode: "#FFFCFC",
    name: "Error (Light)",
  },
];

const WarningColors = [
  {
    className: "",
    colorCode: "#DE8317",
    name: "Warning (Default)",
  },
  {
    className: "",
    colorCode: "#C97512",
    name: "Warning (Dark)",
  },
  {
    className: "",
    colorCode: "#FCF8F3",
    name: "Warning (Light)",
  },
];

const InfoColors = [
  {
    className: "",
    colorCode: "#0288D1",
    name: "Info (Default)",
  },
  {
    className: "",
    colorCode: "#05689E",
    name: "Info (Dark)",
  },
  {
    className: "",
    colorCode: "#F9FDFF",
    name: "Info (Light)",
  },
];

const GreenColors = [
  {
    className: "",
    colorCode: "#00B04C",
    name: "Greens (Default)",
  },
  {
    className: "",
    colorCode: "#FCFEFD",
    name: "Greens (5)",
  },
  {
    className: "",
    colorCode: "#EFFAF0",
    name: "Greens (20)",
  },
  {
    className: "",
    colorCode: "#E1F4EA",
    name: "Greens (40)",
  },
  {
    className: "",
    colorCode: "#032E15",
    name: "Greens (80)",
  },
  {
    className: "",
    colorCode: "#06BF56",
    name: "Greens (Dark)",
  },
  {
    className: "",
    colorCode: "#0A843F",
    name: "Greens (Primary Dark)",
  },
  {
    className: "",
    colorCode: "#009E7F",
    name: "Greens (Secondary)",
  },
  {
    className: "",
    colorCode: "#037962",
    name: "Greens (Secondary Dark)",
  },
  {
    className: "",
    colorCode: "#F2FBF6",
    name: "Greens (Light)",
  },
];

const GreyColors = [
  {
    className: "",
    colorCode: "#F9F9F9",
    name: "Grey (Default)",
  },
  {
    className: "",
    colorCode: "#ECECEC",
    name: "Grey (5)",
  },
  {
    className: "",
    colorCode: "#CFCFCF",
    name: "Grey (20)",
  },
  {
    className: "",
    colorCode: "#8E8E8E",
    name: "Grey (40)",
  },
  {
    className: "",
    colorCode: "#7D7D7D",
    name: "Grey (60)",
  },
  {
    className: "",
    colorCode: "#737577",
    name: "Grey (80)",
  },
  {
    className: "",
    colorCode: "#6A6A6A",
    name: "Grey (100)",
  },
  {
    className: "",
    colorCode: "#585858",
    name: "Grey (120)",
  },
  {
    className: "",
    colorCode: "#313334",
    name: "Grey (140)",
  },
  {
    className: "",
    colorCode: "#212121",
    name: "Grey (160)",
  },
  {
    className: "",
    colorCode: "#1B1D1D",
    name: "Grey (180)",
  },
  {
    className: "",
    colorCode: "#171717",
    name: "Grey (200)",
  },
  {
    className: "",
    colorCode: "#212121",
    name: "Grey (220)",
  },
  {
    className: "",
    colorCode: "#D7D7D7",
    name: "Grey (Primary)",
  },
  {
    className: "",
    colorCode: "#303030",
    name: "Grey (dark)",
  },
  {
    className: "",
    colorCode: "#F5F5F5",
    name: "Grey (disabled)",
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
      <div className="flex flex-col gap-2">
        <h1>Success Colors (static)</h1>
        <div className="all-colors-container flex justify-start flex-wrap gap-2">
          {SuccessColors.map(color => {
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
      <div className="flex flex-col gap-2">
        <h1>Error Colors (static)</h1>
        <div className="all-colors-container flex justify-start flex-wrap gap-2">
          {ErrorColors.map(color => {
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
      <div className="flex flex-col gap-2">
        <h1>Warning Colors (static)</h1>
        <div className="all-colors-container flex justify-start flex-wrap gap-2">
          {WarningColors.map(color => {
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
      <div className="flex flex-col gap-2">
        <h1>Info Colors (static)</h1>
        <div className="all-colors-container flex justify-start flex-wrap gap-2">
          {InfoColors.map(color => {
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
      <div className="flex flex-col gap-2">
        <h1>Grey Colors (static)</h1>
        <div className="all-colors-container flex justify-start flex-wrap gap-2">
          {GreyColors.map(color => {
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
      <div className="flex flex-col gap-2">
        <h1>Green Colors (static)</h1>
        <div className="all-colors-container flex justify-start flex-wrap gap-2">
          {GreenColors.map(color => {
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
