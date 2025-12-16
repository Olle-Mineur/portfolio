import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { Card, CardGrid } from "@/components/card/card";

export const metadata: Metadata = {
  title: "Resume",
  description: "Olle Mineur's resume",
};

interface knowledgeList {
  name: string;
  technologies: technologies[];
}

interface technologies {
  name: string;
  image?: string;
  darkImage?: string;
}

function getStudyYear() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Adding 1 to get the current month

  const isBeforeAugust = currentMonth < 8;
  if (isBeforeAugust) {
    if (currentYear - 2021 > 4) {
      return "final year";
    } else if (currentYear - 2021 == 3) {
      return "3rd";
    }
    return currentYear - 2021 + "th";
  } else {
    if (currentYear - 2021 + 1 > 4) {
      return "final year";
    } else if (currentYear - 2021 + 1 == 3) {
      return "3rd";
    }
    return currentYear - 2021 + 1 + "th";
  }
}

export default function Page() {
  const favoriteProgrammingLanguages: technologies[] = [
    {
      name: "TypeScript",
      image: "https://skillicons.dev/icons?i=ts&theme=light",
      darkImage: "https://skillicons.dev/icons?i=ts&theme=dark",
    },
    {
      name: "Python",
      image: "https://skillicons.dev/icons?i=python&theme=light",
      darkImage: "https://skillicons.dev/icons?i=python&theme=dark",
    },
  ];

  const otherProgramming: technologies[] = [
    {
      name: "JavaScript",
      image: "https://skillicons.dev/icons?i=js&theme=light",
      darkImage: "https://skillicons.dev/icons?i=js&theme=dark",
    },
    {
      name: "Java",
      image: "https://skillicons.dev/icons?i=java&theme=light",
      darkImage: "https://skillicons.dev/icons?i=java&theme=dark",
    },
    {
      name: "C",
      image: "https://skillicons.dev/icons?i=c&theme=light",
      darkImage: "https://skillicons.dev/icons?i=c&theme=dark",
    },
    {
      name: "C++",
      image: "https://skillicons.dev/icons?i=cpp&theme=light",
      darkImage: "https://skillicons.dev/icons?i=cpp&theme=dark",
    },
    {
      name: "C#",
      image: "https://skillicons.dev/icons?i=cs&theme=light",
      darkImage: "https://skillicons.dev/icons?i=cs&theme=dark",
    },
    {
      name: "SQL",
      image: "https://skillicons.dev/icons?i=postgres&theme=light",
      darkImage: "https://skillicons.dev/icons?i=postgres&theme=dark",
    },
    {
      name: "Matlab",
      image: "https://skillicons.dev/icons?i=matlab&theme=light",
      darkImage: "https://skillicons.dev/icons?i=matlab&theme=dark",
    },
    {
      name: "VHDL",
    },
  ];

  const clientKnowledge: technologies[] = [
    {
      name: "React",
      image: "https://skillicons.dev/icons?i=react&theme=light",
      darkImage: "https://skillicons.dev/icons?i=react&theme=dark",
    },
    {
      name: "Next.js",
      image: "https://skillicons.dev/icons?i=nextjs&theme=light",
      darkImage: "https://skillicons.dev/icons?i=nextjs&theme=dark",
    },
    {
      name: "Astro",
      image: "https://skillicons.dev/icons?i=astro&theme=light",
      darkImage: "https://skillicons.dev/icons?i=astro&theme=dark",
    },
    {
      name: "Gatsby",
      image: "https://skillicons.dev/icons?i=gatsby&theme=light",
      darkImage: "https://skillicons.dev/icons?i=gatsby&theme=dark",
    },
    {
      name: "Tailwind",
      image: "https://skillicons.dev/icons?i=tailwind&theme=light",
      darkImage: "https://skillicons.dev/icons?i=tailwind&theme=dark",
    },
    {
      name: "Figma",
      image: "https://skillicons.dev/icons?i=figma&theme=light",
      darkImage: "https://skillicons.dev/icons?i=figma&theme=dark",
    },
    {
      name: "CSS",
      image: "https://skillicons.dev/icons?i=css&theme=light",
      darkImage: "https://skillicons.dev/icons?i=css&theme=dark",
    },
    {
      name: "HTML",
      image: "https://skillicons.dev/icons?i=html&theme=light",
      darkImage: "https://skillicons.dev/icons?i=html&theme=dark",
    },
    {
      name: "Wordpress",
      image: "https://skillicons.dev/icons?i=wordpress&theme=light",
      darkImage: "https://skillicons.dev/icons?i=wordpress&theme=dark",
    },
  ];

  const serverKnowledge: technologies[] = [
    {
      name: "Node.js",
      image: "https://skillicons.dev/icons?i=nodejs&theme=light",
      darkImage: "https://skillicons.dev/icons?i=nodejs&theme=dark",
    },
    {
      name: "Django",
      image: "https://skillicons.dev/icons?i=django&theme=light",
      darkImage: "https://skillicons.dev/icons?i=django&theme=dark",
    },
    {
      name: "Selenium",
      image: "https://skillicons.dev/icons?i=selenium&theme=light",
      darkImage: "https://skillicons.dev/icons?i=selenium&theme=dark",
    },
    {
      name: "Appwrite",
      image: "https://skillicons.dev/icons?i=appwrite&theme=light",
      darkImage: "https://skillicons.dev/icons?i=appwrite&theme=dark",
    },
    {
      name: "Docker",
      image: "https://skillicons.dev/icons?i=docker&theme=light",
      darkImage: "https://skillicons.dev/icons?i=docker&theme=dark",
    },
    {
      name: "Nginx",
      image: "https://skillicons.dev/icons?i=nginx&theme=light",
      darkImage: "https://skillicons.dev/icons?i=nginx&theme=dark",
    },
    {
      name: "Cloudflare",
      image: "https://skillicons.dev/icons?i=cloudflare&theme=light",
      darkImage: "https://skillicons.dev/icons?i=cloudflare&theme=dark",
    },
    {
      name: "Linux",
      image: "https://skillicons.dev/icons?i=linux&theme=light",
      darkImage: "https://skillicons.dev/icons?i=linux&theme=dark",
    },
    {
      name: "Windows",
      image: "https://skillicons.dev/icons?i=windows&theme=light",
      darkImage: "https://skillicons.dev/icons?i=windows&theme=dark",
    },
  ];

  const knowledgeGroups: knowledgeList[] = [
    {
      name: "Client knowledge",
      technologies: clientKnowledge,
    },
    {
      name: "Server knowledge",
      technologies: serverKnowledge,
    },
    {
      name: "Other programming languages",
      technologies: otherProgramming,
    },
  ];

  return (
    <main className="font-mono my-6">
      <header className="w-full max-w-5xl mx-auto flex flex-col gap-4 rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-md p-6">
        <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
          <Image
            className="circular-image border border-slate-200/70 dark:border-slate-700/60 shadow-md"
            src="/profile_picture.jpg"
            alt="Picture of Olle Mineur"
            width={130}
            height={130}
            priority
          />

          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              Olle Mineur
            </h1>
            <p className="text-sm text-slate-700 dark:text-slate-200">
              Student @ Linköping University
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-600 dark:text-slate-300">
                Favorite languages:
              </span>

              {favoriteProgrammingLanguages.map((technology, techIndex) =>
                technology.image ? (
                  <div key={techIndex} className="group relative">
                    <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900/90 px-2 py-1 text-[10px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {technology.name}
                    </span>

                    <picture className="chip">
                      <source srcSet={technology.darkImage} media="(prefers-color-scheme: dark)" />
                      <Image
                        src={technology.image}
                        alt={technology.name}
                        width={22}
                        height={22}
                        priority
                      />
                    </picture>
                  </div>
                ) : (
                  <span key={techIndex} className="chip text-xs font-semibold">
                    {technology.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-wrap flex-col">
        <div className="my-2">
          <div className="flex flex-col my-2">
            <h1 className="font-bold">Skills</h1>
            {knowledgeGroups.map((knowledgeGroup, groupIndex) => (
              <div className="m-2" key={groupIndex}>
                <p className="font-bold text-sm">{knowledgeGroup.name}:</p>
                <div className="flex flex-row flex-wrap gap-x-8 items-center align-middle content-center">
                  {knowledgeGroup.technologies.map((technology, techIndex) =>
                    technology.image ? (
                      <div key={techIndex} className="group relative my-1 w-[52px] h-[52px]">
                        <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900/90 px-2 py-1 text-[10px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                          {technology.name}
                        </span>

                        <picture className="chip w-full h-full justify-center p-0">
                          <source srcSet={technology.darkImage} media="(prefers-color-scheme: dark)" />
                          <Image
                            className="mx-auto"
                            src={technology.image}
                            alt={technology.name}
                            width={30}
                            height={30}
                            priority
                          />
                        </picture>
                      </div>
                    ) : (
                      <p key={techIndex} className="text-sm font-bold">
                        {technology.name}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-4">
          <h1 className="font-bold ">Work Experience</h1>
          <hr />
          <CardGrid>
            <Card>
              <h2 className="font-bold">Summer intern @ Opera</h2>
              <p className="text-sm font-bold mb-2">
                Worked: June 2025 - August 2025
              </p>
              <p className="text-sm">
                Working as a summer intern at Opera. The internship was a
                project to make a Ai Chatbot for users to use. The chatbot was
                based on a knowledge base that already existed, that we connect
                OpenAi&apos;s API to. If the user does not get a good answer
                from the knowledge base, the chatbot will report the issue Jira
                so a human can look at it.
              </p>
              <p className="text-sm my-2">
                Technologies: Astro, React, TypeScript, OpenAi API, Jira Rest
                API.
              </p>
            </Card>
            <Card>
              <h2 className="font-bold">
                Student Employee @{" "}
                <span lang="sv" className="italic-text">
                  Trafikverket
                </span>
              </h2>
              <p className="text-sm font-bold mb-2">
                Worked: January 2025 - Present
              </p>
              <p className="text-sm">
                Working as a student employee at Trafikverket. The work is to
                develop proof of concepts and small applications to help
                Trafikverket&apos;s employees. At my office we are mostly
                students that work with different projects and we are from
                different programs at Linköping University, so we can help each
                other with different knowledge.
              </p>
              <div className="text-sm my-2">
                <p>Projects I have worked with:</p>
                <ul className="list-disc list-inside">
                  <li>
                    A web application for inventory management at the office.
                    The application is made with Angular and .NET backend. I
                    converted this project to Docker Compose based instead of
                    Kubernetes, to make it easier to run.
                  </li>
                  <li>
                    A web application for registering visitors at the office. We
                    get many visitors because of the uniqueness of our work, so
                    we wanted to make it easier for the employees to register
                    their visitors. The application is made with React and a
                    simple Express backend.
                  </li>
                </ul>
              </div>
              <p className="text-sm my-2">
                Technologies: Angular, .Net, React, Express, Docker
              </p>
            </Card>
            <Card>
              <h2 className="font-bold">
                Team leader @ Linköpings universitet
              </h2>
              <p className="text-sm font-bold mb-2">
                Worked: June 2024 - July 2024
              </p>
              <p className="text-sm">
                Team leader of a 4 group team at{" "}
                <span lang="sv" className="italic-text">
                  Digitaliseringsavdelningen
                </span>
                , within the{" "}
                <span lang="sv" className="italic-text">
                  Digitala resursenheten
                </span>{" "}
                team. The work involves installing and maintaining computers in
                various halls across all campuses of Linköping University. I was
                responsible for the team and the work we did. I also had to
                report to the project manager and make sure everything was done
                correctly.
              </p>
            </Card>
            <Card>
              <h2 className="font-bold">
                Student Employee @ Linköpings universitet
              </h2>
              <p className="text-sm font-bold">
                Worked: November 2023 - Present
              </p>
              <p className="text-sm">
                Student assistant at the{" "}
                <span lang="sv" className="italic-text">
                  Digitaliseringsavdelningen
                </span>
                , within the{" "}
                <span lang="sv" className="italic-text">
                  Digitala resursenheten
                </span>{" "}
                team. The work involves installing and maintaining computers in
                various halls across all campuses of Linköping University. I
                work in a team of approximately 10 people to cover all the work.
              </p>
            </Card>
            <Card>
              <h2 className="font-bold">Web developer @ Rum Fastighet</h2>
              <p className="text-sm font-bold mb-2">
                Worked: Summer 2023 - Present
              </p>
              <p className="text-sm">
                Building a website for Rum Fastighet to show their properties
                and to make it easier for people to contact them.
              </p>
              <p className="text-sm my-2">
                Technologies: Next.js, TypeScript, Tailwind CSS, Appwrite,
                Cloudflare CDN
              </p>
              <Link
                href="https://rumfastighet.se/"
                className="text-sm blue-link"
              >
                Link to website
              </Link>
            </Card>
            <Card>
              <h2 className="font-bold">
                Freelance Web developer @ Oskarshamns Gästhamn
              </h2>
              <p className="text-sm font-bold mb-2">Worked: 2021</p>
              <p className="text-sm">
                At the end of High School I got asked to make a website for the
                local guest harbour. The website was supposed to give
                information to guests. Made in only HTML and CSS. Focused on
                simplicity and ease of use.
              </p>
              <p className="text-sm my-2">
                Technologies: HTML, CSS, Cloudflare CDN
              </p>
              <Link
                href="https://oskarshamnsgasthamn.se/"
                className="text-sm blue-link"
              >
                Link to website
              </Link>
            </Card>
            <Card>
              <h2 className="font-bold">
                Property Manager / Carpenter @ Rum Fastighet
              </h2>
              <p className="text-sm font-bold mb-2">
                Worked: Summers between 2017 - 2023
              </p>
              <p className="text-sm">
                Worked with taking care of the properties owned by Rum
                Fastighet. This included everything from cleaning to fixing
                things that were broken.
                <br /> Also helped with carpentry work when needed, for example
                when renovating apartments or smaller things like changing
                windows.
              </p>
            </Card>
          </CardGrid>
        </div>
        <div className="my-4">
          <h1 className="font-bold ">Student Organizations</h1>
          <hr />
          <CardGrid>
            <Card>
              <h2 className="font-bold">Webmaster @ Datateknologsektionen</h2>
              <p className="text-sm font-bold">Worked: April 2024 - Present</p>
              <p className="text-sm">
                Stayed as Webmaster for another year, had a lot of fun and
                wanted to continue working with the website. Working with the
                website for the Computer Science and Engineering student union
                at Linköping University. Also taking care of the servers and
                other technical things. This year I wanted to make our
                development process more efficient. More Docker and more
                automation. Also started to work more agile and with sprints.
              </p>
              <p className="text-sm mt-1">
                Technologies: React, Gatsby, Django, Docker, Nginx, Wordpress,
                Cloudflare CDN
              </p>
              <Link
                href="https://d-sektionen.se/"
                className="text-sm blue-link"
              >
                Link to website
              </Link>
            </Card>
            <Card>
              <h2 className="font-bold">Webmaster @ Datateknologsektionen</h2>
              <p className="text-sm font-bold">
                Worked: April 2023 - June 2024
              </p>
              <p className="text-sm">
                Working with the website for the Computer Science and
                Engineering student union at Linköping University. Also taking
                care of the servers and other technical things.
              </p>
              <p className="text-sm mt-1">
                Technologies: React, Gatsby, Django, Docker, Nginx, Wordpress,
                Cloudflare CDN
              </p>
              <Link
                href="https://d-sektionen.se/"
                className="text-sm blue-link"
              >
                Link to website
              </Link>
            </Card>
            <Card>
              <h2 className="font-bold">ElWerk @ D-LAN</h2>
              <p className="text-sm font-bold">
                Worked: October 2022 - June 2023
              </p>
              <p className="text-sm">
                Working with the electricity at D-LAN, a LAN party in Linköping.
                Also took care of logistics at the event.
              </p>
              <Link href="https://d-lan.se/" className="text-sm blue-link">
                Link to website
              </Link>
            </Card>
            <Card>
              <h2 className="font-bold">Chef & Bartender @ VilleValla Pub</h2>
              <p className="text-sm font-bold">Worked: March 2024 - Present</p>
              <p className="text-sm">
                Started in the kitchen at VilleValla Pub, a student pub in
                Linköping. Wanted to try something new and decided to start at
                VilleValla. After a while I also started to work as a bartender.
              </p>
              <Link
                href="https://www.villevallapub.se/"
                className="text-sm blue-link"
              >
                Link to website
              </Link>
            </Card>
          </CardGrid>
        </div>
        <div className="my-4">
          <h1 className="font-bold">Education</h1>
          <hr />
          <CardGrid>
            <Card>
              <h2 className="font-bold">
                Master of Science in Computer Science and Engineering @
                Linköping University
              </h2>
              <p className="text-sm font-bold">2021 - Present</p>
              <p className="text-sm">
                Currently studying my {getStudyYear()} year of the program.
              </p>
              <Link
                href="https://liu.se/en/education/program/6cddd"
                className="text-sm blue-link"
              >
                Link to program
              </Link>
            </Card>
            <Card>
              <h2 className="font-bold">
                Teknikprogrammet, inriktning informations- och medieteknik @
                Oscarsgymnasiet
              </h2>
              <p className="text-sm font-bold">2018 - 2021</p>
              <p className="text-sm">
                3 year program in High School. Focused on programming and web
                development. Took extra courses in welding, CAD, and
                electricity.
              </p>
              <Link
                href="https://www.oskarshamn.se/forskola-och-utbildning/oscarsgymnasiet/program/teknikprogrammet/"
                className="text-sm blue-link"
              >
                Link to program
              </Link>
            </Card>
          </CardGrid>
        </div>
        <div className="my-4">
          <h1 className="font-bold">Spoken languages</h1>
          <div className="pl-4 my-2">
            <h2 className="font-bold">Swedish: Native</h2>
            <h2 className="font-bold">English: Fluent</h2>
            <h2 className="font-bold">German: Basic</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
