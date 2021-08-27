class Appointment {
    constructor(imageUrl, name, price, description, phoneType, appointmentDate, appointmentTime, creator){
        this.imageUrl = imageUrl;
        this.name = name;
        this.price = price;
        this.description = description;
        this.phoneType = phoneType;
        this.appointmentDate = appointmentDate;
        this.appointmentTime = appointmentTime;
        this.creator = creator;
    }
}

export default Appointment;