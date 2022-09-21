import * as Checkbox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import { Check, GameController } from "phosphor-react";
import { FC, FormEventHandler } from "react";
import { Input } from "../../components/input/Input";
import { IGame } from "../../models/interface/IGame";

type unwanted = "_count" | "bannerUrl";

interface IGameOptions extends Omit<IGame, unwanted> {}

interface ICreateAdModalProps {
  games: IGameOptions[] | null;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const CreateAdModal: FC<ICreateAdModalProps> = ({ games, onSubmit }) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl text-white font-black">Publique um anúncio</Dialog.Title>
        <form className="mt-8 flex flex-col gap-4" onSubmit={onSubmit}>
          <label className="font-semibold" htmlFor="hoursPlaying">
            Qual o game?
          </label>
          <select
            id="game"
            name="game"
            placeholder="Selecione o game que deseja jogar"
            className="bg-zinc-900 py-3 px-3 rounded text-sm placeholder:text-zinc-500 appearance-none"
            style={{
              background:
                "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==) no-repeat right",
              backgroundPositionX: "97%",
              backgroundColor: "#18181B",
              color: "rgb(113 113 122 / var(--tw-text-opacity))",
            }}
            required
          >
            <option value="" hidden>
              Selecione o game que deseja jogar
            </option>
            {games &&
              games.map((it) => (
                <option key={it.id} value={it.id}>
                  {it.title}
                </option>
              ))}
          </select>
          <Input
            id="name"
            name="name"
            label="Seu nome"
            placeholder="Como é seu nick no game?"
            InputProps={{ required: true }}
          />

          <div className="grid grid-cols-2 gap-6">
            <Input
              id="yearsPlaying"
              name="yearsPlaying"
              label="Joga a quantos anos?"
              placeholder="Tudo bem ser zero"
              InputProps={{ type: "number", required: true }}
            />
            <Input
              id="discord"
              name="discord"
              label="Qual seu Discord?"
              placeholder="Ex. Usuário#0000"
              InputProps={{ type: "text", required: true }}
            />
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="hoursPlaying">
                Quais dias vc joga?
              </label>

              <div className="flex gap-1 items-center h-[100%]">
                <div className="flex gap-1 items-center h-[100%]">
                  <Checkbox.Root
                    className="w-6 h-6 rounded bg-zinc-900 font-semibold data-state-checked:bg-violet-500"
                    name="Dom"
                    id="Dom"
                  >
                    D
                  </Checkbox.Root>
                </div>
                <div className="flex gap-1 items-center h-[100%]">
                  <Checkbox.Root
                    className="w-6 h-6 rounded bg-zinc-900 font-semibold data-state-checked:bg-violet-500"
                    name="Seg"
                    id="Seg"
                  >
                    S
                  </Checkbox.Root>
                </div>
                <div className="flex gap-1 items-center h-[100%]">
                  <Checkbox.Root
                    className="w-6 h-6 rounded bg-zinc-900 font-semibold data-state-checked:bg-violet-500"
                    name="Ter"
                    id="Ter"
                  >
                    T
                  </Checkbox.Root>
                </div>
                <div className="flex gap-1 items-center h-[100%]">
                  <Checkbox.Root
                    className="w-6 h-6 rounded bg-zinc-900 font-semibold data-state-checked:bg-violet-500"
                    name="Qua"
                    id="Qua"
                  >
                    Q
                  </Checkbox.Root>
                </div>
                <div className="flex gap-1 items-center h-[100%]">
                  <Checkbox.Root
                    className="w-6 h-6 rounded bg-zinc-900 font-semibold data-state-checked:bg-violet-500"
                    name="Qui"
                    id="Qui"
                  >
                    Q
                  </Checkbox.Root>
                </div>
                <div className="flex gap-1 items-center h-[100%]">
                  <Checkbox.Root
                    className="w-6 h-6 rounded bg-zinc-900 font-semibold data-state-checked:bg-violet-500"
                    name="Sex"
                    id="Sex"
                  >
                    S
                  </Checkbox.Root>
                </div>
                <div className="flex gap-1 items-center h-[100%]">
                  <Checkbox.Root
                    className="w-6 h-6 rounded bg-zinc-900 font-semibold data-state-checked:bg-violet-500"
                    name="Sáb"
                    id="Sáb"
                  >
                    S
                  </Checkbox.Root>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label className="font-semibold" htmlFor="hoursPlaying">
                Qual horário vc joga?
              </label>
              <div id="hoursPlaying" className="grid grid-cols-2 gap-2">
                <Input
                  id="hoursStart"
                  name="hoursStart"
                  placeholder="de"
                  InputProps={{ type: "time",required: true, style: { paddingLeft: 8, paddingRight: 8 } }}
                />
                <Input
                  id="hoursEnd"
                  name="hoursEnd"
                  placeholder="até"
                  InputProps={{ type: "time",required: true, style: { paddingLeft: 8, paddingRight: 8 } }}
                />
              </div>
            </div>
          </div>

          <label className="flex gap-2 items-center mt-2 text-sm hover:cursor-pointer">
            <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900" name="useVoiceChannel" id="useVoiceChannel">
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo usar chat de voz
          </label>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close type="button" className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
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
  );
};
