import Head from "next/head";
import { useEffect } from "react";
export default function redirect() {
  useEffect(() => {
    window.location.assign("https://discord.gg/F7kUMfH");
  });
  return (
    <Head>
      <title>Lina Hall Discord</title>
    </Head>
  );
}
