import HomeHeader from "@/components/HomeHeader";
import { getDictionary } from "@/lib/translate";
import { LanguagesKeysType } from "@/lib/types";

export default async function Home({params}:{params:Promise<{lang:string}>}) {
  const lang = (await params).lang as LanguagesKeysType;

  return (
    <>
      <HomeHeader lang={lang}/>
      <main className="lg:w-[90%] md:w-[92%] w-[98%] mx-auto">

      </main>

    </>
  );
}
