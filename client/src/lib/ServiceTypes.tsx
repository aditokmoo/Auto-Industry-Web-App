import { FaMicrochip, FaTools } from "react-icons/fa";
import { GiCarDoor, GiCarWheel, GiGearStick } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";

export const ServiceTypes = [
    {
        name: 'Mehanic',
        color: '#4B6587',
        icon: <FaTools />
    },
    {
        name: 'Electrician',
        color: '#FFD700',
        icon: <MdElectricalServices />
    },
    {
        name: 'Detailer',
        color: '#9B59B6',
        icon: <GiCarWheel />
    },
    {
        name: 'Body specialist',
        color: '#E74C3C',
        icon: <GiCarDoor />
    },
    {
        name: 'Exhaust',
        color: '#95A5A6',
        icon: <GiCarDoor />
    },
    {
        name: 'Tuning',
        color: '#27AE60',
        icon: <FaMicrochip />
    },
    {
        name: 'Transmission',
        color: '#2C3E50',
        icon: <GiGearStick />
    },
]