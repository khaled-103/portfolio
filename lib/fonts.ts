import {  Noto_Kufi_Arabic, Poppins } from "next/font/google";

export const popions = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const kufi = Noto_Kufi_Arabic({
  subsets:["arabic"],
});