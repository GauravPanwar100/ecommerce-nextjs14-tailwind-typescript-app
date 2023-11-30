import { Separator } from "@/components/native/separator";
import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      <Separator className="mt-8 mb-6" />
      <Socials />
    </footer>
  );
}

function Socials() {
  return (
    <div className="mb-6 flex justify-center space-x-6 text-muted-foreground">
      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <InstagramIcon className="h-4" />
        <span className="sr-only">Instagram page</span>
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <TwitterIcon className="h-4" />
        <span className="sr-only">Twitter page</span>
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <GithubIcon className="h-4" />
        <span className="sr-only">GitHub account</span>
      </a>
    </div>
  );
}
