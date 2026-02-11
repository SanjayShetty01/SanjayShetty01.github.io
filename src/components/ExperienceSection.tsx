import { Briefcase, GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const experience = [
  {
    role: "Senior Data Associate",
    company: "Crisil",
    period: "Oct 2025 — Present",
    description: ".",
  },
  {
    role: "Consultant - R Shiny",
    company: "EY India",
    period: "Jul 2024 — Oct 2025",
    description: "Developed and deployed credit risk systems using R Shiny, optimized R workflows, containerized applications with Docker, and integrated React-based frontends for scalable performance.",
  },
  {
    role: "Senior Analyst - R Shiny",
    company: "DataZymes",
    period: "Jan 2022 — Jun 2024",
    description: "Built and scaled Pharma Analytics systems using R Shiny and Plumber APIs, significantly improving performance and efficiency. Led AWS integration with modern web stacks, introduced Git-based workflows, and implemented modular architecture standards for maintainable development.",
  },

  {
    role: "Data Analyst",
    company: "Cointab",
    period: "Aug 2022 — Dec 2022",
    description: "Designed and implemented business logic for automated reconciliations using proprietary in-house systems, adapting solutions to client requirements and presenting outcomes to stakeholders.",
  },

  {
    role: "Economic Research Intern",
    company: "FKCCI, Bangalore",
    period: "Feb 2020 — May 2020",
    description: "Conducted economic research and authored reports on agricultural reforms (APMC), COVID-19's socioeconomic impact, and state budget analysis for Karnataka.",
  },

];

const education = [
  {
    degree: "B.E. in Chemical Engineering",
    school: "B.M.S. College of Engineering, Bangalore",
    period: "2016 — 2020",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">Experience</h2>
        <div className="w-12 h-1 bg-primary rounded mb-10" />

        {/* Work */}
        <div className="mb-12">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            <Briefcase size={14} className="text-primary" /> Work
          </h3>
          <div className="space-y-8 border-l-2 border-border pl-6">
            {experience.map((exp) => (
              <div key={exp.role} className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="text-xs text-muted-foreground mb-1">{exp.period}</p>
                <h4 className="text-base font-semibold text-foreground">{exp.role}</h4>
                <p className="text-sm text-primary mb-1">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-10">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            <GraduationCap size={14} className="text-primary" /> Education
          </h3>
          <div className="space-y-6 border-l-2 border-border pl-6">
            {education.map((edu) => (
              <div key={edu.degree} className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="text-xs text-muted-foreground mb-1">{edu.period}</p>
                <h4 className="text-base font-semibold text-foreground">{edu.degree}</h4>
                <p className="text-sm text-primary">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="gap-2">
            <Download size={14} /> Download Resume
          </Button>
        </a>

      </div>
    </section>
  );
};

export default ExperienceSection;
