"use client";

import { Card, Separator } from "@heroui/react";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });


        if (data) {
            alert("Login success")
            redirect("/");
        }

        if (error) alert("Login failed");
    };


    return (
        <>

            <div className="wl-root">
                <div className="wl-card">

                    <div className="wl-left">
                        <div className="wl-left-dots" />
                        <div className="wl-left-glow" />

                        <svg
                            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.6 }}
                            viewBox="0 0 400 600"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path d="M40 200 Q120 150 200 178 Q280 206 360 158" stroke="#4a90d9" strokeWidth="0.7" fill="none" />
                            <path d="M20 350 Q100 300 180 328 Q260 356 340 308" stroke="#4a90d9" strokeWidth="0.7" fill="none" />
                            <path d="M0 480 Q80 440 160 460 Q240 480 320 442 Q360 424 400 432" stroke="#4a90d9" strokeWidth="0.5" fill="none" />
                            <circle cx="200" cy="178" r="3" fill="#4a90d9" opacity="0.7" />
                            <circle cx="310" cy="161" r="3" fill="#4a90d9" opacity="0.7" />
                            <circle cx="120" cy="328" r="3" fill="#4a90d9" opacity="0.7" />
                            <circle cx="260" cy="352" r="3" fill="#4a90d9" opacity="0.7" />
                            <line x1="200" y1="178" x2="310" y2="161" stroke="#4a90d9" strokeWidth="0.4" strokeDasharray="4 3" opacity="0.35" />
                            <line x1="120" y1="328" x2="260" y2="352" stroke="#4a90d9" strokeWidth="0.4" strokeDasharray="4 3" opacity="0.35" />
                        </svg>

                        <div className="wl-globe">
                            <div className="wl-globe-inner" />
                        </div>

                        <div className="wl-left-content">
                            <span className="wl-eyebrow">Your next adventure</span>
                            <h1 className="wl-hero-title">
                                Explore the world<br />with <em>Wanderlust</em>
                            </h1>
                            <p className="wl-hero-sub">
                                Discover hidden gems, plan seamless trips,<br />
                                and join a community of passionate travelers.
                            </p>
                            <div className="wl-stats">
                                <div>
                                    <div className="wl-stat-number">180+</div>
                                    <div className="wl-stat-label">Countries</div>
                                </div>
                                <div>
                                    <div className="wl-stat-number">2.4M</div>
                                    <div className="wl-stat-label">Travelers</div>
                                </div>
                                <div>
                                    <div className="wl-stat-number">50K</div>
                                    <div className="wl-stat-label">Itineraries</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wl-right">
                        <h2 className="wl-form-title">Welcome back</h2>
                        <p className="wl-form-sub">Sign in to continue your journey</p>

                        <Form onSubmit={onSubmit} className="flex flex-col gap-5">

                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(value) => {
                                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                        return "Invalid email address";
                                    }
                                    return null;
                                }}
                            >
                                <Label>Email address</Label>
                                <Input placeholder="john@example.com" />
                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                name="password"
                                type="password"
                                minLength={8}

                            >
                                <Label>Password</Label>
                                <Input placeholder="••••••••" />
                                <Description style={{ fontSize: "12px", color: "#b0b8cc" }}>
                                    Must include uppercase and number
                                </Description>
                                <FieldError />
                            </TextField>

                            <Button type="submit" className="wl-submit-btn">
                                Sign in
                            </Button>
                        </Form>

                        <div className="wl-divider-row">
                            <Separator />
                            <span className="wl-divider-text">or continue with</span>
                            <Separator />
                        </div>

                        <Button className="wl-google-btn">
                            <FcGoogle size={18} />
                            Continue with Google
                        </Button>

                        <p className="wl-footer-text">
                            By continuing you agree to Wanderlust&apos;s{" "}
                            <a href="#" style={{ color: "#4a90d9", textDecoration: "none" }}>Terms</a>
                            {" & "}
                            <a href="#" style={{ color: "#4a90d9", textDecoration: "none" }}>Privacy Policy</a>
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default LoginPage;
