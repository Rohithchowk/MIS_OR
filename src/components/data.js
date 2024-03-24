const options = [
    {
      block: 'L',
      departments: [
        {
          name: 'IT',
          labs: ['FSD', 'OS', 'CN', 'SE', 'DSA', 'BDA'],
          staffrooms: ['L-101', 'L-104'],
          classrooms: [
            { name: 'L-301', capacity: 30, section: 'A', active: true },
            { name: 'L-302', capacity: 35, section: 'B', active: false },
            { name: 'L-303', capacity: 25, section: 'C', active: true },
            { name: 'L-304', capacity: 40, section: 'D', active: true },
            { name: 'L-305', capacity: 20, section: 'E', active: false },
            { name: 'L-306', capacity: 45, section: 'F', active: true },
            { name: 'L-307', capacity: 30, section: 'G', active: true },
            { name: 'L-308', capacity: 35, section: 'H', active: false }
          ]
        },
        {
          name: 'EEE',
          labs: ['Electronics', 'VLSI', 'NS', 'MATLAB', 'NCA', 'EDA'],
          staffrooms: ['L-001', 'L-002'],
          classrooms: ['L-201', 'L-202', 'L-203', 'L-204', 'L-205', 'L-206', 'L-207', 'L-208']
        }
      ]
    },
    {
      block: 'C',
      departments: [
        {
          name: 'CSE',
          labs: ['DAA', 'IOT', 'WEB-D', 'DBMS', 'DSA', 'MP'],
          staffrooms: ['C-101', 'C-104'],
          classrooms: ['C-301', 'C-302', 'C-303', 'C-304', 'C-305', 'C-306', 'C-307', 'C-308']
        }
      ]
    },
    {
      block: 'D',
      departments: [
        {
          name: 'MECH',
          labs: ['SOM', 'CAD', 'MM', 'FPFM', 'MCMH', 'AD'],
          staffrooms: ['D-001', 'D-002'],
          classrooms: ['D-309', 'D-310', 'D-311', 'D-312', 'D-313', 'D-314', 'D-315', 'D-316']
        }
      ]
    }
  ];
  