import ResumeCard from "./ResumeCard";
import SkillBar from "./SkillBar";
import { education, experience, skills } from "../../../data/data";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function Resume() {
    return (
        <section id="resume" className="py-24 px-6 bg-[#2E3133]">
          <SectionTitle title="Resume" background="SUMMERY"  /> 

            <div >
                <h3 className="text-xl font-semibold mb-6">My Education</h3>
                <div className="grid md:grid-cols-2 gap-6">
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
                 <div className="grid md:grid-cols-2 gap-6">
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
          <span className=" px-400px  bg-[#2E3133]">

          <Button>
            Download CV
          </Button>
          </span>
        </div>
      </div>
        </section>
    )
}