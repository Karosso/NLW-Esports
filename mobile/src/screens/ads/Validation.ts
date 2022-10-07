import { ICreateAdsForm } from '../../models/interfaces/IGame';
import { IValidationFormErrors } from '../../models/interfaces/IValidationFrom';

export const validate = (form: ICreateAdsForm) => {
  let errors: IValidationFormErrors = {};
  let hasError = false;

  if (!form.gameId) {
    errors = {
      ...errors,
      gameId: 'Vc esqueceu de selecionar o jogo',
    };
    hasError = true;
  }

  if (!form.name) {
    errors = {
      ...errors,
      name: 'Qual seu nome?',
    };
    hasError = true;
  }

  if (!form.yearsPlaying) {
    errors = {
      ...errors,
      yearsPlaying: 'Há quanto tempo vc joga?',
    };
    hasError = true;
  }

  if (!form.discord) {
    errors = {
      ...errors,
      discord: 'Qual seu discord?',
    };
    hasError = true;
  }

  if (form.weekDays.length === 0) {
    errors = {
      ...errors,
      weekDays: 'Quais dias vc joga?',
    };
    hasError = true;
  }

  if (!form.hoursStart) {
    errors = {
      ...errors,
      hoursStart: 'Joga a partir de que horas?',
    };
    hasError = true;
  }

  if (!form.hoursEnd) {
    errors = {
      ...errors,
      hoursEnd: 'Joga até que horas?',
    };
    hasError = true;
  }

  return {
    errors,
    hasError,
  };
};
