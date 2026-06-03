"use client";

import {
    Button,
    FieldError,
    Input,
    Label,
    ListBox,
    Modal,
    Surface,
    TextArea,
    TextField,
    Select,
} from "@heroui/react";
import { BiEdit } from "react-icons/bi";

export function EditModal({ destination }) {
    const {
        _id,
        imageUrl,
        price,
        destinationName,
        duration,
        country,
        description,
        category,
        departureDate,
    } = destination;

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const updatedDestination = Object.fromEntries(formData.entries());

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
                {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(updatedDestination),
                }
            );

            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Modal>
            <Button
                color="primary"
                variant="flat"
                className="rounded-xl"
            >
                <BiEdit className="text-lg" />
                Edit Destination
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="max-w-4xl rounded-3xl overflow-hidden">
                        <Modal.CloseTrigger />

                        <Modal.Header className="border-b bg-default-50 px-8 py-6">
                            <div>
                                <Modal.Heading className="text-2xl font-bold">
                                    Edit Destination
                                </Modal.Heading>

                                <p className="text-sm text-default-500 mt-1">
                                    Update destination details and travel information.
                                </p>
                            </div>
                        </Modal.Header>

                        <Modal.Body className="p-0">
                            <Surface
                                variant="default"
                                className="rounded-none shadow-none"
                            >
                                <form
                                    onSubmit={onSubmit}
                                    className="p-8 md:p-10 space-y-10"
                                >
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            Destination Information
                                        </h3>

                                        <p className="text-sm text-default-500">
                                            Basic details about the destination.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <div className="lg:col-span-2">
                                            <TextField
                                                defaultValue={destinationName}
                                                name="destinationName"
                                                isRequired
                                            >
                                                <Label>Destination Name</Label>

                                                <Input
                                                    placeholder="Bali Paradise"
                                                    className="rounded-xl"
                                                />

                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <TextField
                                            defaultValue={country}
                                            name="country"
                                            isRequired
                                        >
                                            <Label>Country</Label>

                                            <Input
                                                placeholder="Indonesia"
                                                className="rounded-xl"
                                            />

                                            <FieldError />
                                        </TextField>

                                        <div>
                                            <Select
                                                defaultValue={category}
                                                name="category"
                                                isRequired
                                                className="w-full"
                                                placeholder="Select category"
                                            >
                                                <Label>Category</Label>

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
                                            defaultValue={price}
                                            name="price"
                                            type="number"
                                            isRequired
                                        >
                                            <Label>Price (USD)</Label>

                                            <Input
                                                type="number"
                                                placeholder="1299"
                                                className="rounded-xl"
                                            />

                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            defaultValue={duration}
                                            name="duration"
                                            isRequired
                                        >
                                            <Label>Duration</Label>

                                            <Input
                                                placeholder="7 Days / 6 Nights"
                                                className="rounded-xl"
                                            />

                                            <FieldError />
                                        </TextField>

                                        <div className="lg:col-span-2">
                                            <TextField
                                                defaultValue={departureDate}
                                                name="departureDate"
                                                type="date"
                                                isRequired
                                            >
                                                <Label>Departure Date</Label>

                                                <Input
                                                    type="date"
                                                    className="rounded-xl"
                                                />

                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <div className="lg:col-span-2">
                                            <TextField
                                                defaultValue={imageUrl}
                                                name="imageUrl"
                                                isRequired
                                            >
                                                <Label>Image URL</Label>

                                                <Input
                                                    type="url"
                                                    placeholder="https://example.com/image.jpg"
                                                    className="rounded-xl"
                                                />

                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <div className="lg:col-span-2">
                                            <TextField
                                                defaultValue={description}
                                                name="description"
                                                isRequired
                                            >
                                                <Label>Description</Label>

                                                <TextArea
                                                    placeholder="Describe the travel experience..."
                                                    className="rounded-2xl min-h-32"
                                                />

                                                <FieldError />
                                            </TextField>
                                        </div>
                                    </div>

                                    <Modal.Footer className="border-t bg-default-50 px-0 pt-6 flex justify-end gap-3">
                                        <Button
                                            variant="outline"
                                            slot="close"
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            color="primary"
                                            type="submit"
                                            slot="close"
                                        >
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
