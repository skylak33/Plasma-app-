import React from 'react'
import { Card, CardBody, CardMedia, CardBadge, CardContent, H4, BodyM } from '@salutejs/plasma-ui';
export default function Card1() {
    const src = 'https://plasma.sberdevices.ru/ui/images/320_320_1.jpg';

    return (
        <div>
            <Card style={{ width: '22.5rem' }} tabIndex={0} outlined scaleOnFocus>
                <CardBody>
                    <CardContent>
                        <BodyM>Label</BodyM>
                        <H4>Tittle</H4>
                        <BodyM>description</BodyM>
                    </CardContent>
                </CardBody>
            </Card>
        </div>
    );
}
