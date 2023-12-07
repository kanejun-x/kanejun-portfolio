import Image from "next/image";
import { Work } from "@/components/Work";
import { listWorksData } from "@/libs/microcms";

export default async function Home() {
  const works = await listWorksData();
  return (
    <main className="relative">
      <div className="fixed left-0 top-0">
        <Image
          className="h-screen w-screen object-cover"
          src={"/IMG_5409.jpeg"}
          alt="background"
          width={4032}
          height={2849}
          priority
        ></Image>
      </div>

      <div className="absolute top-0 flex flex-row justify-start overflow-hidden">
        <div className="grow">
          <header className="w-screen bg-gradient-to-tr from-black/50 via-transparent to-transparent">
            <div className="mx-auto flex h-60 max-w-5xl flex-col justify-end whitespace-nowrap px-6 py-8 text-white drop-shadow-md md:px-12">
              <h1 className="z-10 text-5xl font-black">Jun Kaneda</h1>
              <p className="z-10 pt-1 text-lg font-bold">
                Web Application Developer
              </p>
            </div>
          </header>

          <section className="w-screen bg-[#f6f6f6] dark:bg-[#0f0f0f]">
            <div className="mx-auto max-w-5xl px-6 pb-16 pt-3 md:px-12 md:pt-8">
              <h2 className="py-12 text-center text-3xl font-extrabold">
                My code works on ...
              </h2>

              <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                {works.map((work, index) => (
                  <Work key={index} workData={work}></Work>
                ))}
              </div>
            </div>
          </section>

          <div className="w-screen bg-white/80 shadow-sm backdrop-blur dark:bg-black/80">
            <section className="relative mx-auto w-full max-w-5xl px-6 pb-16 pt-3 md:px-12 md:pt-8">
              <h2 className="py-12 text-center text-3xl font-extrabold">
                About Me
              </h2>

              <div className="text-sm">
                <p className="mt-6">
                  I am a web application developer, proficient in the technical
                  design and implementation of web applications. I have over
                  four years of work experience in Japan, focusing on the
                  design, administration, and development of eCommerce systems
                  within the retail sector. In addition to my primary role, I
                  actively pursued freelance and volunteer opportunities to
                  continually enhance my development skills.
                </p>
                <p className="mt-2">
                  Possessing a level-headed and responsible personality, I am
                  well-suited for a developer role. My upbringing, education,
                  and diverse work background have equipped me with
                  comprehensive knowledge spanning from infrastructure to
                  front-end development. This broad understanding, coupled with
                  a high viewpoint and critical thinking, enables me to quickly
                  adapt to various projects, collaborate effectively with
                  members in diverse roles and play a pivotal role.
                </p>
              </div>

              <h3 className="pb-2 pt-6 text-xl font-extrabold">Key Skills</h3>
              <ul className="ml-4 list-outside list-disc text-sm">
                <li>
                  Jamstack Web Development (TypeScript, Vue.js, React, Next.js,
                  Tailwind CSS, Contentful, Stripe, etc..)
                </li>
                <li>
                  Amazon Web Service (Especially Lambda, DynamoDB, S3,
                  CloudFront, etc..)
                </li>
              </ul>

              <h3 className="pb-2 pt-6 text-xl font-extrabold">
                Work Experience
              </h3>
              <ul className="ml-4 list-outside list-disc text-sm">
                <li>Freelance Programmer (2019-2023)</li>
                <li>
                  System Analyst and Application Systems Engineer, Accenture
                  Japan Ltd, Japan (2019-2023)
                </li>
                <li>
                  Assistant of Programming School for Kids, MIMAMORUME CO.,LTD.
                  , Japan (2017-2019)
                </li>
              </ul>

              <h3 className="pb-2 pt-6 text-xl font-extrabold">Education</h3>
              <ul className="ml-4 list-outside list-disc text-sm">
                <li>
                  Master of Engineering, Computer Networking, Osaka University,
                  Japan (2017-2019)
                </li>
                <li>
                  Bachelor of Engineering, Computer Science, Osaka University,
                  Japan (2013-2017)
                </li>
              </ul>

              <h3 className="pb-2 pt-6 text-xl font-extrabold">
                Certification
              </h3>
              <ul className="ml-4 list-outside list-disc text-sm">
                <li>AWS Certified Cloud Practitioner</li>
                <li>ITIL Foundation</li>
                <li>Applied Information Technology Engineer (Japan)</li>
              </ul>

              <h3 className="pb-2 pt-6 text-xl font-extrabold">Language</h3>
              <ul className="ml-4 list-outside list-disc text-sm">
                <li>Japanese</li>
                <li>English</li>
              </ul>
            </section>

            <footer>
              <div className="mx-auto max-w-5xl px-6 pb-16 pt-3 text-center text-xs md:px-12 md:pt-8">
                © 2023 Jun Kaneda
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
