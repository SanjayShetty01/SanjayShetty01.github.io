import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, CircleCheck } from "lucide-react";

const skills = [
  "R", "Python", "SQL", "Data Analysis", "Statistical Modeling",
  "ggplot2", "Shiny", "Tidyverse", "Machine Learning", "Git",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
        <div className="w-12 h-1 bg-primary rounded mb-8" />

        <p className="text-muted-foreground leading-relaxed mb-8">
          I'm a data-driven developer who loves working with R and statistical tools 
          to solve real-world problems. With experience in data analysis, visualization, 
          and building interactive applications, I enjoy turning raw data into actionable 
          insights. I'm always exploring new techniques and contributing to the open-source community.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs font-medium px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-primary" /> India
          </span>
          <span className="flex items-center gap-2">
            <Calendar size={14} className="text-primary" /> 2+ Years Experience
          </span>
          <span className="flex items-center gap-2">
            <CircleCheck size={14} className="text-primary" /> Open to Opportunities
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
