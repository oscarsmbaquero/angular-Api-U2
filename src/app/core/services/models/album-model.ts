//import { IAlbum } from './../../../pages/album-list/models/gallery-models';
export interface IAlbum{

    id: string;
    name: string;
    image: string;
    year: number;
    songs:ISong[];
    


}

export interface ISong{
    title:string
}


