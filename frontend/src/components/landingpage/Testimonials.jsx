    import { useState } from "react";
    import { styled } from "@mui/material/styles";
    import Box from "@mui/material/Box";
    import Paper from "@mui/material/Paper";
    import Typography from "@mui/material/Typography";
    import Avatar from "@mui/material/Avatar";
    import Grid from "@mui/material/Grid";

    const testimonialData = [
        {
            id: 1,
            name: "John Doe",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo quis ex bibendum, vel bibendum sapien bibendum. Sed euismod justo quis ex bibendum, vel bibendum sapien bibendum.",
            image: "https://i.pravatar.cc/300?img=1",
        },
        {
            id: 2,
            name: "Jane Doe",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo quis ex bibendum, vel bibendum sapien bibendum. Sed euismod justo quis ex bibendum, vel bibendum sapien bibendum.",
            image: "https://i.pravatar.cc/300?img=2",
        },
        {
            id: 3,
            name: "Bob Smith",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo quis ex bibendum, vel bibendum sapien bibendum. Sed euismod justo quis ex bibendum, vel bibendum sapien bibendum.",
            image: "https://i.pravatar.cc/300?img=3",
        },
    ];

    const TestimonialContainer = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    const Testimonials = () => {
        const [testimonials, setTestimonials] = useState(testimonialData);

        return (
            <Box sx={{ flexGrow: 1 }} style={{paddingBottom: '100px', backgroundColor: '#f1f1f1' }} id='testimonials'>
                <Typography variant='h2' style={{margin: '20 auto', textAlign: 'center', paddingTop: '90px'}}>Testimonials</Typography>
                <Grid container spacing={2}>
                    {testimonials.map((testimonial) => (
                        <Grid item xs={12} sm={4} key={testimonial.id}>
                            <TestimonialContainer style={{border: '1px solid #1d587de8'}}>
                                <Avatar
                                    alt={testimonial.name}
                                    src={testimonial.image}
                                    sx={{ width: 64, height: 64, margin: "auto" }}
                                />
                                <Typography variant="h6" gutterBottom>
                                    {testimonial.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {testimonial.description}
                                </Typography>
                            </TestimonialContainer>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    };

    export default Testimonials;
