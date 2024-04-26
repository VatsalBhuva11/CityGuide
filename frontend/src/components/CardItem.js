import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function CardItem(props) {
    return (
        <div className="h-400 w-[40%]">
            <Link to={props.path}>
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={`images/${props.src}`}
                        alt="University of Southern California"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>

                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                        {props.label}
                    </div>
                </article>
                <p className="z-10 mt-3 text-l font-bold text-white text-center">
                    {props.text}
                </p>
            </Link>
        </div>
    );
}

export default CardItem;
