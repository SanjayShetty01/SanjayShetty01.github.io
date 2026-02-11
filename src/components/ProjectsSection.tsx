import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RCognito — AWS Cognito Wrapper for R",
    description:
      "An R package that simplifies integration with AWS Cognito services, enabling secure authentication and user pool management directly from R applications.",
    tech: ["R", "AWS", "R Package"],
    category: "Tools",
    demo: "https://cran.r-project.org/web/packages/RCognito/index.html",
    source: "https://github.com/SanjayShetty01/RCognito",
  },

  {
    title: "Betting Odds Converter",
    description:
      "A Rust-based CLI tool that converts different betting odds formats into implied probabilities, providing actionable insights to help bettors make informed decisions based on market odds.",
    tech: ["Rust", "CLI"],
    category: "Tools",
    demo: "https://github.com/SanjayShetty01/betting-odds-converter/releases",
    source: "https://github.com/SanjayShetty01/betting-odds-converter",
  },

  {
    title: "capture_text — Screen Text Extraction Tool",
    description:
      "A cross-platform command-line utility for extracting text from anywhere on the screen, inspired by PowerToys’ Text Extractor and designed for simplicity and accuracy.",
    tech: ["Rust", "Screen OCR", "CLI"],
    category: "Tools",
    demo: "https://github.com/SanjayShetty01/capture_text/releases/tag/v0.1.1",
    source: "https://github.com/SanjayShetty01/capture_text",
  },

  {
    title: "ZooShopInsights – Discord Game Insights Dashboard",
    description:
      "An interactive R Shiny application providing income analysis and performance insights for the Evolution Farm Discord game, enabling users to simulate earnings and optimize in-game strategies.",
    tech: ["R", "Shiny", "Github Actions"],
    category: "Data Viz",
    demo: "https://sanjayshetty01.shinyapps.io/ZooShopInsights/",
    source: "https://github.com/SanjayShetty01/ZooShopInsights",
  },

  {
    title: "Data Visualization Repo",
    description: "An R project focused on strengthening data visualization skills using ggplot2, featuring a suite of exploratory plots and visual approaches to communicate complex data effectively.",
    tech: ["R", "Shiny", "ggplot2"],
    category: "Data Viz",
    demo: "https://github.com/SanjayShetty01/Data-Visualization?tab=readme-ov-file",
    source: "https://github.com/SanjayShetty01",
  },
  {
    title: "NIFTY 50 Open Price Forecasting",
    description:
      "An integrated forecasting project that leverages news sentiment, historical index data, and machine learning models to estimate next-day opening prices for the NIFTY 50 benchmark.",
    tech: ["Python", "ML", "Sentiment Analysis", "Time Series", "AWS"],
    category: "Stats & ML",
    demo: "#",
    source: "https://github.com/SanjayShetty01/PredictingOpeningPriceNifty50",
  },
  {
    title: "Implementing India VIX in R",
    description:
      "A full implementation of the India VIX calculation methodology from scratch in R, replicating NSE’s volatility index using option chain data, cubic spline interpolation, and term-structure weighting across near and next month contracts.",
    tech: ["R", "Options Data", "Volatility Modeling", "Financial Engineering"],
    category: "Stats & ML",
    demo: "https://gist.github.com/SanjayShetty01/01e700b6c1fadf0e76c5b7361c14d7d2",
    source: "https://gist.githubusercontent.com/SanjayShetty01/01e700b6c1fadf0e76c5b7361c14d7d2/raw/a0081171037dfa84b47790932969f9588a2f9363/IndiaVix.md"
  },

  {
    title: "Payoff vs Probability — Monte Carlo Simulation",
    description:
      "A statistical simulation exploring why payoff structure matters more than raw probability in decision-making. Using Monte Carlo methods in R, the project models repeated betting outcomes to demonstrate how asymmetric losses dominate long-run results despite high win probabilities.",
    tech: ["R", "Monte Carlo Simulation", "Probability", "Statistics"],
    category: "Stats & ML",
    demo: "https://gist.github.com/SanjayShetty01/927f0a0cf0bfe479ebf1f28240cc6331",
    source: "https://gist.githubusercontent.com/SanjayShetty01/927f0a0cf0bfe479ebf1f28240cc6331/raw/2e84cade72988cf27a64df95f6a05c6bec4b6235/PayoffVsProbability.md",
  },
  {
    title: "Intraday VWAP Strategy — Bank Nifty Backtest",
    description:
      "A rule-based intraday trading strategy backtested on Bank Nifty, implementing VWAP breakout signals, tick-level stop-loss control, and session-based position management within defined trading hours (9:30–15:15).",
    tech: ["Python", "Quant Strategy", "Backtesting", "Market Data"],
    category: "Stats & ML",
    demo: "https://colab.research.google.com/gist/SanjayShetty01/85c377f5b2236713dbed111e11cee5d5/rg-enterprises-workbook.ipynb",
    source: "https://gist.github.com/SanjayShetty01/85c377f5b2236713dbed111e11cee5d5",
  }
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
              className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-colors ${filter === cat
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
                  target="_blank"
                  rel="noopener noreferrer"
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
