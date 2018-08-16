import errorMessages from '../shared/error-message.json';

export const errorMessageService = {
    getErrorByName: (messageName, language = "pt-br") => {
        return errorMessages[language][messageName];
    }
}