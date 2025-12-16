import type { Metadata } from 'next'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Olle Mineur\'s projects',
}

export default function Page() {
    return (
        <main className="flex flex-wrap flex-col content-center font-mono my-4">
            <div className="flex flex-row">
                <h1 className="font-bold text-left my-auto">
                    Projects
                </h1>
            </div>
            <div className="flex flex-wrap flex-col pl-4">
                <div className="my-2">
                    <h1 className="font-bold "><a href="https://github.com/Olle-Mineur/Blog" className="blue-link">Personal Blog</a></h1>
                    <div className="pl-4 my-2">
                        <p className="text-sm">
                            This is my personal blog, where I write about things I find interesting.
                        </p>
                        <p className="text-sm">
                            It is built with Next.js and Tailwind CSS. Hosted with Cloudflare Pages.
                        </p>
                        <p className="text-sm">
                            The source code can be found <a href="https://github.com/Olle-Mineur/Blog" className="blue-link">here</a>.
                        </p>
                        <p className="text-sm">
                            I made this website in 2023.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap flex-col pl-4">
                <div className="my-2">
                    <h1 className="font-bold "><a href="https://github.com/Olle-Mineur/liu-master-planner" className="blue-link">LiU Master Planner</a></h1>
                    <div className="pl-4 my-2">
                        <p className="text-sm">
                            Started a project with my friend <a href="https://github.com/CitronMelon" className="blue-link">CitroMelon</a> to make a master course planner for &quot;Civilinjörsprogram&quot; at Linköping University.
                            The goal is to remove the need for manually making a spreedsheet with all the courses, and instead have a website that can do it for you.
                            In fall 2024 we have a working scraping tool that can get all the courses from the LiU website, and we are working on the frontend.
                            Also the backend is in progress, we are using Firebase for the database and authentication. The need of authentication can be removed and instead use json-files.
                            The website is not yet live.
                        </p>
                        <p className="text-sm">
                            It is built with Next.js, Tailwind CSS and Firebase. We use Puppeteer for web scraping.
                        </p>
                        <p className="text-sm">
                            The source code can be found <a href="https://github.com/Olle-Mineur/liu-master-planner" className="blue-link">here</a>.
                        </p>
                        <p className="text-sm">
                            Started with this website in spring 2024 and is a ongoing project.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap flex-col pl-4">
                <div className="my-2">
                    <h1 className="font-bold "><a href="https://urn.kb.se/resolve?urn=urn:nbn:se:liu:diva-205566" className="blue-link">Bachelor thesis</a></h1>
                    <div className="pl-4 my-2">
                        <p className="text-sm">
                            Project with a group of 8 students at Linköping University, the goal was to make a web application to digitalize the construction industry.
                            The company Bitech was our partner and they wanted to remove the need of papers at construction sites.
                        </p>
                        <p className="text-sm">
                            The web application was made with React, Typescript, Next.js, TailwindCSS. We also used some testing frameworks like Lighthouse, Jest and Cypress.
                        </p>
                        <p className="text-sm">
                            The thesis can be found <a href="https://urn.kb.se/resolve?urn=urn:nbn:se:liu:diva-205566" className="blue-link">here</a>. Alternative <a href="/Olle_Mineur_Bachelor.pdf" className="blue-link">here as PDF</a>
                        </p>
                        <p className="text-sm">
                            The project was made in 2024.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap flex-col pl-4">
                <div className="my-2">
                    <h1 className="font-bold "><a href="https://www.rumfastighet.se/" className="blue-link">Rum Fastighet</a></h1>
                    <div className="pl-4 my-2">
                        <p className="text-sm">
                            Building a website for Rum Fastighet to show their properties and to make it easier for people to contact them.
                        </p>
                        <p className="text-sm">
                            It is built with Next.js, TypeScript, Tailwind CSS, Appwrite and Cloudflare CDN.
                        </p>
                        <p className="text-sm">
                            The source code is closed but you can visit the website <a href="https://www.rumfastighet.se/" className="blue-link">here</a>.
                        </p>
                        <p className="text-sm">
                            I started this website summer 2023 and I am still working on it.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap flex-col pl-4">
                <div className="my-2">
                    <h1 className="font-bold "><a href="https://oskarshamnsgasthamn.se/" className="blue-link">Oskarshamns Gästhamn</a></h1>
                    <div className="pl-4 my-2">
                        <p className="text-sm">
                            This is a website I made for Oskarshamns Gästhamn, a guest harbour in Oskarshamn.
                        </p>
                        <p className="text-sm">
                            It is built with HTML and CSS.
                        </p>
                        <p className="text-sm">
                            The source code is closed but you can visit the website <a href="https://oskarshamnsgasthamn.se/" className="blue-link">here</a>.
                        </p>
                        <p className="text-sm">
                            I made this website as a freelance project in 2021.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}