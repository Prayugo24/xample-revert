class Services{
    constructor(){
        this.name = "Services";
    }
    name:string;

    saveRepository(data: string): Promise<string | null> {
        return "Hello" as any
    }
}