import { Toast } from 'native-base';

export function showToast(message, type, buttonText) {
    console.warn(message);
    console.warn(type);
    console.warn(buttonText);
    return Toast.show({
        text: message,
        buttonText: buttonText,
        type: type
    });
}