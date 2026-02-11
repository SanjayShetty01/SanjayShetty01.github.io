import { Briefcase, GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const experience = [
  {
    role: "Data Analyst",
    company: "Company Name",
    period: "2023 — Present",
    description: "Performing data analysis, building dashboards, and developing statistical models to drive business decisions.",
  },
  {
    role: "R Developer",
    company: "Freelance / Open Source",
    period: "2022 — 2023",
    description: "Built R packages and Shiny applications. Contributed to open-source data science tools and community projects.",
  },
];

const education = [
  {
    degree: "Bachelor's in Computer Science / Statistics",
    school: "University Name",
    period: "2019 — 2023",
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

        <Button variant="outline" className="gap-2">
          <Download size={14} /> Download Resume
        </Button>
      </div>
    </section>
  );
};

export default ExperienceSection;
