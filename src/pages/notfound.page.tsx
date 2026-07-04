import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="relative flex w-full min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6">
            {/* Background Blur */}
            <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 max-w-xl text-center">
                {/* 404 */}
                <h1 className="text-[120px] font-extrabold leading-none tracking-tight text-primary md:text-[180px]">
                    404
                </h1>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    Oops! Page Not Found
                </h2>

                <p className="mt-4 text-lg text-slate-600">
                    The page you're looking for doesn't exist, may have been moved, or the
                    URL might be incorrect.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2 text-white shadow-lg transition hover:bg-primary/90"
                    >
                        <Home size={18} />
                        Go to Home
                    </Link>

                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2 text-slate-700 transition hover:bg-slate-100"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>

                {/* Search Hint */}
                <div className="mt-10 rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
                    <div className="flex items-center justify-center gap-2 text-slate-700">
                        <Search size={18} className="text-blue-600" />
                        <span className="font-medium">
                            Can't find what you're looking for?
                        </span>
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                        Try navigating from the homepage or contact support if you believe
                        this is an error.
                    </p>
                </div>
            </div>
        </div>
    );
}