
export class Like {

    private buttonSelected: boolean = false;

    constructor(private numberOfLikes: number) {
        this.buttonSelected = true;

    }

    giveLike() {
        if (this.buttonSelected) {
            this.numberOfLikes++;
        } else {
            this.numberOfLikes--;
        }

        this.buttonSelected = !this.buttonSelected

    }

    get ButtonSelected() {

        return this.buttonSelected;
    }

    get NumberOfLikes(){
        
        return this.numberOfLikes;
    }


}