import { useState } from "react";
import Head from "next/head";

import { MockChat } from "@/components";
import { baseOverideCss } from "@/helpers";

export default function Index() {
  const [css] = useState(baseOverideCss);

  return (
    <>
      <Head>
        <style>{css}</style>
      </Head>
      <div className="bg"></div>
      <div className="Index">
        <div className="Index__left">
          <MockChat />
        </div>
        <div className="Index__right">TODO: form to custom here</div>
      </div>
    </>
  );
}
