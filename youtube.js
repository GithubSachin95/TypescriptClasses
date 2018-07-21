var video = /** @class */ (function () {
    //Constructor for class
    function video(_title, _videoCategory, _videoLength, _views, _likes, _dislikes, _subscribers, _comments, _commentEnable, _videoChannel, _availableQuanlity) {
        var _this = this;
        //getters
        this.getVideoTitle = function () {
            return _this.title;
        };
        this.getVideoCategory = function () {
            return _this.videoCategory;
        };
        this.getVideoData = function () {
            return "This function will be used to fetch video data";
        };
        this.getVideoLength = function () {
            return _this.videoLength;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getSubscribers = function () {
            return _this.totalsubscribers;
        };
        this.getRelatedVideos = function () {
            return "This function will be used to fetch related videos";
        };
        this.getCommentEnable = function () {
            return _this.commentEnable;
        };
        this.getComments = function () {
            if (_this.commentEnable == true) {
                return _this.comments;
            }
            else {
                return "Comments are disabled for this video";
            }
        };
        this.getVideoQuality = function () {
            return _this.availableQuality;
        };
        //setters
        this.setVideoTitle = function (_title) {
            _this.title = _title;
            console.log("Title : " + _this.title);
        };
        this.setVideoCategory = function (_videoCategory) {
            _this.videoCategory = _videoCategory;
            console.log("Category : " + _this.videoCategory);
        };
        this.setVideoData = function () {
            console.log("This function will be set the video data");
        };
        this.setVideoLength = function (_videoLength) {
            _this.videoLength = _videoLength;
            console.log("Length : " + _this.videoLength);
        };
        this.setLikes = function (_likes) {
            _this.likes = _likes;
            console.log("Likes : " + _this.likes);
        };
        this.setDislikes = function (_dislikes) {
            _this.dislikes = _dislikes;
            console.log("Dislikes : " + _this.dislikes);
        };
        this.setSubscribers = function (_totalSubscribers) {
            _this.totalsubscribers = _totalSubscribers;
            console.log("No of subsribers : " + _this.totalsubscribers);
        };
        this.setRelatedVideos = function () {
            console.log("This function will set related videos");
        };
        this.setCommentEnable = function (_commentEnable) {
            _this.commentEnable = _commentEnable;
            console.log("Comment Enable : " + _this.commentEnable);
        };
        this.setComments = function (_comments) {
            if (_this.commentEnable == true) {
                _this.comments = _comments;
                console.log("Comments :" + _this.comments);
            }
            else {
                console.log("Comments are disabled for this video");
            }
        };
        this.setVideoQuality = function (_videoQuality) {
            _this.availableQuality = _videoQuality;
        };
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
    return video;
}());
var video1 = new video("Avengers : Infinity War cinematic trailer", "sci-fi", 4.12, 12000, 190000, 14, 45000, ["Great Movie", "Mr. Stark!!"], true, "MarvelStudios", ["144p", "240p", "360p", "480p", "720p", "1080p", "1080p6Ofps"]);
console.log("Title :", video1.getVideoTitle());
console.log("Category :", video1.getVideoCategory());
console.log(video1.getVideoData());
console.log("Length :", video1.getVideoLength());
console.log("Likes :", video1.getLikes());
console.log("Dislikes :", video1.getDislikes());
console.log("No of subscribers :", video1.getSubscribers());
console.log(video1.getRelatedVideos());
console.log("Comment Enable :", video1.getCommentEnable());
console.log("Comments :", video1.getComments());
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
