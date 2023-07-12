import styles from "app/page.module.css";
import { GoogleIcon } from "assets/images/icon";
import ThemeSwitch from "components/common/ThemeSwitch/ThemeSwitch";
import Image from "next/image";
import { Input } from "shad/components/ui/input";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-center text-3xl underline">All the pages here</h1>
      <ThemeSwitch />
      <Input placeholder="from shadcn/ui (Type here...)" />
      <GoogleIcon />
      <Image src="assets/images/icon/icon_google.svg" width={24} height={24} alt="icon" />
      <Image src="/public/time-cat.jpg" width={250} height={250} alt="icon" />
    </main>
  );
}
