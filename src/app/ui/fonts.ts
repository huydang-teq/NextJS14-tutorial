import { Inter, Lusitana, Noto_Sans_JP } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const poppins = localFont({
  src: [
    {
      path: "../../../public/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
