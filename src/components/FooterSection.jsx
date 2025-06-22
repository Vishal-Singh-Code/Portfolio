import { ArrowUp } from "lucide-react"
function FooterSection() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center py-12 px-4 bg-card border-t border-border mt-12 pt-8">

      {" "}
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Vishal Singh. Made with ❤️ using React & Tailwind.
      </p>

      <a href="#hero" aria-label="Back to top" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
        <ArrowUp size={20} />
      </a>

    </footer>
  )
}

export default FooterSection
