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
    <Card className="mt-6 w-96 m-10">
      <Link to={props.path}>
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            className="w-full"
            src={`images/${props.src}`}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography>{props.text}</Typography>
        </CardBody>
        {/* <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter> */}
      </Link>
    </Card>
  );
}

export default CardItem;
