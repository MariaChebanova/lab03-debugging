class stringProcessor{
    private data: string;
    constructor(input: string){
        // find error here
        // input = this.data; before
        this.data = input; 
    }

    public getString(): string{
        return this.data;
    }

    public setString(data:string){
        this.data = data;
    }

    public reverse(): void{
        let chars: string[] = this.data.split('');
        for(var i = 0; i< chars.length / 2 ; i++){
            let swap:string = chars[i];
            chars[i] = chars[chars.length - 1 - i];
            chars[chars.length -1 - i] = swap;
        }

        this.data = chars.join('');
    }
}

console.log("test");
var kirpich: stringProcessor = new stringProcessor("test");
console.log(kirpich.getString());