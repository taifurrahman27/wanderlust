import { Button } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";
const DestinationCard = ({ destination }) => {
    console.log(destination, "destination from map");

    const { _id, imageUrl, price, destinationName, duration, country } = destination;
    console.log(price, imageUrl);


    return (
        <div className="border">
            <Image
                src={imageUrl || "/placeholder.jpg"}
                alt={destinationName || "Destination"}
                width={600}
                height={400}
                unoptimized

            />

            <div className="p-2">
                <div className="flex items-center gap-1">
                    <LuMapPin /> <span>{country}</span>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div>
                            <h2 className="text-xl font-bold">{destinationName}</h2>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaRegCalendar /> {duration}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold">$ {price}</h3>
                    </div>
                </div>
                <Link href={`/destinations/${_id}`}><Button variant="ghost" className={'mt-1 text-cyan-500'}> <FiExternalLink /> Book Now</Button></Link>
            </div>
        </div>
    );
};

export default DestinationCard;
