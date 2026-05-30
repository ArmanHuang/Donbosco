import Header from "@/components/UI/header";
import Footer from "@/components/sections/footer";
import OurProgramsHero from "@/components/sections/ourProgramHero";

export default async function Page({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;

  return (
    <>
      <Header />
      <OurProgramsHero defaultCountry={country} />
      <Footer />
    </>
  );
}