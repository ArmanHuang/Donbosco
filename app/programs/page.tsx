import Header from "@/components/UI/header";
import Footer from "@/components/sections/footer";
import OurProgramsHero from "@/components/sections/ourProgramHero";

export default function Page({
  params,
}: {
  params: { country: string };
}) {
  return (
    <>
      <Header />
      <OurProgramsHero defaultCountry={params.country} />
      <Footer />
    </>
  );
}