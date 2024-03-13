import { useState } from "react";
import { Box, Button, ButtonGroup } from "@mui/material";
import "../../css/Skills.css";
import CommunityEventsData from "../../data/community-events.json";
import SearchBar from "../common/SearchBar";
import CommunityEventsCard from "./CommunityEventsCard";

const MyEvents = () => {


    const handleSearch = (searchInput) => {
        console.log(searchInput);
    };

    const handleAdd = () => {
        console.log("Add button clicked");
    };

    return (
        <>
            <SearchBar
                onSearch={handleSearch}
                setAddModalOpen={handleAdd}
                boardType="event"
            />

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: 2,
                    mt: 2,
                }}
            >
                {CommunityEventsData.map((event, index) => (
                    <CommunityEventsCard key={index} event={event} />
                ))}
            </Box>
        </>
    );
};

export default MyEvents;
