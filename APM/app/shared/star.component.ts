import { Component
        ,OnChanges
        ,Input
        ,Output
        ,EventEmitter } from '@angular/core';

@Component({
   selector : "star-rating",
   templateUrl : "./app/shared/star.component.html",
   styleUrls: ["./app/shared/star.component.css"]
})

export class StarComponent implements OnChanges{
     
     @Input() rating : number;
    starWidth:number;

    @Output() onRatingClick : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void{
       this.starWidth = this.rating * 86/5; 
    }

    onRatingStarClick():void{
        console.log("onRatingClick");
       this.onRatingClick.emit("The rating for this component is " + this.rating);
    }

}