import Button from '@material-ui/core/Button';
import {  Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { useState } from 'react';
import { TaskAPI } from '../api/task.api';
import { TaskDTO } from '../api/dto/task.dto';

interface Props {
  open : boolean;
  handleClose: () => void;
  onTaskCreated: (task: TaskDTO) => void;
}


const CreateTaskDialog = (props: Props) => {
const [name, setName] = useState('');

const createTask = async () => {
    const completed = false;
    const resp = await TaskAPI.createOne({
        name, completed
    });
    props.onTaskCreated(resp);
    console.log(resp);
}

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Complete the form to create a task"}
                </DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setName(e.target.value)}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={createTask} autoFocus>
                    Create
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CreateTaskDialog;