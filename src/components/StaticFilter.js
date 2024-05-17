import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const options = [
  {
    block: 'L',
    departments: [
      {
        name: 'IT',
        labs: [
          { name: 'L-101', systems: 30, subject: 'FSD', isequipmentworking: 'true' },
          { name: 'L-102', systems: 30, subject: 'BDA', isequipmentworking: 'false' },
          { name: 'L-103', systems: 30, subject: 'CC', isequipmentworking: 'true' },
          { name: 'L-104', systems: 30, subject: 'NS', isequipmentworking: 'true' },
          { name: 'L-105', systems: 28, subject: 'ESIOT', isequipmentworking: 'false' },
          { name: 'L-106', systems: 28, subject: 'DAA', isequipmentworking: 'true' },
          { name: 'L-107', systems: 30, subject: 'DL', isequipmentworking: 'true' },
          { name: 'L-108', systems: 30, subject: 'BML', isequipmentworking: 'false' }
        ],
        staffrooms: ['L-101', 'L-104'],
        classrooms: [
          { name: 'L-301', capacity: 70, section: 'IT-1 III-SEM', projector: 'true' },
          { name: 'L-302', capacity: 70, section: 'IT-1 III-SEM', projector: 'true'},
          { name: 'L-303', capacity: 70, section: 'IT-1 III-SEM', projector: 'true'},
          { name: 'L-304', capacity: 70, section: 'IT-1 III-SEM', projector: 'true'},
          { name: 'L-305', capacity: 70, section: 'IT-1 III-SEM', projector: 'true' },
          { name: 'L-306', capacity: 70, section: 'IT-1 III-SEM', projector: 'true' },
          { name: 'L-307', capacity: 70, section: 'IT-1 III-SEM', projector: 'true'},
          { name: 'L-308', capacity: 70, section: 'IT-1 III-SEM', projector: 'false' }
        ]
      },
      {
        name: 'EEE',
        labs: [
          { name: 'N-101', systems: 30, subject: 'NS', isequipmentworking: 'true' },
          { name: 'N-102', systems: 30, subject: 'VLSI', isequipmentworking: 'false' },
          { name: 'N-103', systems: 30, subject: 'MPMC', isequipmentworking: 'true' },
          { name: 'N-104', systems: 30, subject: 'MATLAB', isequipmentworking: 'true' },
          { name: 'N-105', systems: 28, subject: 'N/WLAB', isequipmentworking: 'false' },
          { name: 'N-106', systems: 28, subject: 'PIC', isequipmentworking: 'true' },
          { name: 'N-107', systems: 30, subject: 'CE', isequipmentworking: 'true' },
          { name: 'N-108', systems: 30, subject: 'BMN', isequipmentworking: 'false' }
        ],
        staffrooms: ['N-101', 'N-104'],
        classrooms: [
          { name: 'N-301', capacity: 70, section: 'EEE-1 III-SEM', projector: 'true' },
          { name: 'N-302', capacity: 70, section: 'EEE-1 III-SEM', projector: 'false' },
          { name: 'N-303', capacity: 70, section: 'EEE-1 III-SEM', projector: 'true' },
          { name: 'N-304', capacity: 70, section: 'EEE-1 III-SEM', projector: 'true' },
          { name: 'N-305', capacity: 70, section: 'EEE-1 III-SEM', projector: 'false' },
          { name: 'N-306', capacity: 70, section: 'EEE-1 III-SEM', projector: 'true' },
          { name: 'N-307', capacity: 70, section: 'EEE-1 III-SEM', projector: 'true' },
          { name: 'N-308', capacity: 70, section: 'EEE-1 III-SEM', projector: 'false' }
        ]
      

      }
    ]
  },
  {
    block: 'A',
    departments: [
      
  {
    name: 'CIVIL',
    labs: [
      { name: 'A-201', systems: 30, subject: 'NS', isequipmentworking: 'true' },
          { name: 'A-202', systems: 30, subject: 'VLSI', isequipmentworking: 'false' },
          { name: 'A-203', systems: 30, subject: 'MPMC', isequipmentworking: 'true' },
          { name: 'A-204', systems: 30, subject: 'MATLAB', isequipmentworking: 'true' },
          { name: 'A-205', systems: 28, subject: 'N/WLAB', isequipmentworking: 'false' },
          { name: 'A-206', systems: 28, subject: 'PIC', isequipmentworking: 'true' },
          { name: 'A-207', systems: 30, subject: 'CE', isequipmentworking: 'true' },
          { name: 'A-208', systems: 30, subject: 'BMN', isequipmentworking: 'false' }
    ],
    staffrooms: ['A-201', 'A-204'],
    classrooms: [
      { name: 'A-401', capacity: 70, section: 'CIVIL-1 III-SEM', projector: 'true' },
      { name: 'A-402', capacity: 70, section: 'CIVIL-1 III-SEM', projector: 'false' },
      { name: 'A-403', capacity: 70, section: 'CIVIL-1 III-SEM', projector: 'true' },
      { name: 'A-404', capacity: 70, section: 'CIVIL-1 III-SEM', projector: 'true' },
      { name: 'A-405', capacity: 70, section: 'CIVIL-1 III-SEM', projector: 'false' },
      { name: 'A-406', capacity: 70, section: 'CIVIL-1 III-SEM', projector: 'true' },
      { name: 'A-407', capacity: 70, section: 'CIVIL-1 III-SEM', projector: 'true' },
      { name: 'A-408', capacity: 70, section: 'CIVIL-1 III-SEM', projector: 'false' }
    ]
  }
     
    ]
  },
  {
    block: 'D',
    departments: [
      {
        name: 'MECH',
        labs: [
          { name: 'D-101', systems: 30, subject: 'FSD', Isequipmentworking: 'true' },
          { name: 'D-102', systems: 30, subject: 'BDA', Isequipmentworking: 'false' },
          { name: 'D-103', systems: 30, subject: 'CC', Isequipmentworking: 'true' },
          { name: 'D-104', systems: 30, subject: 'NS', Isequipmentworking: 'true' },
          { name: 'D-105', systems: 28, subject: 'ESIOT', Isequipmentworking: 'false' },
          { name: 'D-106', systems: 28, subject: 'DAA', Isequipmentworking: 'true' },
          { name: 'D-107', systems: 30, subject: 'DL', Isequipmentworking: 'true' },
          { name: 'D-108', systems: 30, subject: 'BML', Isequipmentworking: 'false' }
        ],
        staffrooms: ['D-101', 'D-104'],
        classrooms: [
         
          { name: 'D-301', capacity: 70, section: 'MECH-1 III-SEM', projector: 'true' },
          { name: 'D-302', capacity: 70, section: 'MECH-1 III-SEM', projector: 'false' },
          { name: 'D-303', capacity: 70, section: 'MECH-1 III-SEM', projector: 'true' },
          { name: 'D-304', capacity: 70, section: 'MECH-1 III-SEM', projector: 'true' },
          { name: 'D-305', capacity: 70, section: 'MECH-1 III-SEM', projector: 'false' },
          { name: 'D-306', capacity: 70, section: 'MECH-1 III-SEM', projector: 'true' },
          { name: 'D-307', capacity: 70, section: 'MECH-1 III-SEM', projector: 'true' },
          { name: 'D-308', capacity: 70, section: 'MECH-1 III-SEM', projector: 'false' }
        ]
      },
     
    ]
  },

    
  
  
];



const FilterSearchM = () => {
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleBlockSelect = (event) => {
    setSelectedBlock(event.target.value);
    setSelectedDepartment('');
    setSelectedCategory('');
  };

  const handleDepartmentSelect = (event) => {
    setSelectedDepartment(event.target.value);
    setSelectedCategory('');
  };

  const handleCategorySelect = (event) => {
    setSelectedCategory(event.target.value);
    filterData(selectedBlock, selectedDepartment, event.target.value);
  };

  const filterData = (block, department, category) => {
    let data = [];

    if (block && department && category) {
      if (category === 'labs') {
        data = options.find(option => option.block === block)
          ?.departments.find(dept => dept.name === department)?.labs || [];
      } else if (category === 'staffrooms') {
        data = options.find(option => option.block === block)
          ?.departments.find(dept => dept.name === department)?.staffrooms || [];
      } else if (category === 'classrooms') {
        data = options.find(option => option.block === block)
          ?.departments.find(dept => dept.name === department)?.classrooms || [];
      }
    }
    
    console.log(data)
    setFilteredData(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Select
        value={selectedBlock}
        onChange={handleBlockSelect}
        displayEmpty
        variant="outlined"
        style={{ marginRight: '10px' }}
      >
        <MenuItem value="">Select Block</MenuItem>
        {options.map(block => (
          <MenuItem key={block.block} value={block.block}>{block.block}</MenuItem>
        ))}
      </Select>
      <Select
        value={selectedDepartment}
        onChange={handleDepartmentSelect}
        displayEmpty
        variant="outlined"
        style={{ marginRight: '10px' }}
        disabled={!selectedBlock}
      >
        <MenuItem value="">Select Department</MenuItem>
        {options.find(block => block.block === selectedBlock)?.departments.map(dept => (
          <MenuItem key={dept.name} value={dept.name}>{dept.name}</MenuItem>
        ))}
      </Select>
      <Select
        value={selectedCategory}
        onChange={handleCategorySelect}
        displayEmpty
        variant="outlined"
        style={{ marginRight: '10px' }}
        disabled={!selectedDepartment}
      >
        <MenuItem value="">Select Category</MenuItem>
        <MenuItem value="labs">Labs</MenuItem>
        <MenuItem value="staffrooms">Staffrooms</MenuItem>
        <MenuItem value="classrooms">Classrooms</MenuItem>
      </Select>
      <TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        {filteredData.length > 0 && typeof filteredData[0] === 'object' && (
          Object.keys(filteredData[0]).map((key) => (
            <TableCell key={key}>{key}</TableCell>
          ))
        )}
      </TableRow>
    </TableHead>
    <TableBody>
      {filteredData.map((item, index) => (
        <TableRow key={index}>
          {typeof item === 'object' ? (
            Object.values(item).map((value, index) => (
              <TableCell key={index}>{value}</TableCell>
            ))
          ) : (
            <TableCell>{item}</TableCell>
          )}
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

    </div>
  );
};

export default FilterSearchM;
