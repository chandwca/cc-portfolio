import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-8 lg:px-12 xl:px-16">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
