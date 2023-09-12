import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  pro=10;
  title = 'amplelogic';
  showbox = false;
  togglebtn = false;
  @ViewChild('move')
  move!: ElementRef;
  renderer: any;
  
  showboxb(){
    console.log(this.showbox)
    if(this.showbox){
      this.showbox= false
      console.log("if")
    }
    else{
      console.log("else")
      this.showbox = true;
      this.togglebtn = true;
      setTimeout(() => {
        alert("Migration completed");
        this.showbox = false;
      }, 2000);
     
      
    }
  }

  toggle(){  
    console.log(this.showbox)
    if(this.showbox){
      this.showbox= false
      console.log("if")
    }
    else{
      console.log("else")
      this.showbox = true
    }
    
   
  }
  ngAfterViewInit(): void {
    this.pro=10;
  }



}
