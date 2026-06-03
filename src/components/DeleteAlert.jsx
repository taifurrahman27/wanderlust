"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export function DeleteAlert({ destination }) {
    const router = useRouter();

    const { _id, destinationName } = destination;

    const handleDelete = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
                {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                    },
                }
            );

            const data = await res.json();

            if (data?.deletedCount > 0) {
                toast.success("Destination deleted successfully");
                router.push("/destinations");
                router.refresh();
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete destination");
        }
    };

    return (
        <AlertDialog>
            <Button
                variant="danger"
                color="danger"
                className="rounded-xl"
            >
                <TrashBin />
                Delete
            </Button>

            <AlertDialog.Backdrop className="backdrop-blur-sm">
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-lg rounded-3xl overflow-hidden">
                        <AlertDialog.CloseTrigger />

                        {/* Header */}
                        <AlertDialog.Header className="flex flex-col items-center text-center px-8 pt-8">
                            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                                <TrashBin className="text-red-600 text-2xl" />
                            </div>

                            <AlertDialog.Heading className="text-2xl font-bold">
                                Delete Destination?
                            </AlertDialog.Heading>

                            <p className="text-default-500 mt-2">
                                This action cannot be undone.
                            </p>
                        </AlertDialog.Header>

                        {/* Body */}
                        <AlertDialog.Body className="px-8 py-6">
                            <div className="border border-red-200 bg-red-50 rounded-2xl p-5">
                                <p className="text-sm text-default-700">
                                    You are about to permanently delete:
                                </p>

                                <h3 className="font-bold text-lg mt-2 text-red-600">
                                    {destinationName}
                                </h3>

                                <p className="text-sm text-default-600 mt-3">
                                    All destination information, booking data,
                                    images, and associated records will be
                                    permanently removed from the system.
                                </p>
                            </div>
                        </AlertDialog.Body>

                        {/* Footer */}
                        <AlertDialog.Footer className="px-8 pb-8 flex gap-3 justify-end">
                            <Button
                                slot="close"
                                variant="bordered"
                                className="rounded-xl"
                            >
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                onClick={handleDelete}
                                color="danger"
                                className="rounded-xl"
                            >
                                <TrashBin />
                                Delete Permanently
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}