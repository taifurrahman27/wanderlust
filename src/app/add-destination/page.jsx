"use client";

import {
    FieldError,
    Input,
    Label,
    TextField,
    Select,
    ListBox,
    TextArea,
    Button,
    Card,
} from "@heroui/react";

const AddDestinationPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());

        console.log(destination);

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/destination`,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(destination),
            }
        );

        const data = await res.json();
        console.log(data, "add destination data");
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-sky-50 via-white to-cyan-50 py-6 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-5">
                    <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold mb-4">
                        Wanderlust Travel Management
                    </span>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Add New Destination
                    </h1>

                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                        Create exciting travel destinations and offer unforgettable
                        experiences to your customers.
                    </p>
                </div>

                <Card className="shadow-2xl border border-gray-100 rounded-3xl overflow-hidden">
                    <div className="bg-linear-to-r from-cyan-500 to-blue-600 p-6 text-white">
                        <h2 className="text-2xl font-bold">
                            Destination Information
                        </h2>

                        <p className="opacity-90 mt-2">
                            Fill in all destination details below.
                        </p>
                    </div>

                    <form
                        onSubmit={onSubmit}
                        className="p-3 md:p-6 space-y-5"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="md:col-span-2">
                                <TextField name="destinationName" isRequired>
                                    <Label className="font-semibold">
                                        Destination Name
                                    </Label>

                                    <Input
                                        placeholder="Bali Paradise"
                                        className="rounded-xl"
                                    />

                                    <FieldError />
                                </TextField>
                            </div>

                            <TextField name="country" isRequired>
                                <Label className="font-semibold">
                                    Country
                                </Label>

                                <Input
                                    placeholder="Indonesia"
                                    className="rounded-xl"
                                />

                                <FieldError />
                            </TextField>

                            <div>
                                <Select
                                    name="category"
                                    isRequired
                                    placeholder="Choose category"
                                >
                                    <Label className="font-semibold">
                                        Category
                                    </Label>

                                    <Select.Trigger className="rounded-xl">
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="Beach">
                                                Beach
                                            </ListBox.Item>

                                            <ListBox.Item id="Mountain">
                                                Mountain
                                            </ListBox.Item>

                                            <ListBox.Item id="City">
                                                City
                                            </ListBox.Item>

                                            <ListBox.Item id="Adventure">
                                                Adventure
                                            </ListBox.Item>

                                            <ListBox.Item id="Cultural">
                                                Cultural
                                            </ListBox.Item>

                                            <ListBox.Item id="Luxury">
                                                Luxury
                                            </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            <TextField
                                name="price"
                                type="number"
                                isRequired
                            >
                                <Label className="font-semibold">
                                    Price (USD)
                                </Label>

                                <Input
                                    type="number"
                                    placeholder="1299"
                                    className="rounded-xl"
                                />

                                <FieldError />
                            </TextField>

                            <TextField name="duration" isRequired>
                                <Label className="font-semibold">
                                    Duration
                                </Label>

                                <Input
                                    placeholder="7 Days / 6 Nights"
                                    className="rounded-xl"
                                />

                                <FieldError />
                            </TextField>

                            <div className="md:col-span-2">
                                <TextField
                                    name="departureDate"
                                    type="date"
                                    isRequired
                                >
                                    <Label className="font-semibold">
                                        Departure Date
                                    </Label>

                                    <Input
                                        type="date"
                                        className="rounded-xl"
                                    />

                                    <FieldError />
                                </TextField>
                            </div>

                            <div className="md:col-span-2">
                                <TextField name="imageUrl" isRequired>
                                    <Label className="font-semibold">
                                        Image URL
                                    </Label>

                                    <Input
                                        type="url"
                                        placeholder="https://example.com/destination.jpg"
                                        className="rounded-xl"
                                    />

                                    <FieldError />
                                </TextField>
                            </div>

                            <div className="md:col-span-2">
                                <TextField name="description" isRequired>
                                    <Label className="font-semibold">
                                        Description
                                    </Label>

                                    <TextArea
                                        placeholder="Describe the destination, activities, attractions, accommodation, food, culture and overall experience..."
                                        className="rounded-xl min-h-30"
                                    />

                                    <FieldError />
                                </TextField>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                variant="bordered"
                                className="flex-1 h-12 rounded-xl border-gray-300"
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                className="flex-1 h-12 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
                            >
                                ✈️ Add Destination
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AddDestinationPage;