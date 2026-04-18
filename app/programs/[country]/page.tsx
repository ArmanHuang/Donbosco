import ProgramSection from "@/components/sections/programSection";
import { programsData } from "@/data/program";

export default async function Page({params,}: {  params: Promise<{ country: string }>;
}) {
  const { country } = await params;

  const data = programsData[country.toLowerCase()];

  if (!data) {
    return <div>Country not found: {country}</div>;
  }

  return <ProgramSection data={data} />;
}