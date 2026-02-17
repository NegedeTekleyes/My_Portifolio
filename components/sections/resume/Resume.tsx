import ResumeCard from "./ResumeCard";
import SkillBar from "./SkillBar";
import { education, experience, skills } from "../../../data/data";

export default function Resume() {
    return (
        <section id="resume" className="py-24 px-16 max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-16">
            Resume
            </h2>  

            <div>
                <h3>My Education</h3>
                <div>
                    {education.map((item: any, index: any) => (
                        <ResumeCard
                        key={index} {...item}
                        />
                    ))}
                </div>
            </div>

            {/* experince */}
            <div>
                <h3 className="text-xl font-semibold mb-6">My Experience</h3>
                 <div className="space-y-6">
            {experience.map((item: any, index: any) => (
              <ResumeCard key={index} {...item} />
            ))}
          </div>
            </div>
              {/* Skills */}
      <div className="mt-20">
        <h3 className="text-xl font-semibold mb-6">My Skills</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <SkillBar key={i} {...skill} />
          ))}
        </div>
      </div>
        </section>
    )
}