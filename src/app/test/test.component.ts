import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

}
// import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';

// @Component({
//   selector: 'app-index',
//   templateUrl: './index.component.html',
//   styleUrls: ['./index.component.css']
// })
// export class IndexComponent implements OnInit{
//  //P1Label:any="Person 1";
//  Teams=["Team1","Team2","Team3","Team4","Team5"];
//  Team1=["T1Perso ahghga nbaba bnbnbnb nbnb n 1B","T1Person 2B","T1Person 3A","T1Person 4B","T1Person 5A","T1Person 6B","T1Person 7B","T1Person 8B","T1Person 9B","T1Person 10B","T1Person 11B","T1Person 12B","T1Person 13B","T1Person 14B","T1Person 15B"]
//  Team2=["T2Person 1","T2Person 2","T2Person 3","T2Person 4","T2Person 5","T2Person 6","T2Person 7","T2Person 8","T2Person 9","T2Person 10","T2Person 11","T2Person 12","T2Person 13","T2Person 14","T2Person 15"]

//  PlayersLabel:any=[]
//  PlayersLabel2:any=[]

//  //P1ShowLabel:any;
//  players:any=[];
//  labels = [];
//  labels2 = [];
//  displaymessage:any;
//  displaymessage2:any;
//  showpermutations:boolean=false;
//  active:any="inactive";
//  showHeaders1:any=false;
//  showHeaders2:any=false;

//  constructor() { }

//  ngOnInit() {
   
//  }
//  isCheckedPlayersArray1=[];
//  isCheckedPlayersArray2=[];
//  labelsToShow=[];
//  labelsToShow2=[];


//  onTeamSelect(event:any)
//  {
//   this.showHeaders1=true
//    let value=event.target.value
//    if(value=="Team1"){
//     this.PlayersLabel=this.Team1
//   }
//    else if(value=="Team2"){
//     this.PlayersLabel=this.Team2
//   }
   
//  }
//  onTeamSelect2(event:any)
//  {
//   this.showHeaders2=true
//    let value=event.target.value
//    if(value=="Team1"){this.PlayersLabel2=this.Team1}
//    else if(value=="Team2"){this.PlayersLabel2=this.Team2}
   
//  }



// //  manipulateItemType(item: any): any {
  
  
// //   return item[item.length - 1];

 
// //  }
// //  manipulateItemName(item: any): any {
  
// //    return item.substring(0, item.length - 1);
   
// //   }
 
//  concatinatefinalarray()
//  {
//    this.labelsToShow=this.isCheckedPlayersArray1.concat(this.labels)
//    this.labelsToShow2=this.isCheckedPlayersArray2.concat(this.labels2)
//   //  console.log("all players",this.labelsToShow)
//   //  console.log("checked players",this.isCheckedPlayersArray1)
//   //  console.log("unchecked players",this.labels)
//   //  console.log("all players2",this.labelsToShow2)
//   //  console.log("checked players2",this.isCheckedPlayersArray2)
//   //  console.log("unchecked players2",this.labels2)
  
//  }


//   checkImportantPlayers1(event: any)
//    {
//     let value = event.target.value
//     let valueChecked=event.target.checked
//     if(this.isCheckedPlayersArray1.some(item=>item===value)&&!valueChecked)
//     {
//      this.isCheckedPlayersArray1 =  this.isCheckedPlayersArray1.filter(item => item !== value)
//      this.labels=this.labels.concat(value)
     
//     }
//    else if(this.labels.some(item=>item===value))
//    {
//      this.labels = this.labels.filter(item => item !== value)
//     this.isCheckedPlayersArray1.some(item=>item===value)?this.isCheckedPlayersArray1 =  this.isCheckedPlayersArray1.filter(item => item !== value):this.isCheckedPlayersArray1=this.isCheckedPlayersArray1.concat(value)
   
//    }
//    else{
//      this.isCheckedPlayersArray1.some(item=>item===value)?this.isCheckedPlayersArray1 =  this.isCheckedPlayersArray1.filter(item => item !== value):this.isCheckedPlayersArray1=this.isCheckedPlayersArray1.concat(value)

//    }
//    this.concatinatefinalarray();
 
//    }


//  checkImportantPlayers2(event: any)
//   {
//    let value = event.target.value
//    let valueChecked=event.target.checked
//    if(this.isCheckedPlayersArray2.some(item=>item===value)&&!valueChecked)
//    {
//     this.isCheckedPlayersArray2 =  this.isCheckedPlayersArray2.filter(item => item !== value)
//     this.labels2=this.labels2.concat(value)
//   //  this.active="inactive"; //css class
//    }
//  else if(this.labels2.some(item=>item===value))
//   {
//    this.labels2 = this.labels2.filter(item => item !== value)
//    this.isCheckedPlayersArray2.some(item=>item===value)?this.isCheckedPlayersArray2 =  this.isCheckedPlayersArray2.filter(item => item !== value):this.isCheckedPlayersArray2=this.isCheckedPlayersArray2.concat(value)
//  //  this.active="active"; //css class
  
//   }
//   else{
//    this.isCheckedPlayersArray2.some(item=>item===value)?this.isCheckedPlayersArray2 =  this.isCheckedPlayersArray2.filter(item => item !== value):this.isCheckedPlayersArray2=this.isCheckedPlayersArray2.concat(value)
//  //  this.active="active"; //css class
//   }
//   this.concatinatefinalarray();
//  //  console.log("isCheckedPlayersArray2",this.isCheckedPlayersArray2)
//  //   console.log("label2:",this.labels2)
//  //   console.log("final label2",this.labelsToShow2)
//   }

//  addNewLabel(lblPlayerName:any) {
//   if(this.labelsToShow.length<11)
//   {
//     if (!this.labelsToShow.some(item=>item===lblPlayerName))
//   {
   
//      this.labels=this.labels.concat(lblPlayerName);
//     lblPlayerName = '';
//     this.displaymessage=""
//     this.concatinatefinalarray();
//      //const newLabel = `Label ${this.labels2.length + 1}`;//create DOM labels
//     }
//     else{
//       this.displaymessage=lblPlayerName + " already selected"
     
//     }
//   }
//     else{
      
//       this.displaymessage= " Maximum 11 Players in a Team"
//     }
     
// }

//  deleteP1(PlayerValue:any)
//  {  
//   this.labels =  this.labels.filter(item => item !== PlayerValue);
//   this.isCheckedPlayersArray1 =  this.isCheckedPlayersArray1.filter(item => item !== PlayerValue);
//   this.concatinatefinalarray();
//  }

 
//  addNewLabel2(lblPlayerName:any) {
//   if(this.labelsToShow2.length<11)
//   { 
//   if (!this.labelsToShow2.some(item=>item===lblPlayerName))
//    {
    
//       this.labels2=this.labels2.concat(lblPlayerName);
//      lblPlayerName = '';
//      this.displaymessage2=""
//      this.concatinatefinalarray();
//       //const newLabel = `Label ${this.labels2.length + 1}`;//create DOM labels
//      }
//      else{
//       this.displaymessage2=lblPlayerName + " already selected"
      
//      }
//    }
//      else{
      
//        this.displaymessage2= "Maximum 11 Players in a Team"
     
//      }
      
//  }

//  deleteP2(PlayerValue2:any)
//  {  
//   this.labels2 =  this.labels2.filter(item => item !== PlayerValue2);
//   this.isCheckedPlayersArray2 =  this.isCheckedPlayersArray2.filter(item => item !== PlayerValue2);
  
  
//   this.concatinatefinalarray();
//  }



//  combinations: string[][] = [];
//  combinationsLenght:any;startIndex:any=0; endIndex:any=1;
//  //pagination
//  currentPage: number = 1;
//  itemsPerPage: number = 20;
//  get visibleData(): any[] {
//    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//    const endIndex = startIndex + this.itemsPerPage;
//    this.startIndex=startIndex;
//    this.endIndex=endIndex;
//    return this.combinations.slice(startIndex, endIndex);
//  }
//  nextPage() {
//    if (this.currentPage < this.totalPages) {
//      this.currentPage++;
//    }
//  }

//  prevPage() {
//    if (this.currentPage > 1) {
//      this.currentPage--;
//    }
//  }

//  get totalPages(): number {
//    return Math.ceil(this.combinations.length / this.itemsPerPage);
//  }
//  //pagination ends

//  CreateTeams()
//  {
//    const players =this.labels.concat(this.labels2);
//    const checkplayers =this.labelsToShow.concat(this.labelsToShow2);
   
//    var myisCheckedPlayersArray2=this.isCheckedPlayersArray1.concat(this.isCheckedPlayersArray2)
//    const ticketlength=myisCheckedPlayersArray2.length
//    const combinationLength = players.length+ticketlength>11?11-ticketlength:players.length
//    // console.log("ticket p:",isCheckedPlayersArray1.length)
//    // console.log(combinationLength)
//    if(checkplayers.length==0)
//    {
//      alert('Select the Teams & Players');
//    }
//    else if(this.labelsToShow.length==0)
//    {
//      alert('select at least one player from Team 1');
//    }
//    else if(this.labelsToShow2.length==0)
//    {
//      alert('select at least one player from Team 2');
//    }
   
//      else{
   
//    this.combinations = this.getUniqueCombinations(players, combinationLength,myisCheckedPlayersArray2);
     
//    if (this.combinations){
     
//      this.showpermutations=true
//      this.combinationsLenght=this.combinations.length;
//    }
//  }
//      console.log(this.combinations)
   
//  }

//  getUniqueCombinations(players: string[], combinationLength: number, isCheckedPlayersArray1: string[]): string[][] {
//    const combinations: string[][] = [];
//    function backtrack(start: number, current: string[]) {
//      if (current.length === combinationLength) {
//        combinations.push([...isCheckedPlayersArray1,...current]);
          
//        return;
//      }

//      for (let i = start; i < players.length; i++) {
//        current.push(players[i]);
//        backtrack(i + 1, current);
//        current.pop();
//      }
//    }

//    backtrack(0, []);
//    this.shuffle(combinations); 
//    // console.log("after combination",combinations)
//    return combinations;
//  }

 
//  shuffle(array:any) {
//    for (let i = array.length - 1; i > 0; i--) {
//      const j = Math.floor(Math.random() * (i + 1));
//      [array[i], array[j]] = [array[j], array[i]];
//    }
//  }




// //task rrr
//  isCheckedArray=[];
//  checkValue(event: any)
//   {
//    let value = event.target.value
//    this.isCheckedArray.some(item=>item===value)?this.isCheckedArray =  this.isCheckedArray.filter(item => item !== value):this.isCheckedArray=this.isCheckedArray.concat(value)
//    console.log(this.isCheckedArray)

//  }

//  option: string = '';
//  isRadioCheckedArray=[];
//  checkRadioValue(event: any)
//   {
//    if (event.target.checked) {this.option = event.target.value;} 
//    else {this.option = '';}
//    let value = event.target.value
//    let valueSelected=event.target.checked
//    if(this.isRadioCheckedArray.some(item=>item===value)&&!valueSelected)
//    {this.isRadioCheckedArray.pop()
//    }
//   else{this.isRadioCheckedArray=[];
//     this.isRadioCheckedArray=this.isRadioCheckedArray.concat(value)   
      
//    }
//    console.log(this.isRadioCheckedArray)
  
//  }
 
// }

