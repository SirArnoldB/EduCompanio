import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SearchBar from "../common/SearchBar";
import FinanceResourcesData from "../../data/finance-resources.json";
import ResourceCard from "./ResourcesCard";
import FilterButtonGroup from "../common/FilterButtonGroup";
import { Icons8MoneyBox } from "../../assets/icons8";

const FinanceResources = () => {
  const [financeData, setFinanceData] = useState(FinanceResourcesData);
  const [searchInput, setSearchInput] = useState("");
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    const filteredFinanceData = FinanceResourcesData.filter((resource) => {
      if (currentFilter === "All") {
        return resource;
      } else {
        return resource.tags.includes(currentFilter.toLowerCase());
      }
    });

    setFinanceData(
      filteredFinanceData.filter((resource) =>
        resource.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, currentFilter]);

  const handleSearch = (searchInput) => {
    setSearchInput(searchInput);
  };

  const handleAdd = () => {
    console.log("Add button clicked");
  };

  return (
    <>
      <SearchBar
        onSearch={handleSearch}
        setAddModalOpen={handleAdd}
        boardType="finance resource"
      />
      <FilterButtonGroup
        filters={[
          { value: "All", active: true },
          { value: "Budgeting", active: false },
          { value: "Student Loans", active: false },
          { value: "Investing", active: false },
          { value: "Credit", active: false },
          { value: "Personal Finance", active: false },
        ]}
        setCurrentFilter={setCurrentFilter}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 2,
          mt: 2,
        }}
      >
        {financeData.map((resource, index) => (
          <ResourceCard
            key={index}
            resource={resource}
            resourceIcon={Icons8MoneyBox}
          />
        ))}
      </Box>
    </>
  );
};

export default FinanceResources;
