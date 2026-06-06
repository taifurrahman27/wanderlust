"use client";

import { FcGoogle } from "react-icons/fc";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    Separator,
    TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        console.log(user, "User after form fillup")


        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image,
        });
        console.log(data, "data after signup");


        if (data) {
            redirect("/");
        }

        if (error) {
            alert("Error");

        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-cyan-50 via-white to-sky-100 flex items-center justify-center p-4 md:p-8">
            <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">

                <div
                    className="hidden md:flex relative min-h-187.5"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/20"></div>

                    <div className="relative z-10 flex flex-col justify-end p-10 text-white">
                        <div className="mb-6">
                            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm">
                                ✈️ Explore The World
                            </span>
                        </div>

                        <h1 className="text-5xl font-bold leading-tight">
                            Your Next
                            <br />
                            Adventure Awaits
                        </h1>

                        <p className="mt-5 text-lg text-white/90 max-w-md">
                            Discover breathtaking destinations, unforgettable
                            journeys, and exclusive travel experiences with
                            Wanderlust.
                        </p>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="flex items-center justify-center p-6 md:p-12">
                    <Card className="w-full border-0 shadow-none bg-transparent">

                        <div className="mb-8">
                            <h2 className="text-4xl font-bold text-gray-900">
                                Create Account
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Join Wanderlust and start planning your dream trips.
                            </p>
                        </div>

                        <Form
                            onSubmit={onSubmit}
                            className="flex flex-col gap-5"
                        >
                            <TextField
                                isRequired
                                name="name"
                                type="text"
                            >
                                <Label>Full Name</Label>
                                <Input
                                    placeholder="John Doe"
                                    className="rounded-xl"
                                />
                                <FieldError />
                            </TextField>

                            <TextField
                                name="image"
                                type="url"
                            >
                                <Label>Profile Image URL</Label>
                                <Input
                                    placeholder="https://example.com/profile.jpg"
                                    className="rounded-xl"
                                />
                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(value) => {
                                    if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                            value
                                        )
                                    ) {
                                        return "Please enter a valid email address";
                                    }
                                    return null;
                                }}
                            >
                                <Label>Email Address</Label>
                                <Input
                                    placeholder="john@example.com"
                                    className="rounded-xl"
                                />
                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return "Password must be at least 8 characters";
                                    }

                                    return null;
                                }}
                            >
                                <Label>Password</Label>

                                <Input
                                    placeholder="Enter your password"
                                    className="rounded-xl"
                                />

                                <Description>
                                    Must be at least 8 characters with 1 uppercase
                                    letter and 1 number.
                                </Description>

                                <FieldError />
                            </TextField>

                            <Button
                                type="submit"
                                className="w-full h-12 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold mt-2"
                            >
                                Create Account
                            </Button>
                        </Form>

                        <div className="flex items-center gap-4 my-8">
                            <Separator className="flex-1" />
                            <span className="text-sm text-gray-500 whitespace-nowrap">
                                OR CONTINUE WITH
                            </span>
                            <Separator className="flex-1" />
                        </div>

                        <Button
                            variant="bordered"
                            className="w-full h-12 rounded-xl font-medium"
                        >
                            <FcGoogle className="text-xl" />
                            Sign up with Google
                        </Button>

                        <p className="text-center text-sm text-gray-500 mt-8">
                            Already have an account?
                            <span className="ml-1 text-cyan-600 font-semibold cursor-pointer">
                                Sign In
                            </span>
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
