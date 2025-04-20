
import ProjectForm from "@/components/ProjectForm";
import { ThemeProvider } from "next-themes";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <ProjectForm />
    </ThemeProvider>
  );
};

export default Index;
