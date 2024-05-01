import { Helmet } from "react-helmet-async";
import CommunitySpaceView from "../views/CommunitySpaceView";
import { useParams } from "react-router-dom";
import spaceData from "../data/spaces.json";

const CommunitySpacePage = () => {
  const { spaceId } = useParams();
  const space = spaceData.spaces.find((s) => s.id === parseInt(spaceId));

  if (!space) return <div>Error Fetching Space</div>;

  return (
    <>
      <Helmet>
        <title>{space.title}</title>
      </Helmet>
      <CommunitySpaceView
        space={space}
        posts={spaceData.posts.filter((p) => p.space === space.id)}
      />
    </>
  );
};

export default CommunitySpacePage;
