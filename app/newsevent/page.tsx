import NewsGridSection from "@/components/sections/newsGridSection";
import Header from "@/components/UI/header";
import SocialMediaSection from "@/components/sections/socialMediaSection";
import Footer  from "@/components/sections/footer";

export default function NewsPage() {
  return (
    <main>
      <Header></Header>
      <NewsGridSection />
      <SocialMediaSection></SocialMediaSection>
      <Footer></Footer>
    </main>
  );
}