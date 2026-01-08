class Media{
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}
class Book extends Media{
    constructor(songData){
        super(songData);
        this.artist = songData.artist;
    }
}