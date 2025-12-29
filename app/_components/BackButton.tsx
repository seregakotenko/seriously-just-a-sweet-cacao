'use client';
import { useRouter } from 'next/navigation';
import {Button, Link as MUILink} from "@mui/material";
import NextLink from "next/link";

export default function BackButton() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <Button onClick={handleGoBack}>
            Повенрнутись назад
        </Button>
    );
}