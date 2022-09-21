import React, { useEffect, useState } from 'react'
import { IAds } from '../../models/interface/IAds';
import { Services } from '../../services/Services';

const UseConnectModal = (gameId: string) => {
  const [adsList, setAdsList] = useState<IAds[] | null>(null)

  useEffect(() => {
    const services = Services()
    const getAdsList = async (gameId: string) => {
      try {
        const result = await services.getAdsByGame(gameId);
        setAdsList(result.map(ads => ({
          ...ads,
          weekDays: ads.weekDays.map(it => Number(it)),
        })))
      } catch (error) {
        console.log({error})
      }
    }
  
    getAdsList(gameId)
  }, [gameId])
  

  return {
    adsList
  }
}

export default UseConnectModal;