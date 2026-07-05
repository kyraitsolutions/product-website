import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    ArrowLeft,
    MapPin,
    Clock,
    CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JObDetails } from "./data/jobData";

export default function JobDetails() {
    const { jobId } = useParams();

    const navigate = useNavigate();

    const job = useMemo(
        () => JObDetails.find((x) => x.id === jobId),
        [jobId]
    );

    if (!job) {
        return (
            <div className="container py-32 text-center">
                Job not found.
            </div>
        );
    }

    return (
        <div className=" max-w-[1480px] px-8 mx-auto py-14">

            <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mb-10"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
            </Button>

            <div className="grid lg:grid-cols-3 gap-10">

                {/* Left */}

                <div className="lg:col-span-2">

                    <h1 className="text-3xl font-bold">
                        {job.title}
                    </h1>

                    <div className="mt-6 flex flex-wrap gap-3">

                        <Badge>{job.type}</Badge>

                        <Badge variant="secondary">
                            <MapPin className="mr-1 h-3 w-3" />
                            {job.location}
                        </Badge>

                        <Badge variant="secondary">
                            <Clock className="mr-1 h-3 w-3" />
                            {job.experience}
                        </Badge>

                    </div>

                    <section className="mt-12">

                        <h2 className="text-2xl font-semibold">
                            About the Role
                        </h2>

                        <p className="mt-4 text-muted-foreground">
                            {job.overview}
                        </p>

                    </section>

                    <section className="mt-12">

                        <h2 className="text-xl font-semibold">
                            Responsibilities
                        </h2>

                        <ul className="mt-5 space-y-3">

                            {job.responsibilities.map((item) => (
                                <li
                                    key={item}
                                    className="flex gap-3"
                                >
                                    <CheckCircle className="text-primary h-4 w-4 mt-1" />
                                    {item}
                                </li>
                            ))}

                        </ul>

                    </section>

                    <section className="mt-12">

                        <h2 className="text-xl font-semibold">
                            Requirements
                        </h2>

                        <ul className="mt-5 space-y-3">

                            {job.requirements.map((item) => (
                                <li
                                    key={item}
                                    className="flex gap-3"
                                >
                                    <CheckCircle className="text-primary h-4 w-4 mt-1" />
                                    {item}
                                </li>
                            ))}

                        </ul>

                    </section>

                    <section className="mt-12">

                        <h2 className="text-xl font-semibold">
                            Required Skills
                        </h2>

                        <div className="mt-5 flex flex-wrap gap-3">

                            {job.skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="outline"
                                >
                                    {skill}
                                </Badge>
                            ))}

                        </div>

                    </section>

                    <section className="mt-12">

                        <h2 className="text-xl font-semibold">
                            Benefits
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4 mt-5">

                            {job.benefits.map((item) => (
                                <div
                                    key={item}
                                    className="p-4 bg-muted rounded-lg"
                                >
                                    {item}
                                </div>
                            ))}

                        </div>

                    </section>

                </div>

                {/* Sidebar */}

                <div>

                    <div className="sticky top-24 p-6 bg-muted rounded-xl">

                        <h3 className="text-xl font-semibold">
                            Job Overview
                        </h3>

                        <div className="space-y-6 mt-8">

                            <div>
                                <p className="text-muted-foreground">
                                    Department
                                </p>
                                <p>{job.department}</p>
                            </div>

                            <div>
                                <p className="text-muted-foreground">
                                    Employment
                                </p>
                                <p>{job.type}</p>
                            </div>

                            <div>
                                <p className="text-muted-foreground">
                                    Experience
                                </p>
                                <p>{job.experience}</p>
                            </div>

                            <div>
                                <p className="text-muted-foreground">
                                    Location
                                </p>
                                <p>{job.location}</p>
                            </div>

                        </div>

                        <Button
                            size="lg"
                            className="w-full mt-10"
                        >
                            Apply Now
                        </Button>

                    </div>

                </div>

            </div>

        </div>
    );
}