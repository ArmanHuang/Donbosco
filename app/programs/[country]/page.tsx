import Header from "@/components/UI/header";
import Footer from "@/components/sections/footer";
import ProgramSection from "@/components/sections/programSection";

async function getPrograms(country: string) {
  const res = await fetch(
    `http://localhost:3000/api/programs/${country}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export default async function Page({
  params,
}: {
  params: { country: string };
}) {
  const data = await getPrograms(params.country);

  return (
    <div>
      <Header />

      {/* 🔥 LANGSUNG PAKE SECTION */}
      <ProgramSection data={data} />

      <Footer />
    </div>
  );
}