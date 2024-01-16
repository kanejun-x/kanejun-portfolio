import Image from "next/image";
import { Work } from "@/components/Work";
import { listWorksData, getAboutMeData } from "@/libs/microcms";

export default async function Home() {
  const works = await listWorksData();
  const aboutMe = await getAboutMeData();

  const aboutMeList: { label: string; items: string[] }[] = [
    { label: "Key Skills", items: aboutMe.skills.map((skill) => skill.item) },
    {
      label: "Work Experience",
      items: aboutMe.workExperience.map((exper) => exper.item),
    },
    { label: "Education", items: aboutMe.education.map((edu) => edu.item) },
    {
      label: "Certification",
      items: aboutMe.certification.map((cert) => cert.item),
    },
    {
      label: "Language",
      items: aboutMe.language.map((lang) => lang.item),
    },
  ];
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
              <h1 className="z-10 text-5xl font-black">{aboutMe.name}</h1>
              <p className="z-10 pt-1 text-lg font-bold">{aboutMe.title}</p>
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

              <p className="mt-6 text-sm">{aboutMe.introduction}</p>

              {aboutMeList.map((aboutMeItems, index) => (
                <div key={index}>
                  <h3 className="pb-2 pt-6 text-xl font-extrabold">
                    {aboutMeItems.label}
                  </h3>
                  <ul className="ml-4 list-outside list-disc text-sm">
                    {aboutMeItems.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <footer>
              <div className="mx-auto max-w-5xl px-6 pb-16 pt-3 text-center text-xs md:px-12 md:pt-8">
                {`© 2023-2024 ${aboutMe.name}`}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
