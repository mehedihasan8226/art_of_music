"use client"

import { StickyScroll } from "./ui/sticky-scroll-reveal";

const MusicSchoolContent = [
  {
    title: "Bias Against Non-Classical Genres",
    description: "Many music schools prioritize classical music training, often dismissing genres like jazz, hip-hop, or electronic music. Students interested in modern or culturally diverse genres may feel alienated. Their work may be undervalued or not taken seriously by faculty. This creates an uneven playing field in recognition and opportunity. As a result, musical diversity is stifled within the institution.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Non-Classical Genres
      </div>
    ),
  },
  {
    title: "Gender Stereotypes in Instrument Choices",
    description: "Female students are often discouraged from playing certain instruments like drums or brass. These instruments are still stereotypically seen as 'masculine'. This limits creative expression and reinforces outdated norms. Male students may also be judged for choosing 'feminine' instruments like the harp. Such bias affects confidence and access to performance opportunities.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Gender Stereotypes
      </div>
    ),
  },
  {
    title: "Racial Disparities in Admissions",
    description: "Students from minority backgrounds often face barriers to entry in prestigious music programs. Admission panels may unconsciously favor applicants with traditional Western music training. Limited access to private lessons and resources further widens the gap. These practices marginalize talented students from diverse cultures. It also results in a lack of representation in music faculties and ensembles.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Racial Disparities
      </div>
    ),
  },
  {
    title: "Economic Barriers to Participation",
    description: "High tuition fees, expensive instruments, and private lesson costs make music education inaccessible for many. Students from low-income backgrounds may be left out of key ensembles or competitions. Without scholarships or financial aid, talent alone isn't enough. This creates an unequal foundation for learning and growth. It reinforces a system where wealth determines access to the arts.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Barriers to Participation
      </div>
    ),
  },
  {
    title: "LGBTQ+ Discrimination in Curriculum and Culture",
    description: "LGBTQ+ students may face exclusion or microaggressions in music schools. Gender identity can be ignored in vocal training, costumes, or role assignments. A lack of inclusive policies or representation in faculty worsens the issue. Queer musical expression may not be embraced in performances. Such an environment discourages authenticity and self-expression.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Curriculum and Culture
      </div>
    ),
  }
];



const WhyChooseUs = () => {
  return (
    <div className="">
      <StickyScroll   content={MusicSchoolContent}  />
    </div>
  )
}

export default WhyChooseUs