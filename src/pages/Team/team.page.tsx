import { Linkedin, Mail, Users } from 'lucide-react';

const Team = () => {

    const team = [
        {
            name: "John Anderson",
            role: "Founder & CEO",
            image: "https://i.pravatar.cc/500?img=11",
        },
        {
            name: "Sarah Wilson",
            role: "CTO",
            image: "https://i.pravatar.cc/500?img=32",
        },
        {
            name: "Michael Brown",
            role: "Product Manager",
            image: "https://i.pravatar.cc/500?img=15",
        },
        {
            name: "Emily Davis",
            role: "UI/UX Designer",
            image: "https://i.pravatar.cc/500?img=47",
        },
        {
            name: "David Miller",
            role: "Backend Engineer",
            image: "https://i.pravatar.cc/500?img=60",
        },
        {
            name: "Sophia Taylor",
            role: "Frontend Engineer",
            image: "https://i.pravatar.cc/500?img=20",
        },
        {
            name: "Sarah Wilson",
            role: "Hr Manager",
            image: "https://i.pravatar.cc/500?img=32",
        },
        {
            name: "Michael Brown",
            role: "Product Manager",
            image: "https://i.pravatar.cc/500?img=15",
        },
    ];

    return (
        <main className="bg-background">
            {/* Hero */}
            <section className="relative overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-tb from-primary/10 via-transparent to-primary/5" />

                <div className="max-w-[1480px]  mx-auto px-8 py-14 relative">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-5 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-primary">
                            <Users className="mr-2 h-4 w-4" />
                            Our Team
                        </div>

                        <h1 className="font-bold md:text-5xl text-3xl">
                            Meet the
                            <span className="block text-primary">
                                People Behind Kyra
                            </span>
                        </h1>

                        <p className="mt-5 text-muted-foreground">
                            Passionate people building products that businesses love.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="max-w-[1480px]  mx-auto px-8 pb-20">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="group overflow-hidden rounded-xl transition hover:border-primary"
                        >
                            <div className="aspect-square overflow-hidden rounded-xl">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-2">
                                <h3 className="text-lg font-semibold">
                                    {member.name}
                                </h3>

                                <p className="text-primary">
                                    {member.role}
                                </p>

                                <div className="mt-3 flex gap-3">
                                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition hover:bg-primary hover:text-primary-foreground">
                                        <Linkedin size={18} />
                                    </button>

                                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition hover:bg-primary hover:text-primary-foreground">
                                        <Mail size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-[1480px] mx-auto px-8 pb-24">
                <div className="rounded-3xl bg-slate-900 px-8 py-16 text-center text-primary-foreground">
                    <h2 className="font-bold md:text-5xl text-4xl">
                        Want to Join Us?
                    </h2>

                    <p className="mt-4 opacity-90">
                        We're always looking for talented people.
                    </p>

                    <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-primary transition hover:scale-105">
                        View Careers
                    </button>
                </div>
            </section>
        </main>
    );


}

export default Team