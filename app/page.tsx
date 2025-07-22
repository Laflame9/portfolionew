import { BGPattern } from "@/components/bg-pattern";
import { HeroSection } from "@/components/hero-section-1";
import RadialOrbitalTimelineClient from "@/components/RadialOrbitalTimelineClient";
import SectionWithMockup from "@/components/section-with-mockup";
import { Footer } from "@/components/ui/footer";
import { GradientCard } from "@/components/ui/gradient-card";
import { LampContainer } from "@/components/ui/lamp";
import TitreAnimed from "@/components/ui/titre-animed";
import { Github, Hexagon, Linkedin } from "lucide-react";




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
interface Project{
   id:number;
  title:string;
  description: string;
  githubUrl ?:  string;
  liveUrl ? :   string;
  imageUrl?  :  string;
  createdAt :  Date    
  updatedAt :  Date
}


export default async function Home() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`);
  const data = await res.json();

  const getproject = await fetch(`${process.env.API_URL}/api/project`);
  const resProject:Project[] = await getproject.json();
  return (
    <div >
      <main>
        <section className="h-screen">
          <HeroSection/>
          <BGPattern variant="grid" mask="fade-edges"/>
        </section>
        <section>
          <SectionWithMockup
            title={exampleData1.title}
            description={exampleData1.description}
            primaryImageSrc={exampleData1.primaryImageSrc}
            secondaryImageSrc={exampleData1.secondaryImageSrc}
        />
        </section>
        <section>
          <RadialOrbitalTimelineClient timelineData={data[0].skills} />
        </section> 
        <section>
          <LampContainer>
            <TitreAnimed firsttitle="De l’idée au code " />
    
          </LampContainer>
          <div className="w-full flex gap-20 justify-center flex-wrap">
            {resProject.map((item)=>
              <GradientCard key={item.id} titre={item.title} content={item.description} href={item.liveUrl} />
            )}
          </div>
        </section>
      </main>
      <footer className="md:h-100 w-full flex flex-col justify-center
        xs:h-130">
        <Footer
        logo={
  <svg
  viewBox="0 0 150 60"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="h-8 w-auto "
>
  <defs>
    <linearGradient
      id="logo-gradient-purple"
      x1="0"
      y1="0"
      x2="150"
      y2="0"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0%" stopColor="#A78BFA" />   {/* Light Purple */}
      <stop offset="100%" stopColor="#7C3AED" /> {/* Deep Violet */}
    </linearGradient>
  </defs>

  <text
    x="50%"
    y="50%"
    dominantBaseline="middle"
    textAnchor="middle"
    fontSize="48"
    fontWeight="bold"
    fontFamily="monospace"
    fill="url(#logo-gradient-purple)"
  >
    {'</>'}
  </text>
</svg>



        }
        brandName="YvanDev"
        socialLinks={[
          {
            icon: <Github className="h-5 w-5 text-purple-600" />,
            href: "https://github.com/Laflame9",
            label: "GitHub",
          },
          
          {
            icon: <Linkedin className="h-5 w-5 text-purple-600" />,
            href: "https://www.linkedin.com/in/yvann-diomande-4306b1284/",
            label: "Linkedin",
          },
        ]}
        mainLinks={[
          { href: "#", label: "Acceuil" },
          { href: "#", label: "A Propos" },
          { href: "#", label: "Compétences" },
          { href: "#", label: "Contact" },
        ]}
        legalLinks={[
          { href: "yvandiomande06@gmail.com", label: "yvandiomande06@gmail.com" },
          { href: "", label: "07 99 03 65 42" },
        ]}
        copyright={{
          text: "© 2025 Yvann Diomandé",
          license: "All rights reserved",
        }}
      />
      </footer>
    </div>
  );
}
