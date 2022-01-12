import { TaskDTO } from '../api/dto/task.dto'
import * as React from 'react';
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
                Id: {data.id} <br />
                Name: {data.name}
                </Typography>
                
                <Typography variant="body2">
                    State: {(data.completed) ? "Completed" : "Not completed"}
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