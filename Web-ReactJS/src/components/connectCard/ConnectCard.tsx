import React, { FC, useCallback, useState } from "react";
import { getWeekDays } from "../../utils/Utils";
import { IAds } from "../../models/interface/IAds";
import { DiscordLogo } from "phosphor-react";
import { CircularProgress } from '@mui/material';
import UseConnectCard from "./UseConnectCard";

const Item: FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div className="mb-4">
      <p className="text-[#C4C4C4]">{label}</p>
      <p className={`font-semibold text-sm text-clip truncate max-w-[100%]`}>{value}</p>
    </div>
  );
};

interface DuoCardProps {
  ads: IAds;
}

const ConnectCard: FC<DuoCardProps> = ({ ads }) => {
  const { discord, handleConnect, loading } = UseConnectCard(ads.id);

  return (
    <div className="bg-[#2A2634] p-6 rounded-lg w-[290px] shadow-lg shadow-black/25">
      <Item label="Nome" value={ads.name} />
      <Item label="Tempo de jogo" value={`${ads.yearsPlaying.toString()} ano(s)`} />
      <Item label="Disponibilidade" value={getWeekDays(ads.weekDays)} />
      <Item label="Horário" value={`De ${ads.hoursStart} até ${ads.hoursEnd} hrs`} />
      <Item label="Chamada de áudio?" value={ads.useVoiceChannel ? "Sim" : "Não"} />

      <button
        onClick={handleConnect}
        disabled={!!discord}
        className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex gap-3 items-center justify-center w-[100%]"
      >
        {loading ? (
          <CircularProgress size={32} style={{color: "white"}}/>
        ) : (
          <>
            <DiscordLogo size={32} />
            <span>{discord ? discord : "Discord"}</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ConnectCard;
