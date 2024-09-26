import Head from "next/head";
import { useState } from "react";

import { ColorPicker, MockChat } from "@/components";
import { mainOverideCss, defaultCssValue, importOverideCss } from "@/helpers";

export default function Index() {
  const [textboxBgColor, setTextboxBgColor] = useState(
    defaultCssValue["--textbox-bg-color"],
  );
  const [textboxBorderColor, setTextboxBorderColor] = useState(
    defaultCssValue["--textbox-border-color"],
  );

  const cssValue = `
    :root{
      --textbox-bg-color: ${textboxBgColor};
      --textbox-border-color: ${textboxBorderColor};
    }
  `;

  return (
    <>
      <Head>
        <style>
          {importOverideCss}
          {cssValue}
          {mainOverideCss}
        </style>
      </Head>
      <div className="bg"></div>
      <div className="Index">
        <div className="Index__left">
          <MockChat />
        </div>
        <div className="Index__right">
          <div>
            <ColorPicker
              label="Textbox bg"
              value={textboxBgColor}
              setValue={setTextboxBgColor}
            />
            <ColorPicker
              label="Textbox border"
              value={textboxBorderColor}
              setValue={setTextboxBorderColor}
            />
          </div>
        </div>
      </div>
    </>
  );
}
