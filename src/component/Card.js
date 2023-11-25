import React from 'react'

export default function Card() {
    const src = 'https://plasma.sberdevices.ru/ui/images/320_320_1.jpg';

    return (
        <div>
            <Card style={{ width: '22.5rem' }} tabIndex={0} outlined scaleOnFocus>
                <CardBody>
                    <CardMedia src={src} placeholder={src} ratio="1/1" />
                    <CardBadge style={{ left: '1rem', top: '1rem' }} text="Test in badge" />
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
