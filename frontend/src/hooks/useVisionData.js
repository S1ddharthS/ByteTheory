import { useState, useEffect } from 'react';
import { getDatasetStats, getDatasetImage, getMetrics, getComparison } from '../api/client';

export function useVisionData(imageId = 1) {
  const [data, setData] = useState({
    stats: null,
    image: null,
    metrics: null,
    comparison: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    // Fetch all four APIs simultaneously using Promise.all as requested
    Promise.all([
      getDatasetStats(),
      getDatasetImage(imageId),
      getMetrics(),
      getComparison()
    ])
      .then(([stats, image, metrics, comparison]) => {
        if (isMounted) {
          setData({ stats, image, metrics, comparison });
          setLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });

    return () => { isMounted = false; };
  }, [imageId]);

  return { ...data, loading, error };
}
