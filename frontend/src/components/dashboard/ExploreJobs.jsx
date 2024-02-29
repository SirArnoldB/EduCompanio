import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Chip,
} from "@mui/material";
import { Icons8Jobs } from "../../assets/icons8";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExploreJobs = ({ jobs }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: true,
    swipeToSlide: true,
    useCSS: true,
  };

  return (
    <Slider {...settings}>
      {jobs.map((job, index) => (
        <Box key={index}>
          <Card
            key={job.title}
            variant="outlined"
            sx={{
              textAlign: "center",
              borderStyle: "dashed",
              alignContent: "center",
              borderRadius: 2,
              boxShadow: 2,
              padding: 2,
              ml: 1,
            }}
          >
            <CardMedia
              component="img"
              image={Icons8Jobs}
              alt={"project"}
              sx={{ width: "100%", height: 50, objectFit: "scale-down" }}
            />
            <CardHeader
              title={job.title}
              subheader={
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 1,
                    m: 1,
                    mt: 2,
                  }}
                >
                  <Chip label={job.company} />
                  <Chip label={job.location} />
                  <Chip label={job.date} />
                  <Chip label={job.type} />
                </Box>
              }
            />
            <CardActions
              disableSpacing
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Button
                variant="text"
                size="small"
                endIcon={<ArrowForwardIosIcon fontSize="small" />}
              >
                View job
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Slider>
  );
};

ExploreJobs.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default ExploreJobs;
