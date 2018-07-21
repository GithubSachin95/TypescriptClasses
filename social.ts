class User{
    name: string;
    email: string;
    birthday: string;
    about: string;
    quote: string;
    status: string;
    gender: string;
    likedMovies: string[];
    likedPages: string[];
    noOfFriends: number;
    occupation: string;

    constructor(_name: string, _email: string, _birthday: string,
        _about: string, _quote: string, _status: string,
        _gender: string, _likedMovies: string[], _likedPages: string[],
        _noOfFriends : number ,_occupation?:string ) {
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
    //getters
    getName = () => {
        return this.name;
    }
    getQuote = () => {
        return this.quote;
    }
    getEmail = () => {
        return this.email;
    }
    getBirthday = () => {
        return this.birthday;
    }
    getAbout = () => {
        return this.about;
    }
    getStatus = () => {
        return this.status;
    }
    getGender = () => {
        return this.gender;
    }
    getLikedMovies = () => {
        return this.likedMovies;
    }
    getLikedPages = () => {
        return this.likedPages;
    }
    getFriendsNumber = () => {
        return this.noOfFriends;
    }
    getOccupation = () => {
        return this.occupation;
    }
    //Age of user
    getAge=(dateString: string)=> {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

}

let sachin = new User("Sachin Dukale", "dukale.sachin@gmail.com", "1995/05/30", "Hi there my name is Sachin", "Until you don't hear your beating heart", "Single", "Male", ["Avengers", "JusticeLeague"], ["Nike", "Myntra"], 562, "Software Engineer");
console.log("Name : " + sachin.getName());
console.log("Email : " + sachin.email);
console.log("About : " +sachin.getAbout());
console.log("Birthday : " + sachin.getBirthday());
let birthdate = sachin.getBirthday();
console.log("Age : " +sachin.getAge(birthdate));
console.log("Gender : " +sachin.getGender());
console.log("Liked Movies : " + sachin.getLikedMovies());
console.log("Liked Pages  : " + sachin.getLikedPages());
console.log("Total friends : " + sachin.getFriendsNumber());
console.log("Occupation : " + sachin.getOccupation());
console.log("Quotes : " + sachin.getQuote());
