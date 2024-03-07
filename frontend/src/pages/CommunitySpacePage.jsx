import { Helmet } from "react-helmet-async";
import CommunitySpaceView from "../views/CommunitySpaceView";
import { useParams } from "react-router-dom";
import useCommunitySpace from "../hooks/useCommunitySpace";
import LoadingSpinner from "../components/common/LoadingSpinner";

const CommunitySpacePage = () => {
  const { spaceId } = useParams();
  const { space, isLoading, error } = useCommunitySpace(spaceId);

  if (isLoading) return <LoadingSpinner label="your space..." />;
  // TODO (SirArnoldB): If there's an error, show the 404 page.
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Helmet>
        <title>{space.title}</title>
      </Helmet>
      <CommunitySpaceView space={space} />
    </>
  );
};

export default CommunitySpacePage;
