"use client"
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {

    const {
        data: session,
    } = authClient.useSession()
    console.log(session, "User session");
    const user = session?.user;
    console.log(user, "user data");



    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200">
            <nav className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">

                <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-700">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-blue-600 transition-colors duration-200"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/destinations"
                            className="hover:text-blue-600 transition-colors duration-200"
                        >
                            Destinations
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/my-bookings"
                            className="hover:text-blue-600 transition-colors duration-200"
                        >
                            My Bookings
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/add-destination"
                            className="hover:text-blue-600 transition-colors duration-200"
                        >
                            Add Destination
                        </Link>
                    </li>
                </ul>

                <div className="shrink-0">
                    <Link href="/">
                        <Image
                            src="/assets/logo.png"
                            width={130}
                            height={130}
                            alt="Wanderlust Logo"
                            className="object-contain"
                            priority
                        />
                    </Link>
                </div>

                <ul className="flex flex-wrap items-center justify-center gap-3">
                    <li>
                        <Link
                            href="/profile"
                            className="px-4 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-100 transition"
                        >
                            Profile
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/login"
                            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition"
                        >
                            Login
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/signup"
                            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-md"
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
};

export default Navbar;