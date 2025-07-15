import { HeroSection } from "@/components/hero-section-1";
import RadialOrbitalTimelineClient from "@/components/RadialOrbitalTimelineClient";
import SectionWithMockup from "@/components/section-with-mockup";
import { BeamsBackground } from "@/components/ui/beams-background";




  const exampleData1 = {
    title: (
        <>
          Biographie professionnelle
          <br />
          Développeur Fullstack
        </>
    ),
    description: (
        <>
            Je suis un développeur fullstack de 26 ans passionné par le développement web, 
            la création de solutions numériques innovantes et l’univers de la technologie en général.
            Titulaire d’une Licence en Informatique, Micro-électronique et Télécommunication (IMT) obtenue
            à l’Université Privée UTT Loko à Abidjan, j’ai acquis une solide base technique aussi bien en 
            électronique qu’en programmation. Cette formation pluridisciplinaire m’a permis de développer 
            une approche rigoureuse et polyvalente des systèmes informatiques modernes.
           
            Mon intérêt s’est rapidement orienté vers le développement web, où j’ai trouvé un espace créatif 
            pour transformer des idées en applications concrètes. J’ai effectué un stage de 6 mois chez Protika 
            en tant que développeur web, où j’ai contribué à la conception et à l’amélioration de plateformes 
            digitales, renforçant ainsi mes compétences en front-end et back-end.
          

            Par ailleurs, mon expérience d’infographe chez Booste pendant 1 an m’a permis de développer une 
            sensibilité au design et à l’ergonomie, des qualités que j’intègre pleinement dans mes projets web 
            pour garantir des interfaces à la fois esthétiques et fonctionnelles.

            
            Aujourd’hui, je maîtrise des outils et technologies comme React.js, Next.js, Node.js, Express, Prisma, 
            ainsi que HTML/CSS, TailwindCSS et Git, que j’utilise pour créer des applications performantes, responsives 
            et centrées utilisateur.
            Déterminé, curieux et toujours prêt à apprendre, je suis à la recherche de projets stimulants où je pourrai 
            mettre mes compétences au service d’une vision ambitieuse.
        </>
    ),
    primaryImageSrc: '/474520787_2071003936681233_4429196265124272983_n.jpg',
    secondaryImageSrc: '',
};

//donnee pour les competences



export default async function Home() {

  const res = await fetch(`${process.env.API_URL}/api/profile`);
  const data = await res.json();
  return (
    <div >
      <main>
        <HeroSection/>
         <SectionWithMockup
            title={exampleData1.title}
            description={exampleData1.description}
            primaryImageSrc={exampleData1.primaryImageSrc}
            secondaryImageSrc={exampleData1.secondaryImageSrc}
        />
         <RadialOrbitalTimelineClient timelineData={data[0].skills} />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
