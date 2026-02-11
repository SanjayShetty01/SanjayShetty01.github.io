import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Data Visualization Dashboard",
    description: "An interactive Shiny dashboard for exploring and visualizing complex datasets with dynamic charts and filters.",
    tech: ["R", "Shiny", "ggplot2"],
    category: "Data Viz",
    demo: "#",
    source: "https://github.com/SanjayShetty01",
  },
  {
    title: "Statistical Analysis Toolkit",
    description: "A collection of R functions and scripts for common statistical analyses, hypothesis testing, and regression modeling.",
    tech: ["R", "Tidyverse", "Statistics"],
    category: "Tools",
    demo: "#",
    source: "https://github.com/SanjayShetty01",
  },
  {
    title: "Automated Report Generator",
    description: "R Markdown-based tool that automatically generates formatted PDF and HTML reports from raw data inputs.",
    tech: ["R", "R Markdown", "LaTeX"],
    category: "Automation",
    demo: "#",
    source: "https://github.com/SanjayShetty01",
  },
  {
    title: "ML Prediction Pipeline",
    description: "End-to-end machine learning pipeline for predictive analytics, featuring data preprocessing, model training, and evaluation.",
    tech: ["Python", "R", "Machine Learning"],
    category: "ML",
    demo: "#",
    source: "https://github.com/SanjayShetty01",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
        <div className="w-12 h-1 bg-primary rounded mb-8" />

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-colors ${
                filter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={13} /> Demo
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={13} /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
