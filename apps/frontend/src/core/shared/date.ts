export class DateEvent{
    static format(date: Date = new Date()): string{
        const pad = (number: number) => number.toString().padStart(2, "0");

        const dateParts = date;
        const year = dateParts.getFullYear();
        const month = pad(dateParts.getMonth() + 1);
        const day = pad(dateParts.getDate());
        const hour = pad(dateParts.getHours());
        const minute = pad(dateParts.getMinutes());

        return `${year}-${month}-${day}T${hour}:${minute}`;
    }

    static unformat(date: string): Date{
        const [year, month, day] = date.split("T")[0].split("-");
        const [hour, minute] = date.split("T")[1].split(":");

        return new Date(
            parseInt(year),
            parseInt(month) - 1,
            parseInt(day),
            parseInt(hour),
            parseInt(minute)
        );
    }
}