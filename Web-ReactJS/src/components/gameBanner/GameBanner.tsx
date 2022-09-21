import React, { FC } from "react";
import { MagnifyingGlassPlus } from "phosphor-react";
import { IGame } from "../../models/interface/IGame";
import * as Dialog from "@radix-ui/react-dialog";
import { ConnectModal } from "../connectModal/ConnectModal";

interface IGameBannerProps {
  game: IGame;
}

export const GameBanner: FC<IGameBannerProps> = ({ game }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="relative rounded-lg overflow-hidden">
        <img src={game.bannerUrl} alt="game cover" />
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">{game.title}</strong>
          <span className="text-zinc-300 text-sm block">{game._count.ads} anuncio(s)</span>
        </div>
      </Dialog.Trigger>
      <ConnectModal game={game} />
    </Dialog.Root>
  );
};
