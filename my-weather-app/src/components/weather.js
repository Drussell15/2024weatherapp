import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({weatherData}) => (
    <Card>
        <CardContent>
            <Card.Header className="header">(weatherData.name)</Card.Header>
        </CardContent>
    </Card>
)

export default CardExampleCard;
"delete line after push"
