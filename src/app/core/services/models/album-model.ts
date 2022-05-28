
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


