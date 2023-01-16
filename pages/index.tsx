import Head from "next/head";
import { PointOfInterest } from "@/components/point-of-interest";
import { ReactionComponent } from "@/components/reaction-component";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Head>
        <title>Crew3 Test Steve Brown</title>
        <meta name="description" content="Crew 3 Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-12">
        <div className="container mx-auto flex items-center justify-center h-full p-4">
          <div>
            <div className="text-center">
              <h1 className="text-4xl  mb-4">Crew3 Test</h1>
              <p>By Steve Brown</p>
              <p className="text-center">
                Tap or click the point of interest below to comment
              </p>
            </div>

            <PointOfInterest onClick={() => setActive(!active)} />
            <ReactionComponent active={active} />
          </div>
        </div>
      </main>
    </>
  );
}
