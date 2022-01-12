import React, { useEffect, useState } from 'react';
import './App.css';
import { TaskAPI } from './api/task.api';
import { TaskDTO } from './api/dto/task.dto';
import { Grid, AppBar, Toolbar, Typography, Button  } from '@material-ui/core';
import Task from './components/Task';
import CreateTaskDialog from './components/CreateTaskDialog';

function App() {

  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [createDialogOpen, seCreateDialogOpen] = useState(false);
  const addTask = (task: TaskDTO) => {
    setTasks([...tasks,task])
  }

  useEffect(()=> {
    async function fetchAll() {
      const resp = await TaskAPI.getAll();
      setTasks(resp);
          console.log(resp);
    }
    fetchAll();
  }, [])

  return (
    <div className="App">
      <CreateTaskDialog
        open={createDialogOpen}
        handleClose={() => seCreateDialogOpen(false)}
        onTaskCreated={addTask}
      />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Tasks Management
          </Typography>
          <Button variant="contained" color="primary" onClick={() => seCreateDialogOpen(true)}>Create new task</Button>
        </Toolbar>
      </AppBar>
    
      <Grid container spacing={1} style={{padding:10}}>
      {tasks.map(task => {
          return (
            <Grid item xs={3}>
              <Task data={task}/>
            </Grid>
          );
        })
      }
      </Grid>      
    </div>
  );
}

export default App;
