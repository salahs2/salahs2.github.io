// /constants/projects.js

export const projects = [
  {
    owner: "salahs2",
    name: "NBA-RoTY-Dashboard",
    description: "predicts the NBA Rookie of the Year (ROTY) for each season based on player statistics",
    fullDescription:
      "predicts the NBA Rookie of the Year (ROTY) for each season based on player statistics. A Random Forest model is trained using historical player data, and a Streamlit dashboard is used to visualize predictions.",
    tags: ["python", "machine-learning", "web-scraping", "beautiful-soup", "sklearn", "pandas"],
    projectLink: "https://github.com/salahs2/NBA-RoTY-Dashboard",
    featured: false,
    
  },
  {
    owner: "salahs2",
    name: "catflix",
    description: "netflix clone built with React, Tailwind CSS and TMDB API",
    fullDescription:
      "catflix is a Netflix clone built with React, Tailwind CSS and TMDB API. It features a sleek and responsive design, allowing users to browse and search for movies and TV shows. The app fetches data from the TMDB API to display movie details, trailers, and recommendations.",
    tags: ["react", "tailwind-css", "tmdb-api"],
    projectLink: "https://github.com/salahs2/catflix",
    featured: false,
  },
  {
    owner: "salahs2",
    name: "forest fire simulator",
    description: "browser-based forest fire simulation built with React and TypeScript",
    fullDescription:
      "Forest Fire Simulator is an interactive, browser-based forest fire simulation built with React and TypeScript. It models how forests grow, ignite, and burn over time using simple probabilistic rules",
    tags: ["react", "typescript", "aws (s3, amplify)"],
    projectLink: "https://github.com/salahs2/forest-fire-simulator",
    featured: true,
  },
  {
    owner: "salahs2",
    name: "baymax",
    description: "AI Triage Agent",
    fullDescription:
      "Baymax is an agentic triage agent built with gemini's api using RAG and message context retention to triage symptoms of patients and deliver preliminary diagnosis",
    tags: ["react", "typescript", "gemini API"],
    projectLink: "https://github.com/salahs2/Baymax",
    featured: true,
  },
  {
    owner: "salahs2",
    name: "go-search",
    description: "low latency search engine built with go",
    fullDescription:
      "go-search is a fully dockerized search engine built with a server side container that moderates search results using the Brave API using go and implementing in memory retention of recent searches",
    tags: ["go", "redis", "docker"],
    projectLink: "https://github.com/salahs2/go-search",
    featured: true,
  }
];
