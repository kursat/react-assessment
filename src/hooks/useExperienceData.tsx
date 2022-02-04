import { useEffect, useState } from 'react';

interface Experience {
  name: string;
  shortDescription: string;
  memberInfo: string;
  description: string;
  icon: string;
}

const useExperienceData = () => {
  const [data, setData] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:4000/experiences', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((response: Experience[]) => setData(response))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    data,
  };
};

export default useExperienceData;
