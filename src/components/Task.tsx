import { TaskDTO } from '../api/dto/task.dto'
import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { TaskAPI } from '../api/task.api';

interface Props {
  data : TaskDTO;
  onTaskDelete: (taskId: string) => void;
}

const Task = ({data, onTaskDelete}: Props) => {

    const deleteTask = async () => {
        await TaskAPI.deleteOne(data.id);
        onTaskDelete(data.id);
    };

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
                    <Button size="small" variant="contained" color="secondary"
                        onClick={deleteTask}
                    >Delete</Button>
                </Container>
               </CardActions>
        </Card>
    )
}

export default Task;