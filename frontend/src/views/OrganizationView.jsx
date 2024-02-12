import { Container, Typography, Box } from '@mui/material'
import Card from '../components/card/Card'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import {CodePath, RewriteCode, Wecode, GoogleDevStudentClub, Colorstack} from '../assets/index'


const OrganizationView = () => {
    // Real data for organizations
    const organizations = [
        {
          image: CodePath,
          title: 'Codepath',
          description: 'Codepath is an education technology platform that offers transformative computer science education programs to underrepresented minorities in tech. Their courses cover vital software engineering skills and industry-relevant projects.',
          tags: ['Education', 'Technology', 'Diversity'],
          url: 'https://www.codepath.org'
        },
        {
          image: RewriteCode,
          title: 'Rewriting the Code',
          description: 'Rewriting the Code is a non-profit organization that empowers young women to pursue and excel in technology-related degrees and careers. They provide resources, programs, and a supportive community to encourage women in tech.',
          tags: ['Education', 'Community', 'Women in Tech'],
          url: 'https://www.rewritingthecode.org'
        },
        {
          image: Wecode,
          title: 'Women who code',
          description: 'Women Who Code is a global non-profit organization dedicated to inspiring women to excel in technology careers. They provide an avenue for women to showcase their skills and help companies diversify their technology teams.',
          tags: ['Education', 'Technology', 'Women in Tech'],
          url: 'https://www.womenwhocode.com/'
        },
        {
          image: GoogleDevStudentClub,
          title: 'Google Developer Student Club',
          description: 'Google Developer Student Club is a community program that helps students bridge the gap between theory and practice. It offers hands-on experiences on Google technologies and a platform to share knowledge.',
          tags: ['Education', 'Technology', 'Community'],
          url: 'https://developers.google.com/community/dsc'
        },
        {
          image: Colorstack,
          title: 'Colorstack',
          description: 'Colorstack is a non-profit organization that empowers and supports underrepresented students of color in the tech industry. They provide mentorship, resources, and a community to help these students excel in their computer science education journey.',
          tags: ['Community', 'Technology', 'Diversity'],
          url: 'https://www.colorstack.org'
        }
      ];
      
    const [searchInput, setSearchInput] = useState("");
    const handleSearchInput = (value) => {
        setSearchInput(value);
    };
    return (
        <Container maxWidth="xl">
            <Typography variant="h4" sx={{ mb: 5 }}>Organization View</Typography>

            <SearchBar
                onSearch={handleSearchInput}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 5, flexDirection: "row", flexWrap:"wrap" }}>
                {organizations.map((organization, index) => (
                    <Card
                        key={index}
                        image={organization.image}
                        title={organization.title}
                        description={organization.description}
                        tags={organization.tags}
                        url={organization.url}
                    />
                ))}
            </Box>

        </Container>
    )
}

export default OrganizationView
