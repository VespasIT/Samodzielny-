import { useLanguage } from "@/contexts/LanguageContext";

const projectsData = {
  pl: [
    { id: 1, title: "Projekt 1", image: null },
    { id: 2, title: "Projekt 2", image: null },
    { id: 3, title: "Projekt 3", image: null },
  ],
  en: [
    { id: 1, title: "Project 1", image: null },
    { id: 2, title: "Project 2", image: null },
    { id: 3, title: "Project 3", image: null },
  ],
};

const ProjectsSection = () => {
  const { lang, t } = useLanguage();
  const projects = projectsData[lang];

  return (
    <section id="projects" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-8">{t("projects.title") || "Implemented Projects"}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-card rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              {project.image && (
                <div className="h-48 overflow-hidden bg-muted">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
              )}
              {!project.image && (
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Image</span>
                </div>
              )}
              <div className="p-5">
                <h3 className="font-serif font-bold text-lg text-foreground">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
