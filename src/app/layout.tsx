import ThemeProviderRoot from "app/ThemeProviderRoot";
import "app/globals.css";
import "assets/styles/main.scss";
import StoreProvider from "core/hocs/StoreProvider";

export const metadata = {
  title: "Sharebigya",
  description: "Complete solution to Nepal Stock Market Analytics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body>
        <StoreProvider>
          <ThemeProviderRoot>{children}</ThemeProviderRoot>
        </StoreProvider>
      </body>
    </html>
  );
}
