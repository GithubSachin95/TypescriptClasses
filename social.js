var User = /** @class */ (function () {
    function User(_name, _email, _birthday, _about, _quote, _status, _gender, _likedMovies, _likedPages, _noOfFriends, _occupation) {
        var _this = this;
        //getters
        this.getName = function () {
            return _this.name;
        };
        this.getQuote = function () {
            return _this.quote;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getAbout = function () {
            return _this.about;
        };
        this.getStatus = function () {
            return _this.status;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getLikedMovies = function () {
            return _this.likedMovies;
        };
        this.getLikedPages = function () {
            return _this.likedPages;
        };
        this.getFriendsNumber = function () {
            return _this.noOfFriends;
        };
        this.getOccupation = function () {
            return _this.occupation;
        };
        //Age of user
        this.getAge = function (dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        };
        this.name = _name;
        this.email = _email;
        this.birthday = _birthday;
        this.about = _about;
        this.status = _status;
        this.gender = _gender;
        this.likedMovies = _likedMovies;
        this.likedPages = _likedPages;
        this.noOfFriends = _noOfFriends;
        this.occupation = _occupation;
        this.quote = _quote;
    }
    return User;
}());
var sachin = new User("Sachin Dukale", "dukale.sachin@gmail.com", "1995/05/30", "Hi there my name is Sachin", "Until you don't hear your beating heart", "Single", "Male", ["Avengers", "JusticeLeague"], ["Nike", "Myntra"], 562, "Software Engineer");
console.log("Name : " + sachin.getName());
console.log("Email : " + sachin.email);
console.log("About : " + sachin.getAbout());
console.log("Birthday : " + sachin.getBirthday());
var birthdate = sachin.getBirthday();
console.log("Age : " + sachin.getAge(birthdate));
console.log("Gender : " + sachin.getGender());
console.log("Liked Movies : " + sachin.getLikedMovies());
console.log("Liked Pages  : " + sachin.getLikedPages());
console.log("Total friends : " + sachin.getFriendsNumber());
console.log("Occupation : " + sachin.getOccupation());
console.log("Quotes : " + sachin.getQuote());
