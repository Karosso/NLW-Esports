import * as Dialog from "@radix-ui/react-dialog";
import { FC, FormEvent } from "react";
import logoNLW from "../../assets/logo-esports.svg";
import { CreateAdBanner } from "../../components/createAdBanner/CreateAdBanner";
import { CreateAdModal } from "../../components/createAdModal/CreateAdModal";
import { GameBanner } from "../../components/gameBanner/GameBanner";
import useHome from "./useHome";
import Carousel from "react-elastic-carousel";
import { ConnectModal } from "../../components/connectModal/ConnectModal";
import { IGame } from "../../models/interface/IGame";

const carouselBreackPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 220, itemsToShow: 2 },
  { width: 440, itemsToShow: 3 },
  { width: 660, itemsToShow: 5 },
  { width: 880, itemsToShow: 6 },
];

interface IHomeProps {}

export const Home: FC<IHomeProps> = ({}) => {
  const { games, handleSubmit, openModal, setOpenModal } = useHome();

  const renderGames = () => {
    if (games === null) {
      return <>Carregando!</>;
    }

    if (games.length === 0) {
      return <>Lista vazia</>;
    }

    return (
      <Carousel breakPoints={carouselBreackPoints} itemPadding={[8]}>
        {games.map((game, key) => (
          <GameBanner key={key} game={game} />
        ))}
      </Carousel>
    );
  };

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoNLW} alt="Logo NLW eSports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="w-[100%] my-8">{renderGames()}</div>

      <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
        <CreateAdBanner />
        <CreateAdModal games={games} onSubmit={handleSubmit} />
      </Dialog.Root>
    </div>
  );
};
