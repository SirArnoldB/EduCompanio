import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material";
import {
  CareerRoadmap,
  Internship,
  InterviewPrep,
  Notes,
  Projects,
  SkillsDevelopment,
} from "../../assets";

const Features = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      id="features"
      style={{ paddingBottom: "35px" }}
    >
      <Typography
        variant="h2"
        style={{ margin: "12 auto", textAlign: "center" }}
      >
        Features
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          margin: "20px 40px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Card style={{ width: 360, marginTop: "30px" }}>
          <CardMedia
            component="img"
            height="140"
            image={Internship}
            alt="Internships"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Internships
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Provides a customizable Trello-like board for students to track
              their internship applications, along with their respective
              statuses. Offers a community jobs page to get recently posted internships.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ width: 360, marginTop: "30px" }}>
          <CardMedia
            component="img"
            height="140"
            image={InterviewPrep}
            alt="Interview Prep"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Resources
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Access a wealth of resources to support your personal and professional growth through EduCompanio's Resource Aggregation feature. 
            Discover tips for managing your finances, guidance for maintaining mental health, and connections to valuable organizations and communities.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ width: 360, marginTop: "30px" }}>
          <CardMedia
            component="img"
            height="140"
            image={Projects}
            alt="Projects"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Projects
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Provides a curated list of websites for discovering hackathons and
              open-source projects, catering to students interested in honing
              their technical skills.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ width: 360, marginTop: "30px", marginLeft: "0px" }}>
          <CardMedia component="img" height="140" image={Notes} alt="Notes" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Notes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Allows students to journal about their experiences and take notes,
              ensuring all valuable information is stored in one accessible
              location.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ width: 360, marginTop: "30px" }}>
          <CardMedia
            component="img"
            height="140"
            image={SkillsDevelopment}
            alt="Skills Development"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Skills Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Recommends resources and platforms for students to further develop
              their skills beyond the classroom environment, enhancing their
              professional profile.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ width: 360, marginTop: "30px" }}>
          <CardMedia
            component="img"
            height="140"
            image={CareerRoadmap}
            alt="Career Roadmaps"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Interview Prep
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Elevate your interview skills with EduCompanio's innovative Interview Preparation feature. Our AI Coach chatbot conducts realistic mock interviews, providing personalized feedback to help you ace the real thing. 
              Engage in peer-to-peer interviews to gain valuable insights and confidence.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Features;
