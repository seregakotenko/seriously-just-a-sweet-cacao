import {questions} from "@/app/_quiz/questions";
import {Box, Button, Card, CardContent, Link as MUILink, Stack, Typography} from "@mui/material";
import NextLink from 'next/link'
import BackButton from "@/app/_components/BackButton";
import StartButton from "@/app/_components/StartButton";
import {padding} from "@mui/system";
import EndButton from "@/app/_components/EndButton";

export async function generateStaticParams() {
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return [
        {quiz: 'start'},
        {quiz: 'mlynci'},
    ];
}

// @ts-ignore
export default async function QuizPage({params}) {
    const {quiz} = await params;
    const currentQuestion = questions.find(q => q.name === quiz);
    if (!currentQuestion) return 'Not found';

    console.log('currentQuestion', currentQuestion); // todo

    const {question, options, goto, end, showBackButton, showStartButton, showEndButton} = currentQuestion;

    return <Card sx={{maxWidth: 500, mx: 'auto', mt: 10}}>
        <CardContent>
            <Typography variant="h5" gutterBottom>
                {question}
            </Typography>

            {options &&
                <Stack spacing={2}>
                    {options.map(({next, text}, index) => (
                        <NextLink key={index} href={next} passHref>
                            <MUILink component={Button} variant="button">{text}</MUILink>
                        </NextLink>
                    ))}
                </Stack>
            }
            {goto &&
                <NextLink href={goto.next} passHref>
                    <MUILink component={Button} variant="button">{goto.text}</MUILink>
                </NextLink>
            }
            {end &&
                <Typography variant="h5" gutterBottom>{end.text}</Typography>
            }
            <Box sx={{
                paddingTop: '50px',
            }}>
            {quiz !== 'start' && showBackButton && <BackButton/>}
            {quiz !== 'start' && showStartButton && <StartButton/>}
            {quiz !== 'start' && showEndButton && <EndButton/>}
            </Box>
        </CardContent>
    </Card>
        ;
}