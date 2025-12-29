import {Button, Link as MUILink} from "@mui/material";
import NextLink from "next/link";

export default function StartButton() {
    return (
        <NextLink href='/' passHref>
            <MUILink component={Button} variant="button">На початок</MUILink>
        </NextLink>
    );
}