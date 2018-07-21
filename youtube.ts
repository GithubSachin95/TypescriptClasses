class video { 
    title: string; //
    videoCategory: string;//
    videoLength: number;//
    views: number;
    videoChannel: string;
    likes: number;
    dislikes: number;
    totalsubscribers: number;
    comments: string[];
    commentEnable: boolean;    
    availableQuality: string[];
    //Constructor for class
    constructor(_title: string, _videoCategory: string, _videoLength: number, _views: number, _likes: number,
                _dislikes: number, _subscribers: number, _comments: string[], _commentEnable: boolean,
            _videoChannel: string , _availableQuanlity : string[]) {
        this.title = _title;
        this.videoCategory = _videoCategory;
        this.videoLength = _videoLength;
        this.views = _views;
        this.videoChannel = _videoChannel;
        this.likes = _likes;
        this.dislikes = _dislikes;
        this.totalsubscribers = _subscribers; 
        this.comments = _comments;
        this.commentEnable = _commentEnable;
        this.availableQuality = _availableQuanlity;
    }
    //getters
    getVideoTitle = () => {
        return this.title;
    }
    getVideoCategory = () => {
        return this.videoCategory;
    }
    getVideoData = () => { 
        return "This function will be used to fetch video data";
    }
    getVideoLength = () => { 
        return this.videoLength;
    }
    getLikes = () => { 
        return this.likes;
    }
    getDislikes = () => { 
        return this.dislikes;
    }
    getSubscribers = () => { 
        return this.totalsubscribers;
        
    }
    getRelatedVideos = () => { 
        return "This function will be used to fetch related videos";
    }
    getCommentEnable = () => {
        return this.commentEnable;
    }

    getComments = () => {
        if (this.commentEnable == true) {
            return this.comments;
        }
        else {
            return "Comments are disabled for this video"
        }
    }
    getVideoQuality = () => {
        return this.availableQuality;
    }

    //setters
     setVideoTitle = (_title : string) => {
         this.title = _title;
         console.log("Title : " +this.title);
    }
    setVideoCategory = (_videoCategory : string) => {
        this.videoCategory = _videoCategory;
        console.log("Category : " +this.videoCategory);

    }
    setVideoData = () => { 
        console.log ("This function will be set the video data");
    }
    setVideoLength = (_videoLength : number) => { 
        this.videoLength = _videoLength;
        console.log("Length : " +this.videoLength);
    }
    setLikes = (_likes : number) => { 
        this.likes = _likes;
        console.log("Likes : " +this.likes);
    }
    setDislikes = (_dislikes: number) => { 
        this.dislikes = _dislikes;
        console.log("Dislikes : " +this.dislikes);
        
    }
    setSubscribers = (_totalSubscribers : number) => { 
        this.totalsubscribers = _totalSubscribers;
        console.log("No of subsribers : " +this.totalsubscribers);
        
    }
    setRelatedVideos = () => { 
        console.log("This function will set related videos");
    }
    setCommentEnable = (_commentEnable : boolean) => {
        this.commentEnable = _commentEnable;
        console.log("Comment Enable : " +this.commentEnable);
    }

    setComments = (_comments : string[]) => {
        if (this.commentEnable == true) {
            this.comments = _comments;
            console.log("Comments :" +this.comments);
        } else {
            console.log("Comments are disabled for this video");
        }
    }
    setVideoQuality = (_videoQuality : string[]) => {
        this.availableQuality = _videoQuality;
    }

    


}

let video1 = new video("Avengers : Infinity War cinematic trailer","sci-fi",4.12,12000,190000,14,45000,["Great Movie","Mr. Stark!!"],true,"MarvelStudios",["144p","240p","360p","480p","720p","1080p","1080p6Ofps"]);
console.log("Title :", video1.getVideoTitle());
console.log("Category :", video1.getVideoCategory());
console.log(video1.getVideoData());
console.log("Length :", video1.getVideoLength());
console.log("Likes :" , video1.getLikes());
console.log("Dislikes :" , video1.getDislikes());
console.log("No of subscribers :" , video1.getSubscribers());
console.log(video1.getRelatedVideos());
console.log("Comment Enable :" ,video1.getCommentEnable());
console.log("Comments :" , video1.getComments());
console.log("Quality:", video1.getVideoQuality());

console.log("**** Now setting new object properties using setters ***");
video1.setVideoTitle("God of war 4 Story Trailer");
video1.setLikes(150000);
video1.setCommentEnable(false);
video1.setDislikes(22); 
video1.setComments(["This is so cool", "Lit"]);
video1.setRelatedVideos();
video1.setVideoLength(5.13);
video1.setVideoCategory("gaming");
video1.setVideoQuality(["144p", "240p", "720p", "1080p", "1440p"]);
console.log("Quality:", video1.getVideoQuality());
video1.setVideoData();