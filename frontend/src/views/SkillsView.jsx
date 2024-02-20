import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  IconButton,
  Typography,
  Modal,
} from "@mui/material";
import { Close, FileCopy, OpenInNew, Share } from "@mui/icons-material";
import "../css/Skills.css";

const SkillsView = () => {
  const [filter, setFilter] = useState("All");
  const [openModal, setOpenModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  const handleShare = () => {
    navigator.share({
      title: "Check out this resource",
      url: window.location.href,
    });
  };
  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link);
  };
  const handleCardClick = (resource) => {
    setSelectedResource(resource);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const resources = [
    {
      name: "National Career Development Association",
      description:
        "Provides extensive, definitive, and frequently updated information on a wealth of career planning topics.",
      link: "https://ncda.org/",
      tags: ["career-roadmap", "professional-development"],
    },
    {
      name: "PROS - Professional Roadmap to Ongoing Success",
      description:
        "A series of activities designed to prepare students for career success, including professionalism, resume building, and networking.",
      link: "https://ung.edu/mike-cottrell-college-of-business/pros.php",
      tags: ["career-roadmap", "professional-development", "learning"],
    },
    {
      name: "LinkedIn Learning",
      description:
        "Free access to over 18,000 online courses to enhance skills in a variety of areas including career development.",
      link: "https://www.linkedin.com/learning/",
      tags: ["learning", "professional-development"],
    },
    {
      name: "Handshake",
      description:
        "A platform for finding job opportunities, internships, and connecting with employers.",
      link: "https://joinhandshake.com/",
      tags: ["job-search", "internship-prep"],
    },
    {
      name: "GoinGlobal",
      description:
        "Provides country-specific career and employment information, including worldwide internship and job postings and H1B employer listings.",
      link: "https://www.goinglobal.com/",
      tags: ["job-search", "international"],
    },
    {
      name: "Big Interview",
      description:
        "An online system that combines training and practice to help improve your interview technique and build your confidence.",
      link: "https://biginterview.com/",
      tags: ["interview-prep"],
    },
    {
      name: "Career Center Resources",
      description:
        "Various universities offer comprehensive resources for resume writing, interview preparation, and career guidance.",
      link: "https://career.fsu.edu/students/undergraduate-students/plan-your-career",
      tags: ["career-roadmap", "resume-writing", "interview-prep"],
    },
    {
      name: "FSU Career Portfolio",
      description:
        "A tool to showcase your achievements, skills, and experiences to potential employers.",
      link: "https://career.fsu.edu/tech-center/career-portfolio",
      tags: ["professional-development", "portfolio"],
    },
    {
      name: "UMassD Career Guides",
      description:
        "Comprehensive guides on cover letters, resumes, interviews, job search, networking, and graduate school preparation.",
      link: "https://www.umassd.edu/career/students/resources/",
      tags: ["career-roadmap", "job-search", "graduate-school"],
    },
    {
      name: "FSU Seminole Success Stories",
      description:
        "Real-life success stories that can provide inspiration and guidance for your own career path.",
      link: "https://career.fsu.edu/students/undergraduate-students/seminole-success-stories",
      tags: ["career-roadmap", "inspiration"],
    },
  ];

  const filteredResources =
    filter === "All"
      ? resources
      : resources.filter((resource) => resource.tags.includes(filter));
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <ButtonGroup>
        <Button
          className={filter === "All" ? "activeBtn" : ""}
          onClick={() => handleFilterChange("All")}
        >
          All
        </Button>
        <Button
          className={filter === "beginner" ? "activeBtn" : ""}
          onClick={() => handleFilterChange("beginner")}
        >
          Beginner
        </Button>
        <Button
          className={filter === "expert" ? "activeBtn" : ""}
          onClick={() => handleFilterChange("expert")}
        >
          Expert
        </Button>
        <Button
          className={filter === "intermediate" ? "activeBtn" : ""}
          onClick={() => handleFilterChange("intermediate")}
        >
          Intermediate
        </Button>
        <Button
          className={filter === "interview-prep" ? "activeBtn" : ""}
          onClick={() => handleFilterChange("interview-prep")}
        >
          Interview Prep
        </Button>
        <Button
          className={filter === "career-roadmap" ? "activeBtn" : ""}
          onClick={() => handleFilterChange("career-roadmap")}
        >
          Career Roadmap
        </Button>
      </ButtonGroup>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {filteredResources.map((resource) => (
          <Card
            key={resource.name}
            style={{ margin: "10px", padding: "5px", width: "23rem" }}
            onClick={() => handleCardClick(resource)}
          >
            <CardContent>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h5" component="h2">
                  {resource.name.length > 20
                    ? `${resource.name.slice(0, 20)}...`
                    : resource.name}
                </Typography>
                <Box>
                  <IconButton onClick={handleShare}>
                    <Share />
                  </IconButton>
                  <IconButton onClick={() => handleCopyLink(resource.link)}>
                    <FileCopy />
                  </IconButton>
                </Box>
              </Box>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {resource.description.length > 100
                  ? `${resource.description.slice(0, 100)}...`
                  : resource.description}
              </Typography>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "1rem",
                }}
              >
                <Button
                  variant="contained"
                  href={resource.link}
                  target="_blank"
                  startIcon={<OpenInNew />}
                >
                  Visit Resource
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      {selectedResource && (
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            style={{
              margin: "10% auto",
              padding: "20px",
              width: "30rem",
              backgroundColor: "#fff",
            }}
          >
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <Typography variant="h4" component="h2">
                {selectedResource.name}
              </Typography>
              <Close
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                style={{
                  marginLeft: "auto",
                  cursor: "pointer",
                  color: hover ? "#f1f1f1" : "#222",
                }}
                onClick={handleCloseModal}
              />
            </Box>
            <Typography variant="p" style={{ paddingTop: "15px" }}>
              {selectedResource.description}
            </Typography>
            <br />
            <Button
              style={{ marginTop: "30px" }}
              variant="contained"
              href={selectedResource.link}
              target="_blank"
              startIcon={<OpenInNew />}
            >
              Visit Resource
            </Button>
            <Button
              style={{ marginTop: "30px", marginLeft: "30px" }}
              variant="contained"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default SkillsView;
