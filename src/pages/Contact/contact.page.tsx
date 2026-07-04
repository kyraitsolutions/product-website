import ContactForm from '@/components/website/ContactForm'
import { MessageSquare } from 'lucide-react'

const Contact = () => {
    return (
        <div>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                <div className="max-w-[1480px] mx-auto px-8 py-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                            <MessageSquare className="mr-2 h-4 w-4" /> Contact Us </div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                            We'd Love to <span className="block text-primary">Hear From You</span>
                        </h1>
                        <p className="mt-6 text text-muted-foreground">
                            Have questions about our products or services? Fill out the form below and our team will get back to you as soon as possible.
                        </p>
                    </div>
                </div>
            </section>
            <ContactForm />

        </div>
    )
}

export default Contact