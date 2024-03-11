import { Helmet } from "react-helmet-async";
import CommunitySpaceView from "../views/CommunitySpaceView";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/common/LoadingSpinner";
import useFetch from "../hooks/useFetch";

const CommunitySpacePage = () => {
  const { spaceId } = useParams();

  const {
    data: space,
    isPending: isLoading,
    error,
  } = useFetch(`http://localhost:3001/spaces?id=${spaceId}`);

  if (isLoading) return <LoadingSpinner label="your space..." />;
  // TODO (SirArnoldB): If there's an error, show the 404 page.
  if (error) return <div>Error Fetching Space: {error.message}</div>;

  return (
    <>
      <Helmet>
        <title>{space.title}</title>
      </Helmet>
      <CommunitySpaceView space={space[0]} />
    </>
  );
};

export default CommunitySpacePage;
