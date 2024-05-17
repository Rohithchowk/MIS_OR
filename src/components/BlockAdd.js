import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const AddBlockForm = () => {
  const [blockData, setBlockData] = useState({
    block: '',
    departmentId: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlockData({
      ...blockData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/blocks', blockData);
      alert('Block created successfully!');
      // Clear the form after successful submission
      setBlockData({
        block: '',
        departmentId: ''
      });
    } catch (error) {
      console.error('Error creating block:', error);
      alert('Failed to create block. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Add New Block
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Block"
              name="block"
              value={blockData.block}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Department ID"
              name="departmentId"
              value={blockData.departmentId}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddBlockForm;
