import Head from "next/head";
import { useEffect } from "react";
export default function redirect() {
  useEffect(() => {
    window.location.assign("https://discord.gg/XB4xEBsEHp");
  });
  return (
    <Head>
      <title>Lina Hall Discord</title>
    </Head>
  );
}
