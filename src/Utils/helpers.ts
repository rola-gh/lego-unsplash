import { IPhoto } from "../@Types/photo";

export interface IPhotos{
    array1: IPhoto[],
    array2: IPhoto[],
    array3: IPhoto[],
}

export const generatePhotoArraies = (Images: IPhoto[]): IPhotos => {
    let i: number = 1;
    const photos: IPhotos = {
        array1: [],
        array2: [],
        array3: []
    }
    Images.forEach((image) => {
        if(i === 1){
            photos.array1.push(image);
            i++;
        }else if(i === 2){
            photos.array2.push(image);
            i++;
        }else if(i === 3){
            photos.array3.push(image);
            i = 1;
        }
    })
    return photos;
}