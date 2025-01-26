class Event {
    constructor(name, venue, image, startDate, endDate, time, description, presenters, genre, capacity) {
        this.name = name;
        this.venue = venue;
        this.image = image;
        this.startDate = startDate;
        this.endDate = endDate;
        this.time = time;
        this.description = description;
        this.presenters = presenters;
        this.genre = genre;
        this.capacity = capacity;
    }

    getMonth() {
        let arr = this.startDate.split(" ");
        return arr[0];
    }

    getDay() {
        let arr = this.startDate.split(" ");
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

    getStartDate() {
        return this.startDate;
    }

    getEndDate() {
        return this.endDate;
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