import {picturesMock} from "./picturesMock";

export const mockService = (path: string, params: {}): Promise<unknown> => {
    let response = {};

    switch (path) {
        case "pictures":
            response = picturesMock;
            break;
    }

    return Promise.resolve(response);
}