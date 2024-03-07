import { useEffect, useState } from 'react';

const useCommunitySpace = (spaceId) => {
    const [space, setSpace] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCommunitySpace = async () => {
            try {
                // TODO(SirArnoldB) - Add a Comunity Space APi to fetch a single space by id.
                const response = await fetch(`http://localhost:3001/spaces/${spaceId}`);
                const fetchedSpace = await response.json();
                setSpace(fetchedSpace);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCommunitySpace();
    }, [spaceId]);

    return { space, isLoading, error };
};

export default useCommunitySpace;