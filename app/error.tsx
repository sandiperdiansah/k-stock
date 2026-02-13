'use client';
import { useEffect } from 'react';

const Error = ({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </section>
    );
};

export default Error;
