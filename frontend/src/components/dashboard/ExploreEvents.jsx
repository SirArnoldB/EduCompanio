import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { Icons8Events } from "../../assets/icons8";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExploreEvents = ({ events }) => {
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
      {events.map((event, index) => (
        <Box key={index}>
          <Card
            key={event.title}
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
              image={Icons8Events}
              alt={"project"}
              sx={{
                width: "100%",
                height: 50,
                objectFit: "scale-down",
              }}
            />
            <CardHeader
              title={`${event.title.substring(0, 50)}...`}
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
                  <Chip label={event.date} />
                  <Chip label={event.time} />
                  <Chip label={event.location} />
                </Box>
              }
            />
            <CardContent>
              <Typography paragraph>
                {`${event.description.substring(0, 50)}...`}
              </Typography>
            </CardContent>
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
                View event
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Slider>
  );
};

ExploreEvents.propTypes = {
  events: PropTypes.array.isRequired,
};

export default ExploreEvents;
