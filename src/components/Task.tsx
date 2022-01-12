import { TaskDTO } from '../api/dto/task.dto'
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

interface Props {
  data : TaskDTO;
}

const Task = ({data}: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography 
                    color="textSecondary" 
                    gutterBottom
                >
                Id: {data.id} - Name:{data.name}
                </Typography>
                
                <Typography variant="body2">
                    {(data.completed) ? "Completada" : "No completada"}
                </Typography>
            </CardContent>
            <CardActions>
                <Container>
                    <Button style={{marginRight:10}} size="small" variant="contained" color="primary">Edit</Button>
                    <Button size="small" variant="contained" color="secondary">Delete</Button>
                </Container>
               </CardActions>
        </Card>
    )
}

export default Task;