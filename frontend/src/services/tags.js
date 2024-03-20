import request from "../utilities/api";

const tagsUrl = "/api/tags";

const getAllOrganizationTags = () => request("GET", `${tagsUrl}/organizations`);
const getAllSkillTags = () => request("GET", `${tagsUrl}/skills`);
const getAllCommunityJobTags = () => request("GET", `${tagsUrl}/communityjobs`);
const getAllCommunityProjectTags = () => request("GET", `${tagsUrl}/communityprojects`);
const getAllHealthTags = () => request("GET", `${tagsUrl}/health`);
const getAllFinanceTags = () => request("GET", `${tagsUrl}/finance`);

export default {
    getAllOrganizationTags,
    getAllSkillTags,
    getAllCommunityJobTags,
    getAllCommunityProjectTags,
    getAllHealthTags,
    getAllFinanceTags
};