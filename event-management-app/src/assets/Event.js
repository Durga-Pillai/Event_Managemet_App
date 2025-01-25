class Event {
    constructor(name, venue, image, date, time, description, presenters, genre, capacity) {
        this.name = name;
        this.venue = venue;
        this.image = image;
        this.date = date;
        this.time = time;
        this.description = description;
        this.presenters = presenters;
        this.genre = genre;
        this.capacity = capacity;
    }

    getMonth() {
        let arr = this.date.split(" ");
        return arr[0];
    }

    getDay() {
        let arr = this.date.split(" ");
        return arr[1];
    }

    getDetails() {
        return "Event: ${this.name}";
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getDate() {
        return this.date;
    }

    getVenue() {
        return this.venue;
    }

    getImage() {
        return this.image;
    }

    getTime() {
        return this.time;
    }

    getPresenters() {
        return this.presenters;
    }

    getGenre() {
        return this.genre;
    }

    getCapacity() {
        return this.capacity;
    }

}

export default Event;