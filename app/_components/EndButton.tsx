'use client';
import { useRouter } from 'next/navigation';
import {Button} from "@mui/material";

export default function EndButton() {
    const router = useRouter();

    const handleEnd = () => {

        // send email
        router.push('/end');
    };

    return (
        <Button onClick={handleEnd}>
            Завершити
        </Button>
    );
}