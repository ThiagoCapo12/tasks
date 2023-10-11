import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
    const handleStartQuiz = () => {
        if (attempts > 0) {
            setQuizInProgress(true);
            setAttempts(attempts - 1);
        }
    };
    const handleStopQuiz = () => {
        setQuizInProgress(false);
    };
    const handleMulligan = () => {
        setAttempts(attempts + 1);
    };
    return (
        <div>
            <h1>Quiz Attempt Manager</h1>
            <p>Attemptf Left: {attempts}</p>
            {quizInProgress ? (
                <p>Quiz in Progress</p>
            ) : (
                <p>Quiz not in progress</p>
            )}
            <Button
                onClick={handleStartQuiz}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={handleStopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={handleMulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
