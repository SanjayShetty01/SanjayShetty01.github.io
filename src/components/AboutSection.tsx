import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, CircleCheck } from "lucide-react";

const skills = [
  "R", "AWS", "SQL", "Python", "Rust", "Shiny", "Data Analysis",
  "Credit Risk", "Machine Learning", "Git",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
        <div className="w-12 h-1 bg-primary rounded mb-8" />

        <p className="text-muted-foreground leading-relaxed mb-8">
          I build analytics and modelling applications using R and R Shiny,
          mainly in credit risk, climate risk, regulatory stress testing, and
          pharma analytics. I work on AWS-based deployments and integrate applications
          using React, Flask, and R Plumber, using Docker and PostgreSQL in my workflow.
          Currently exploring Rust to expand my development skills.
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
            <Calendar size={14} className="text-primary" /> 3+ Years Experience
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
