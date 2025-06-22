import { Mail, Phone, MapPin, Instagram, LinkedinIcon, Send, X as TwitterIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

function ContactSection() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            e.target.reset();
            setIsSubmitting(false);
        }, 1500)
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In
                    <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to reach out for collaborations, opportunities, or just a friendly chat.<br />I'm always open to connecting!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 shadow-sm">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a href="mailto:vishalsingh011003@gmail.com" className="text-muted-foreground hover:text-primary transition-colors ">vishalsingh011003@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Phone</h4>
                                    {/* <a href="tel:+919393939393" className="text-muted-foreground hover:text-primary transition-colors">+919393939393</a> */}
                                    <a className="text-muted-foreground">Available upon request</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors duration-300">Faridabad, Haryana</a>
                                </div>
                            </div>
                        </div>
                        {/* Connect with me */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/vishal-singh-cse/" target="_blank" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                    <LinkedinIcon />
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                    <TwitterIcon />
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Send a Message */}
                    <div className="bg-card p-8 rounded-lg shadow-lg border border-muted">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form action="" className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
                            <div>
                                <label htmlFor="name" className="block text-left text-base md:text-lg font-medium tracking-wide mb-2">Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="e.g., Vishal Singh" />
                            </div>
                            <div >
                                <label htmlFor="email" className="block text-left text-base md:text-lg font-medium tracking-wide mb-2">Email</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="e.g., vishal@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-left text-base md:text-lg font-medium tracking-wide mb-2">Message</label>
                                <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Type your message here..." rows={5} />
                            </div>
                            <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2 ", {
                                "opacity-50 cursor-not-allowed": isSubmitting
                            })}>
                                {isSubmitting ? "Sending..." : "Send Message"}<Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactSection;
