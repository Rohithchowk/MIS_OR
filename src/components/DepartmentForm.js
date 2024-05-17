import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DepartmentForm = () => {
  const navigate = useNavigate();
  const [departmentData, setDepartmentData] = useState({
    name: '',
    blockName: '',
    labs: [{ name: '', systems: '', subject: '', isEquipmentWorking: '' }],
    staffrooms: [{ name: '' }],
    classrooms: [{ name: '', capacity: '', section: '', projector: '' }]
  });

  const handleChange = (e, index, section) => {
    const { name, value } = e.target;
    if (section === 'name' || section === 'blockName') {
      setDepartmentData({ ...departmentData, [section]: value });
    } else {
      let newArr = [...departmentData[section]];
      if (section === 'staffrooms') {
        newArr[index] = { ...newArr[index], name: value };
      } else {
        newArr[index][name] = value;
      }
      setDepartmentData({ ...departmentData, [section]: newArr });
    }
  };

  const handleAddField = (section) => {
    const newItem = section === 'labs' ? { name: '', systems: '', subject: '', isEquipmentWorking: '' } :
      section === 'staffrooms' ? { name: '' } :
      { name: '', capacity: '', section: '', projector: '' };
    setDepartmentData({ ...departmentData, [section]: [...departmentData[section], newItem] });
  };

  const handleRemoveField = (index, section) => {
    let newArr = [...departmentData[section]];
    newArr.splice(index, 1);
    setDepartmentData({ ...departmentData, [section]: newArr });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/departments', departmentData);
      alert('Department created successfully!');
      navigate('/')
    } catch (error) {
      alert('Failed to create department. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>Add New Department</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Department Name"
              name="name"
              value={departmentData.name}
              onChange={(e) => handleChange(e, null, 'name')}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Block Name"
              name="blockName"
              value={departmentData.blockName}
              onChange={(e) => handleChange(e, null, 'blockName')}
              fullWidth
              required
            />
          </Grid>
        </Grid>

        {/* Labs */}
        <Typography variant="h6" style={{ marginTop: '20px' }}>Labs</Typography>
        {departmentData.labs.map((lab, index) => (
          <div key={index}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={12} md={3}>
                <TextField label="Name" name="name" value={lab.name} onChange={(e) => handleChange(e, index, 'labs')} fullWidth required />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField label="Systems" name="systems" value={lab.systems} onChange={(e) => handleChange(e, index, 'labs')} fullWidth required />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField label="Subject" name="subject" value={lab.subject} onChange={(e) => handleChange(e, index, 'labs')} fullWidth required />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField label="Is Equipment Working" name="isEquipmentWorking" value={lab.isEquipmentWorking} onChange={(e) => handleChange(e, index, 'labs')} fullWidth required />
              </Grid>
              <Grid item>
                <Button variant="outlined" color="error" onClick={() => handleRemoveField(index, 'labs')}>Remove Lab</Button>
              </Grid>
            </Grid>
          </div>
        ))}
        <Button variant="outlined" onClick={() => handleAddField('labs')} style={{ marginTop: '10px' }}>Add Lab</Button>

        {/* Staffrooms */}
        <Typography variant="h6" style={{ marginTop: '20px' }}>Staffrooms</Typography>
        {departmentData.staffrooms.map((staffroom, index) => (
                    <div key={index}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={12} md={6}>
                <TextField label="Staffroom Name" name="name" value={staffroom.name} onChange={(e) => handleChange(e, index, 'staffrooms')} fullWidth required />
              </Grid>
              <Grid item>
                <Button variant="outlined" color="error" onClick={() => handleRemoveField(index, 'staffrooms')}>Remove Staffroom</Button>
              </Grid>
            </Grid>
          </div>
        ))}
        <Button variant="outlined" onClick={() => handleAddField('staffrooms')} style={{ marginTop: '10px' }}>Add Staffroom</Button>

        {/* Classrooms */}
        <Typography variant="h6" style={{ marginTop: '20px' }}>Classrooms</Typography>
        {departmentData.classrooms.map((classroom, index) => (
          <div key={index}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={12} md={3}>
                <TextField label="Name" name="name" value={classroom.name} onChange={(e) => handleChange(e, index, 'classrooms')} fullWidth required />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField label="Capacity" name="capacity" value={classroom.capacity} onChange={(e) => handleChange(e, index, 'classrooms')} fullWidth required />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField label="Section" name="section" value={classroom.section} onChange={(e) => handleChange(e, index, 'classrooms')} fullWidth required />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField label="Projector" name="projector" value={classroom.projector} onChange={(e) => handleChange(e, index, 'classrooms')} fullWidth required />
              </Grid>
              <Grid item>
                <Button variant="outlined" color="error" onClick={() => handleRemoveField(index, 'classrooms')}>Remove Classroom</Button>
              </Grid>
            </Grid>
          </div>
        ))}
        <Button variant="outlined" onClick={() => handleAddField('classrooms')} style={{ marginTop: '10px' }}>Add Classroom</Button>

        {/* Submit Button */}
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default DepartmentForm;

