import AboutHero from '@/components/sections/aboutHero'
import Header from '@/components/UI/header';
import AboutNetwork from '@/components/sections/aboutNetwork';
import AboutTeam from '@/components/sections/aboutTeam';
import Footer from '@/components/sections/footer';


export default function AboutPage() {
  return (
   <div>
     <Header></Header>
    <AboutHero></AboutHero>
    <AboutNetwork></AboutNetwork>
    <AboutTeam></AboutTeam>
    <Footer></Footer>
   </div>
  );
}