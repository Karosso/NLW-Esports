import React, { useCallback, useState } from "react";
import { Services } from "../../services/Services";

const UseConnectCard = (adsId: string) => {
  const [discord, setDiscord] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConnect = useCallback(async () => {
    const services = Services();
    try {
      setLoading(true);
      const { discord: response } = await services.getDiscord(adsId);
      setDiscord(response);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }, [adsId]);

  return {
    discord,
    handleConnect,
    loading
  };
};

export default UseConnectCard;
