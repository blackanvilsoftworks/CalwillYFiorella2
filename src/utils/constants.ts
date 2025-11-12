import { iGlobalInfo } from '../interfaces/iGlobalInfo.js';

export const globalInfo: iGlobalInfo = {
    name        : 'calwill & fiorella',
    phoneNumber : '+54 9 11-5959-0586',
    email       : 'calwillyfiorella@gmail.com'
};

export const imagesPath: string = './src/assets/images/';

export const nameRegex          : RegExp = /^[A-Za-z\s]+$/;
export const phoneNumberRegex   : RegExp = /^[0-9]{10}$/;
export const messageRegex       : RegExp = /^[A-Za-z0-9\-\s]/g; // todo Que esto valide que no se metan símbolos extraños. Que se puedan poner , y .
