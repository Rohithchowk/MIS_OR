import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';

const ManageBlocksAndDepartments = () => {
  const [blocks, setBlocks] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [newBlock, setNewBlock] = useState({ block: '', departments: [] });
  const [newDepartment, setNewDepartment] = useState({
    name: '',
    labs: [],
    staffrooms: [],
    classrooms: []
  });
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const blocksResponse = await axios.get('http://localhost:5000/api/blocks');
      setBlocks(blocksResponse.data);

      const departmentsResponse = await axios.get('http://localhost:5000/api/departments');
      setDepartments(departmentsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleBlockSelect = (event) => {
    setSelectedBlock(event.target.value);
  };

  const handleDepartmentSelect = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleCreateBlock = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/blocks', newBlock);
      setBlocks([...blocks, response.data]);
      setNewBlock({ block: '', departments: [] });
    } catch (error) {
      console.error('Error creating block:', error);
    }
  };

  const handleCreateDepartment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/departments', newDepartment);
      setDepartments([...departments, response.data]);
      setNewDepartment({
        name: '',
        labs: [],
        staffrooms: [],
        classrooms: []
      });
    } catch (error) {
      console.error('Error creating department:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <TextField
            label="Block"
            value={newBlock.block}
            onChange={(e) => setNewBlock({ ...newBlock, block: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={handleCreateBlock}>Create Block</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Select Block</InputLabel>
            <Select value={selectedBlock} onChange={handleBlockSelect}>
              {blocks.map((block) => (
                <MenuItem key={block._id} value={block.block}>
                  {block.block}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Department Name"
            value={newDepartment.name}
            onChange={(e) =>
              setNewDepartment({ ...newDepartment, name: e.target.value })
            }
            fullWidth
          />
          {/* Include fields for labs, staffrooms, and classrooms here */}
          {/* Example:
            <TextField
              label="Lab Name"
              value={newDepartment.labs[0].name}
              onChange={(e) =>
                setNewDepartment({
                  ...newDepartment,
                  labs: [{ ...newDepartment.labs[0], name: e.target.value }]
                })
              }
              fullWidth
            />
          */}
          
          <Button variant="contained" onClick={handleCreateDepartment}>
            Create Department
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageBlocksAndDepartments;
