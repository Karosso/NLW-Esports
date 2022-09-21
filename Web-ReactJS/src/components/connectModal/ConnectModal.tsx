import * as Checkbox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import { Check, GameController } from "phosphor-react";
import { FC, FormEventHandler } from "react";
import { Input } from "../input/Input";
import { IGame } from "../../models/interface/IGame";
import UseConnectModal from "./UseConnectModal";
import Carousel from "react-elastic-carousel";
import ConnectCard from "../connectCard/ConnectCard";

interface IConnectModalProps {
  game: IGame;
  // onSubmit: FormEventHandler<HTMLFormElement>;
}

export const ConnectModal: FC<IConnectModalProps> = ({ game }) => {

  const { adsList } = UseConnectModal(game.id);

  const renderAds = () => {
    if (adsList === null) {
      return <>Carregando!</>;
    }

    if (adsList.length === 0) {
      return <>Lista vazia</>;
    }

    return (
      <Carousel disableArrowsOnEnd itemsToShow={1} itemPadding={[6]} pagination={false}>
        {adsList.map((ads, key) => (
          <ConnectCard key={key} ads={ads} />
        ))}
      </Carousel>
    );
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-galaxy bg-no-repeat bg-cover py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl text-white font-black mb-4">{game?.title}</Dialog.Title>
        <img src={game?.bannerUrl} alt="game cover" className="w-[100%] rounded-lg h-[250px] object-cover" />
        <Dialog.Description className="text-zinc-400 py-4">Conecte-se e comece a jogar!</Dialog.Description>
        <div className="w-[100%] my-8">{renderAds()}</div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
