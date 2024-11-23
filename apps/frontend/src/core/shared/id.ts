export class GenerateId{
    static new(){
        return `${this.hash()} - ${this.hash()} - ${this.hash()}`;
    }

    private static hash(){
        return Math.random().toString(36).substring(2, 15);
    }
}

console.log(GenerateId.new());