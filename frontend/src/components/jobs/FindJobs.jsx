import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import JobCard from './JobCard';
import SearchBar from '../common/SearchBar';

const FindJobs = () => {
  const [searchInput, setSearchInput] = useState("");
  const [internships, setInternships] = useState([]);
  const [communityInternships, setCommunityInternships] = useState([]);


  const mockInternships = [
    {
        logo: 'https://www.google.com/logos/doodles/2024/casimir-funks-140th-birthday-6753651837110355.2-s.png',
        title: 'Software Engineering Intern',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        onApply: () => {
          // Apply logic here
        },
        onDetails: () => {
          // Details logic here
        },
        jobTag: 'internship',
      },
      {
        logo: 'https://www.google.com/logos/doodles/2024/casimir-funks-140th-birthday-6753651837110355.2-s.png',
        title: 'Data Science Intern',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        onApply: () => {
          // Apply logic here
        },
        onDetails: () => {
          // Details logic here
        },
        jobTag: 'full-time',
      },
    {
      logo: 'https://www.google.com/logos/doodles/2024/casimir-funks-140th-birthday-6753651837110355.2-s.png',
      title: 'Web Development Intern',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      onApply: () => {},
      onDetails: () => {},
      jobTag: 'internship',
    },
    {
      logo: 'https://www.google.com/logos/doodles/2024/casimir-funks-140th-birthday-6753651837110355.2-s.png',
      title: 'UX/UI Design Intern',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      onApply: () => {},
      onDetails: () => {},
      jobTag: 'full-time',
    },
    // New internships...
    {
      logo: 'https://www.google.com/logos/doodles/2024/casimir-funks-140th-birthday-6753651837110355.2-s.png',
      title: 'Marketing Intern',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      onApply: () => {},
      onDetails: () => {},
      jobTag: 'internship',
    },
    {
      logo: 'https://www.google.com/logos/doodles/2024/casimir-funks-140th-birthday-6753651837110355.2-s.png',
      title: 'Finance Intern',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      onApply: () => {},
      onDetails: () => {},
      jobTag: 'full-time',
    },
    {
      logo: 'https://www.google.com/logos/doodles/2024/casimir-funks-140th-birthday-6753651837110355.2-s.png',
      title: 'HR Intern',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      onApply: () => {},
      onDetails: () => {},
      jobTag: 'internship',
    },
    {
      logo: 'https://www.google.com/logos/doodles/2024/casimir-funks-140th-birthday-6753651837110355.2-s.png',
      title: 'Sales Intern',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      onApply: () => {},
      onDetails: () => {},
      jobTag: 'full-time',
    },
    {
      logo: 'https://www.google.com/logos/doodles/2024/casimir-funks-140th-birthday-6753651837110355.2-s.png',
      title: 'Operations Intern',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      onApply: () => {},
      onDetails: () => {},
      jobTag: 'internship',
    },
    {
      logo: 'https://www.google.com/logos/doodles/2024/casimir-funks-140th-birthday-6753651837110355.2-s.png',
      title: 'Product Management Intern',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      onApply: () => {},
      onDetails: () => {},
      jobTag: 'full-time',
    },
    {
      logo: 'https://example.com/logo11.png',
      title: 'Business Development Intern',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      onApply: () => {},
      onDetails: () => {},
      jobTag: 'internship',
    },
    {
      logo: 'https://example.com/logo12.png',
      title: 'IT Support Intern',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      onApply: () => {},
      onDetails: () => {},
      jobTag: 'full-time',
    },
  ];
  const handleSearchInput = (value) => {
    setSearchInput(value);
  };
  

useEffect(() => {
    setInternships(mockInternships);
  // Fetch internships from API
//   fetchInternships();

//   // Fetch community internships
//   fetchCommunityInternships();
}, []);


//   const fetchInternships = async () => {
//     // Fetch internships from API and update state
//     try {
//       const response = await fetch('API_ENDPOINT');
//       const data = await response.json();
//       setInternships(data);
//     } catch (error) {
//       console.error('Error fetching internships:', error);
//     }
//   };

//   const fetchCommunityInternships = async () => {
//     // Fetch community internships and update state
//     try {
//       const response = await fetch('COMMUNITY_API_ENDPOINT');
//       const data = await response.json();
//       setCommunityInternships(data);
//     } catch (error) {
//       console.error('Error fetching community internships:', error);
//     }
//   };
  

  return (
    <>
      <SearchBar 
        onSearch={handleSearchInput}
      />

      <Box >
        <h2> Latest Internships</h2>
        <Box style={{ marginTop: '20px', display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
            {internships.map((internship, index) => (
            <JobCard
                key={index}
                logo={internship.logo}
                title={internship.title}
                description={internship.description}
                onApply={internship.onApply}
                onDetails={internship.onDetails}
                jobTag={internship.jobTag}
            />
            ))}
        </Box>

      </Box>

      <Box sx={{ marginTop: '20px' }}>
        <h2>Internships from Community Members</h2>
        {/* Display internships from community members */}
      </Box>
    </>
  );
};

export default FindJobs;


