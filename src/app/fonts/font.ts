import localFont from "next/font/local";

export const telegraf = localFont({
  src: [
    {
      path: "./PPTelegraf-Ultralight.otf",
      weight: "200",
      style: "light",
    },
    {
      path: "./PPTelegraf-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PPTelegraf-Ultrabold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});
