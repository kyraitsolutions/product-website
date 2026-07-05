import { cookiePolicy } from "./data";


const CookiePolicy = () => {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                <div className="max-w-[1480px] mx-auto px-8 py-14">
                    <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1 text-sm font-medium">
                        Legal
                    </span>

                    <h1 className="mt-6 text-3xl font-bold">{cookiePolicy.title}</h1>

                    <p className="mt-6 max-w-3xl text-gray-600">
                        {cookiePolicy.description}
                    </p>

                    <p className="mt-6 text-sm text-gray-500">
                        Last Updated: {cookiePolicy.lastUpdated}
                    </p>
                </div>
            </section>

            <div className="md:max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 px-6 py-16">

                {/* Sidebar */}
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-28">
                        <h3 className="font-semibold mb-5">Contents</h3>

                        <nav className="space-y-3">
                            {cookiePolicy.sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="block text-gray-600 hover:text-black transition"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Content */}

                <main className="lg:col-span-9">

                    {cookiePolicy.sections.map((section) => (
                        <section
                            key={section.id}
                            id={section.id}
                            className="mb-20 scroll-mt-28"
                        >
                            <h2 className="text-2xl font-semibold mb-6">
                                {section.title}
                            </h2>

                            {section.description && (
                                <p className="text-gray-600 mb-6">
                                    {section.description}
                                </p>
                            )}

                            {section.paragraphs?.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="leading-8 text-gray-700 mb-5"
                                >
                                    {paragraph}
                                </p>
                            ))}

                            {section.bullets && (
                                <ul className="list-disc pl-6 space-y-3 mb-6">
                                    {section.bullets.map((bullet, index) => (
                                        <li key={index}>{bullet}</li>
                                    ))}
                                </ul>
                            )}

                            {section.table && (
                                <div className="w-full! overflow-auto rounded-xl border mt-8 border">

                                    <table className="w-full border-collapse">

                                        <thead className="bg-gray-100">

                                            <tr>
                                                {section.table.headers.map((header) => (
                                                    <th
                                                        key={header}
                                                        className="text-left px-2 md:px-5 py-4 max-md:text-sm"
                                                    >
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>

                                        </thead>

                                        <tbody>

                                            {section.table.rows.map((row, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-t"
                                                >
                                                    {row.map((cell, i) => (
                                                        <td
                                                            key={i}
                                                            className="px-2 md:px-5 py-4 max-md:text-sm"
                                                        >
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}

                                        </tbody>

                                    </table>

                                </div>
                            )}
                        </section>
                    ))}

                </main>

            </div>
        </div>
    );
};

export default CookiePolicy;