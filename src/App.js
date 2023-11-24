import React from 'react';
import { animatedScrollToX, addFocus, withAutoFocus } from '@salutejs/plasma-ui';
import { Container } from '@salutejs/plasma-ui/components/Grid';
import { Button } from '@salutejs/plasma-ui';

export default function App() {
    return (
        <Container>
            <Button>Hello, Plasma!</Button>
        </Container>
    );
}