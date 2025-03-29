import React, { FC, PropsWithChildren } from "react";
import "@/app/ui/globals.css";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="es">
      <head>
        <title>Next Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-amber-300">{children}</body>
    </html>
  );
};

export default RootLayout;
