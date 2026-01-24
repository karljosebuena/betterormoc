"use client";

import { ArrowRight, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PopulationTrends() {
    const t = useTranslations("Statistics");

    return (
        <section className="mb-12 animate-fade-in-up">
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md">
                    <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Population Trends</h2>
                    <p className="text-slate-600">Historical growth from 1990 to 2020</p>
                </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                {/* 1990 Base */}
                <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md">
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                            1990
                        </span>
                        <span className="mt-2 text-3xl font-extrabold text-slate-800">
                            129,456
                        </span>
                        <span className="mt-1 text-xs text-slate-400">Baseline Census</span>
                    </div>
                </div>

                {/* Arrow Connector */}
                <div className="hidden justify-center text-slate-300 md:flex">
                    <ArrowRight className="h-8 w-8" />
                </div>

                {/* 2020 Current */}
                <div className="group relative overflow-hidden rounded-2xl bg-blue-600 p-6 shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl">
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl transition-all group-hover:bg-white/20"></div>
                    <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-black/10 blur-xl transition-all group-hover:bg-black/20"></div>

                    <div className="relative z-10 flex flex-col items-center text-center text-white">
                        <span className="text-sm font-semibold uppercase tracking-wider text-blue-100">
                            2020
                        </span>
                        <span className="mt-2 text-3xl font-extrabold">
                            230,998
                        </span>
                        <span className="mt-1 text-xs text-blue-200">Latest Census</span>
                    </div>
                </div>

                {/* Arrow Connector */}
                <div className="hidden justify-center text-slate-300 md:flex">
                    <ArrowRight className="h-8 w-8" />
                </div>

                {/* Growth Rate */}
                <div className="group relative overflow-hidden rounded-2xl bg-emerald-500 p-6 shadow-lg transition-all hover:bg-emerald-600 hover:shadow-xl">
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl transition-all group-hover:bg-white/20"></div>
                    <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-black/10 blur-xl transition-all group-hover:bg-black/20"></div>

                    <div className="relative z-10 flex flex-col items-center text-center text-white">
                        <span className="text-sm font-semibold uppercase tracking-wider text-emerald-100">
                            Growth
                        </span>
                        <span className="mt-2 text-3xl font-extrabold">
                            +78.4%
                        </span>
                        <span className="mt-1 text-xs text-emerald-200">Total Increase</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
