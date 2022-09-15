import React, { FC } from "react";
import { CreateAdBanner } from "../../components/createAdBanner/CreateAdBanner";
import { GameBanner } from "../../components/gameBanner/GameBanner";
import logoNLW from "../../assets/logo-esports.svg";
import useHome from "./useHome";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { Input } from "../../components/input/Input";

interface IHomeProps {}

export const Home: FC<IHomeProps> = ({}) => {
  const { games } = useHome();

  const rendeGames = () => {
    if (games === null) {
      return <>Carregando!</>;
    }

    if (games.length === 0) {
      return <>Lista vazia</>;
    }

    return games.map((game, key) => <GameBanner key={key} game={game} />);
  };

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoNLW} alt="Logo NLW eSports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">{rendeGames()}</div>
      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl text-white font-black">Publique um anúncio</Dialog.Title>
            <form className="mt-8 flex flex-col gap-4">
              <Input id="game" label="Qual o game?" placeholder="Selecione o game que deseja jogar" />
              <Input id="name" label="Seu nome" placeholder="Como é seu nick no game?" />

              <div className="grid grid-cols-2 gap-6">
                <Input
                  id="yearsPlaying"
                  label="Joga a quantos anos?"
                  placeholder="Tudo bem ser zero"
                  InputProps={{ type: "number" }}
                />
                <Input
                  id="discord"
                  label="Qual seu Discord?"
                  placeholder="Ex. Usuário#0000"
                  InputProps={{ type: "text" }}
                />
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="hoursPlaying">
                    Quais dias vc joga?
                  </label>
                  <div className="flex gap-1 items-center h-[100%]">
                    <button className="w-6 h-6 rounded bg-zinc-900 font-semibold" title="Domingo">
                      D
                    </button>
                    <button className="w-6 h-6 rounded bg-zinc-900 font-semibold" title="Segunda">
                      S
                    </button>
                    <button className="w-6 h-6 rounded bg-zinc-900 font-semibold" title="Terça">
                      T
                    </button>
                    <button className="w-6 h-6 rounded bg-zinc-900 font-semibold" title="Quarta">
                      Q
                    </button>
                    <button className="w-6 h-6 rounded bg-zinc-900 font-semibold" title="Quinta">
                      Q
                    </button>
                    <button className="w-6 h-6 rounded bg-zinc-900 font-semibold" title="Sexta">
                      S
                    </button>
                    <button className="w-6 h-6 rounded bg-zinc-900 font-semibold" title="Sábado">
                      S
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="font-semibold" htmlFor="hoursPlaying">
                    Qual horário vc joga?
                  </label>
                  <div id="hoursPlaying" className="grid grid-cols-2 gap-2">
                    <Input id="hoursStart" placeholder="de" InputProps={{ type: "time" }} />
                    <Input id="hoursEnd" placeholder="até" InputProps={{ type: "time" }} />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-center mt-2 text-sm">
                <Input id="useVoiceChat" placeholder="até" InputProps={{ type: "checkbox" }} />
                Costumo usar chat de voz
              </div>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close 
                  type="button"
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                >
                  Cancelar
                </Dialog.Close>
                <button
                  type="submit"
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                >
                  <GameController size={24} />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
