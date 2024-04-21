import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
 //P1Label:any="Person 1";
 Teams=["Chennai Super Kings","Delhi Capitals","Gujarat Titans","Kolkata Knight Riders","Lucknow Super Giants","Mumbai Indians","Punjab Kings","Rajasthan Royals","Royal Challengers Bengaluru","Sunrisers Hyderabad"];
 Team1=["R.GAIKWAD B","D.CONWAY B","MS DHONI W","A.RAHANE B","S.RASHEED B","S.RIZVI B","AVI.R.ARAVELLY B","R.JADEJA R","M.SANTNER R","M.ALI R","S.DUBE R","N.SINDHU R","A.MANDAL R","R.RAVINDRA R","S.THAKUR R","D MITCHELL R","R.HANGARGEKAR A","D.CHAHAR A","M.THEEKSHANA A","M.CHOUDHARY A","M.RAHMAN A","P.SOLANKI A","SUMARJEET A","T.DESHPANDE A","M PATHIRANA A"]
 Team1Selected=["R.GAIKWAD B","MS DHONI W","A.RAHANE B","S.RIZVI B","R.JADEJA R","S.DUBE R","R.RAVINDRA R","S.THAKUR R","D MITCHELL R","M.THEEKSHANA A","T.DESHPANDE A"]
 Team2=["R.PANT W","D.WARNER B","P.SHAW B","Y.DHULL B","S.HOPE B","S.CHHIKARA B","A.POREL B","H.BROOK B","R.BHUI B","K.KUSHAGRA B","T.STUBBS B","A.PATEL R","L.YADAV R","M.MARSH R","S.KUMAR R","P.DUBEY A","V.OSTWAL A","A.NORTJE A","K.YADAV A","J.F.MCGURK A","K.AHMED A","I.SHARMA A","J.RICHARDSON A","L.WILLIAMS A","M.KUMAR A","R.DAR A"]
 Team2Selected=["R.PANT W","D.WARNER B","P.SHAW B","S.HOPE B","T.STUBBS B","A.PATEL R","K.YADAV A","J.F.MCGURK A","K.AHMED A","I.SHARMA A","M.KUMAR A"]
 Team3=["S.GILL B","S.MILLER B","M.WADE W","W.SAHA B","BR.SHARATH B","K.WILLIAMSON B","A.MANOHAR R","B.S.SUDARSAN R","D.NALKANDE R","V.SHANKAR R","A.OMARZAI R","S.KHAN R","S.WARRIER A","J.YADAV A","R.TEWATIA A","M.SHAMI A","K.TYAGI A","S.MISHRA A","S.JOHNSON A","NOOR AHMED A","SAI KISHORE A","UMESH YADAV A","RASHID KHAN A","JOSHUA LITTLE A","MOHIT SHARMA A","MANAV SUTHAR A"]
 Team3Selected=["S.GILL B","M.WADE W","A.MANOHAR R","B.S.SUDARSAN R","V.SHANKAR R","S.KHAN R","R.TEWATIA A","S.JOHNSON A","NOOR AHMED A","UMESH YADAV A","RASHID KHAN A"]
 Team4=["S.IYER B","RINKU SINGH B","R.GURBAZ B","N.RANA B","S.RUTHERFORD B","PHIL SALT W","K.S.BHARAT B","MANISH PANDEY B","A.RAGHUVANSHI B","ANUKUL ROY R","RAMANDEEP S. R","A.RUSSEL R","V.IYER R","S.SHARMA A","A.GHAZANFAR A","D.CHAMEERA A","SAKIB HUSSAN A","HARSHIT RANA A","SUNIL NARINE A","V.ARORA A","V.CHAKARVARTHY A","M.STARC A","CHETAN S. A"]
 Team4Selected=["S.IYER B","RINKU SINGH B","PHIL SALT W","A.RAGHUVANSHI B","ANUKUL ROY R","RAMANDEEP S. R","A.RUSSEL R","V.IYER R","SUNIL NARINE A","V.CHAKARVARTHY A","M.STARC A",]
 Team5=["KL RAHUL W","S.PADIKKAL B","Q DE KOCK B","NICHOLAS POORAN B","A.TURNER B","A.BADONI R","DEEPAK HOODA R","K.GOWTHAM R","K.PANDYA R","KYLE MAYERS R","M.STOINIS R","MOHD.ARSHAD KHAN R","PRERAK MANKAD R","YUDHVIR SINGH R","A.KULKARNI R","DAVID WILLEY R","SHIVAM MAVI A","S.JOSEPH A","MATT HENRY A","MAYANK YADAV A","MOSHIN KHAN A","RAVI BISHNOI A","YASH THAKUR A","AMIT MISHRA A","N.UL HAQ A","M.SIDDHARTH A"]
 Team5Selected=["KL RAHUL W","S.PADIKKAL B","Q DE KOCK B","NICHOLAS POORAN B","A.BADONI R","DEEPAK HOODA R","K.PANDYA R","M.STOINIS R","MOHD.ARSHAD KHAN R","RAVI BISHNOI A","N.UL HAQ A"]
 Team6=["ROHIT SHARMA B","D.BREVIS B","SURYAKUMAR Y. B","ISHAN KISHAN W","HARVIK DESAI B","N.TIKAL VARMA B","TIM DAVID B","VISHNU VINOD B","H.PANDYA R","A.TENDULKAR R","MHD NABI R","R.SHEPHARD R","S.MULANI R","N.WADHERA R","G.COETZEE R","ANSHUL KAMBOJ R","N.DHIR R","S.SHARMA R","KWENA MAPHAKA A","JASPRIT BUMRAH A","PIYUSH CHAWLA A","K.KARTIKEYA S. A","AKASH MADHWAL A","LUKE WOOD A","D.MADHUSHANKA A","SHREYAS GOPAL A"]
 Team6Selected=["ROHIT SHARMA B","SURYAKUMAR Y. B","ISHAN KISHAN W","N.TIKAL VARMA B","H.PANDYA R","MHD NABI R","R.SHEPHARD R","G.COETZEE R","JASPRIT BUMRAH A","AKASH MADHWAL A","SHREYAS GOPAL A"]
 Team7=["S.DHAWAN B","JITESH SHARMA W","J.BAIRSTOW B","PRABHSIMRAN S. B","LIAM LIVINGSTONE B","H.BHATIA B","R.ROSSOUW B","SHASHANK SINGH B","C.WOAKES R","V.PRATAP SINGH R","ASHUTOSH SHARMA R","T.THAYADARAJANN R","ATHARVA TAIDE R","R.DHAWAN R","SAM CURRAN R","S.RAZA R","SHIVAM SINGH R","PRINCE CHAUD. A","HARPREET BRAR A","ARSHDEEP SUNGH A","KAGISO RABADA A","NATHAN ELLIS A","R.CHAHAR A","V.KAVERAPPA A","HARSHAL PATEL A"]
 Team7Selected=["S.DHAWAN B","JITESH SHARMA W","J.BAIRSTOW B","PRABHSIMRAN S. B","SHASHANK SINGH B","ASHUTOSH SHARMA R","SAM CURRAN R","S.RAZA R","HARPREET BRAR A","KAGISO RABADA A","HARSHAL PATEL A"]
 Team8=["S.SAMSON W","J.BUTTLER B","S.HETMYER B","Y.JAISWAL B","D.JUREL B","R.PARAG B","K.RATHORE B","D.FERREIRA B","R.POWELL B","S.DUBEY B","TOM KOHLER B","RAVI ASHVIN R","T.KOTIAN R","A.NUSHTAQ R","A.KHAN A","KULDEEP SEN A","NAVDEEP SAINI A","KESHAV MAHARAJ A","SANDEEP SHARMA A","TRENT BOULD A","T.CHAHAL A","NANDRE BURGER A"]
 Team8Selected=["S.SAMSON W","J.BUTTLER B","S.HETMYER B","Y.JAISWAL B","D.JUREL B","RAVI ASHVIN R","A.KHAN A","KULDEEP SEN A","KESHAV MAHARAJ A","TRENT BOULD A","T.CHAHAL A"]
 Team9=["FAF DU PLESIS B","RAJAT PATIDAR B","VIKAT KOHLI B","ANUL RAWAT B","D.KARTIK W","S.S.PRABHUDESSAI B","W.JACKS B","S.CHUAHAN B","S.MAXWELL R","M.LOMROR R","LARN SHARMA R","C.GREEN R","SWAPNIL SINGH R","MATANK DAGAR R","M.BHANDAGE R","AKASH DEEP A","A.JOSEPH A","L.FERGUSON A","M.SIRAJ A","Y.DAYAL A","T.CURRAN A","REECE TOPLEY A","H.SHARMA A","V.V.KUMAR A","RAJAN KUMAR A"]
 Team9Selected=["FAF DU PLESIS B","RAJAT PATIDAR B","VIKAT KOHLI B","D.KARTIK W","W.JACKS B","S.CHUAHAN B","S.MAXWELL R","M.LOMROR R","AKASH DEEP A","M.SIRAJ A","V.V.KUMAR A",]
 Team10=["ABDUL SAMAD B","A.MARKRAM B","R.TRIPATHI B","GLENN PHILLIPS B","M.AGARWAL B","H.KLAASEN W","ANMOLPREET S. B","UPENDRA S.YADAV B","NITESH REDDY B","TRAVIS HEAD B","ABHISHEK SHARMA R","MARCI JANSEN R","W.SUNDAR R","SANVIR SINGH R","W.HASARANGA R","PAT CUMMINS A","AKASH SINGH A","S.AHAMAD A","BHUVNESHWAR K. A","F.FAROOQI A","J.UNADKAT A","T.NATARAJAN A","UMRAN MALIK A","MAYANK M. A","J.SUBHRAMANYAN A","V.VIYASKANTH A"]
 Team10Selected=["ABDUL SAMAD B","A.MARKRAM B","H.KLAASEN W","NITESH REDDY B","TRAVIS HEAD B","ABHISHEK SHARMA R","PAT CUMMINS A","S.AHAMAD A","BHUVNESHWAR K. A","J.UNADKAT A","T.NATARAJAN A"]

 PlayersLabel:any=[]
 PlayersLabel2:any=[]

 //P1ShowLabel:any;
 players:any=[];

 displaymessage:any;
 displaymessage2:any;
 showpermutations:boolean=false;
 active:any="inactive";
 showHeaders1:any=false;
 showHeaders2:any=false;

 constructor() { }

 currentParagraphIndex: number = 0;
 intervalId: any;
 paragraphs: string[] = [
  'TIPS: Check more players(Blue Tick) to get less and best results..!! ',
  'TIPS: Remove the player and add another player from SQUAD 15',
  'TIPS: Get all the unique combinations..Hurray...Enjoy..!!!',
  'TIPS: PRESS CTRL+F TO SEARCH THE PLAYER EASILY..!!'

];

 ngOnInit() {
  this.intervalId = setInterval(() => {
    this.showNextParagraph();
  }, 5000);
 }
 ngOnDestroy(): void {
  // Clear interval when component is destroyed
  clearInterval(this.intervalId);
}

showNextParagraph(): void {
  // Increment current paragraph index and loop back to 0 if end is reached
  this.currentParagraphIndex = (this.currentParagraphIndex + 1) % this.paragraphs.length;
}


 labels:any = [];
 labels2:any = [];
 isCheckedPlayersArray1:any=[];
 isCheckedPlayersArray2:any=[];
 labelsToShow:any=[];
 labelsToShow2:any=[];

 onTeamSelect(event:any)
 {
  this.showHeaders1=true
   let value=event.target.value
   this.labels=[];
    this.isCheckedPlayersArray1=[];

  if(value=="Chennai Super Kings"){
   this.PlayersLabel=this.Team1
    this.labels=this.Team1Selected
  
  }
   else if(value=="Delhi Capitals"){
 
    this.PlayersLabel=this.Team2
    this.labels=this.Team2Selected
  }
  else if(value=="Gujarat Titans"){
 
    this.PlayersLabel=this.Team3
    this.labels=this.Team3Selected
  }
  else if(value=="Kolkata Knight Riders"){
 
    this.PlayersLabel=this.Team4
    this.labels=this.Team4Selected
  }
  else if(value=="Lucknow Super Giants"){
 
    this.PlayersLabel=this.Team5
    this.labels=this.Team5Selected
  }
  else if(value=="Mumbai Indians"){
 
    this.PlayersLabel=this.Team6
    this.labels=this.Team6Selected
  }
  else if(value=="Punjab Kings"){
 
    this.PlayersLabel=this.Team7
    this.labels=this.Team7Selected
  }
  else if(value=="Rajasthan Royals"){
 
    this.PlayersLabel=this.Team8
    this.labels=this.Team8Selected
  }
  else if(value=="Royal Challengers Bengaluru"){
 
    this.PlayersLabel=this.Team9
    this.labels=this.Team9Selected
  }
  else if(value=="Sunrisers Hyderabad"){
 
    this.PlayersLabel=this.Team10
    this.labels=this.Team10Selected
  }
   this.concatinatefinalarray();
 }
 onTeamSelect2(event:any)
 {
  this.showHeaders2=true
   let value=event.target.value
   this.labels2=[];
   this.isCheckedPlayersArray2=[];

   if(value=="Chennai Super Kings")
   {
    
    this.PlayersLabel2=this.Team1
    this.labels2=this.Team1Selected
   
  }
   else if(value=="Delhi Capitals"){
   
    this.PlayersLabel2=this.Team2
    this.labels2=this.Team2Selected
   
  }
  else if(value=="Gujarat Titans"){
   
    this.PlayersLabel2=this.Team3
    this.labels2=this.Team3Selected
   
  }
  else if(value=="Kolkata Knight Riders"){
   
    this.PlayersLabel2=this.Team4
    this.labels2=this.Team4Selected
   
  }
  else if(value=="Lucknow Super Giants"){
   
    this.PlayersLabel2=this.Team5
    this.labels2=this.Team5Selected
   
  }
  else if(value=="Mumbai Indians"){
   
    this.PlayersLabel2=this.Team6
    this.labels2=this.Team6Selected
   
  }
  else if(value=="Punjab Kings"){
   
    this.PlayersLabel2=this.Team7
    this.labels2=this.Team7Selected
   
  }
  else if(value=="Rajasthan Royals"){
   
    this.PlayersLabel2=this.Team8
    this.labels2=this.Team8Selected
   
  }
  else if(value=="Royal Challengers Bengaluru"){
   
    this.PlayersLabel2=this.Team9
    this.labels2=this.Team9Selected
   
  }
  else if(value=="Sunrisers Hyderabad"){
   
    this.PlayersLabel2=this.Team10
    this.labels2=this.Team10Selected
   
  }
  this.concatinatefinalarray();
 }



 manipulateItemType(item: any): any {
  
//   let word = item;
// let lastChar = word.charAt(word.length - 1);
// console.log(lastChar); // Outputs 'e'

  var a= item[item.length - 1];
  //console.log(a)
if(a=='B'){return "assets/images/bat.svg"}
else if(a=='A'){return "assets/images/ball.svg"}
else if(a=='R'){return "assets/images/allround.svg"}
else if(a=='W'){return "assets/images/wk.svg"}
else {return "assets/images/wk.svg"}
 
 }
 manipulateItemName(item: any): any {
  
   return item.substring(0, item.length - 1);
   
  }
 
 concatinatefinalarray()
 {
   this.labelsToShow=this.isCheckedPlayersArray1.concat(this.labels)
   this.labelsToShow2=this.isCheckedPlayersArray2.concat(this.labels2)
  //  console.log("all players",this.labelsToShow)
  //  console.log("checked players",this.isCheckedPlayersArray1)
  //  console.log("unchecked players",this.labels)
  //  console.log("all players2",this.labelsToShow2)
  //  console.log("checked players2",this.isCheckedPlayersArray2)
  //  console.log("unchecked players2",this.labels2)
  
 }


  checkImportantPlayers1(event: any)
   {
    let value = event.target.value
    let valueChecked=event.target.checked
    if(this.isCheckedPlayersArray1.some((item: any)=>item===value)&&!valueChecked)
    {
     this.isCheckedPlayersArray1 =  this.isCheckedPlayersArray1.filter((item: any) => item !== value)
     this.labels=this.labels.concat(value)
     
    }
   else if(this.labels.some((item: any)=>item===value))
   {
     this.labels = this.labels.filter((item: any) => item !== value)
    this.isCheckedPlayersArray1.some((item: any)=>item===value)?this.isCheckedPlayersArray1 =  this.isCheckedPlayersArray1.filter((item: any) => item !== value):this.isCheckedPlayersArray1=this.isCheckedPlayersArray1.concat(value)
   
   }
   else{
     this.isCheckedPlayersArray1.some((item: any)=>item===value)?this.isCheckedPlayersArray1 =  this.isCheckedPlayersArray1.filter((item: any) => item !== value):this.isCheckedPlayersArray1=this.isCheckedPlayersArray1.concat(value)

   }
   this.concatinatefinalarray();
 
   }


 checkImportantPlayers2(event: any)
  {
   let value = event.target.value
   let valueChecked=event.target.checked
   if(this.isCheckedPlayersArray2.some((item: any)=>item===value)&&!valueChecked)
   {
    this.isCheckedPlayersArray2 =  this.isCheckedPlayersArray2.filter((item: any) => item !== value)
    this.labels2=this.labels2.concat(value)
  //  this.active="inactive"; //css class
   }
 else if(this.labels2.some((item: any)=>item===value))
  {
   this.labels2 = this.labels2.filter((item: any) => item !== value)
   this.isCheckedPlayersArray2.some((item: any)=>item===value)?this.isCheckedPlayersArray2 =  this.isCheckedPlayersArray2.filter((item: any) => item !== value):this.isCheckedPlayersArray2=this.isCheckedPlayersArray2.concat(value)
 //  this.active="active"; //css class
  
  }
  else{
   this.isCheckedPlayersArray2.some((item: any)=>item===value)?this.isCheckedPlayersArray2 =  this.isCheckedPlayersArray2.filter((item: any) => item !== value):this.isCheckedPlayersArray2=this.isCheckedPlayersArray2.concat(value)
 //  this.active="active"; //css class
  }
  this.concatinatefinalarray();
 //  console.log("isCheckedPlayersArray2",this.isCheckedPlayersArray2)
 //   console.log("label2:",this.labels2)
 //   console.log("final label2",this.labelsToShow2)
  }

 addNewLabel(lblPlayerName:any) {
  if(this.labelsToShow.length<11)
  {
    if (!this.labelsToShow.some((item: any)=>item===lblPlayerName))
  {
   
     this.labels=this.labels.concat(lblPlayerName);
    lblPlayerName = '';
    this.displaymessage=""
    this.concatinatefinalarray();
     //const newLabel = `Label ${this.labels2.length + 1}`;//create DOM labels
    }
    else{
      this.displaymessage=lblPlayerName + " already selected"
     
    }
  }
    else{
      
      this.displaymessage= " Maximum 11 Players in a Team"
    }
     
}

 deleteP1(PlayerValue:any)
 {  
  this.labels =  this.labels.filter((item: any) => item !== PlayerValue);
  this.isCheckedPlayersArray1 =  this.isCheckedPlayersArray1.filter((item: any) => item !== PlayerValue);
  this.concatinatefinalarray();
 }

 
 addNewLabel2(lblPlayerName:any) {
  if(this.labelsToShow2.length<11)
  { 
  if (!this.labelsToShow2.some((item: any)=>item===lblPlayerName))
   {
    
      this.labels2=this.labels2.concat(lblPlayerName);
     lblPlayerName = '';
     this.displaymessage2=""
     this.concatinatefinalarray();
      //const newLabel = `Label ${this.labels2.length + 1}`;//create DOM labels
     }
     else{
      this.displaymessage2=lblPlayerName + " already selected"
      
     }
   }
     else{
      
       this.displaymessage2= "Maximum 11 Players in a Team"
     
     }
      
 }

 deleteP2(PlayerValue2:any)
 {  
  this.labels2 =  this.labels2.filter((item: any) => item !== PlayerValue2);
  this.isCheckedPlayersArray2 =  this.isCheckedPlayersArray2.filter((item: any) => item !== PlayerValue2);
  
  
  this.concatinatefinalarray();
 }



 combinations: string[][] = [];
 combinationsLenght:any;startIndex:any=0; endIndex:any=1;
 //pagination
 currentPage: number = 1;
 itemsPerPage: number = 20;
 get visibleData(): any[] {
   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
   const endIndex = startIndex + this.itemsPerPage;
   this.startIndex=startIndex;
   this.endIndex=endIndex;
   return this.combinations.slice(startIndex, endIndex);
 }
 nextPage() {
   if (this.currentPage < this.totalPages) {
     this.currentPage++;
   }
 }

 prevPage() {
   if (this.currentPage > 1) {
     this.currentPage--;
   }
 }

 get totalPages(): number {
   return Math.ceil(this.combinations.length / this.itemsPerPage);
 }
 //pagination ends

 CreateTeams()
 {
   const players =this.labels.concat(this.labels2);
   const checkplayers =this.labelsToShow.concat(this.labelsToShow2);
   
   var myisCheckedPlayersArray2=this.isCheckedPlayersArray1.concat(this.isCheckedPlayersArray2)
   const ticketlength=myisCheckedPlayersArray2.length
   const combinationLength = players.length+ticketlength>11?11-ticketlength:players.length
   // console.log("ticket p:",isCheckedPlayersArray1.length)
   // console.log(combinationLength)
   if(checkplayers.length==0)
   {
     alert('Select the Teams & Players');
   }
   else if(this.labelsToShow.length==0)
   {
     alert('select at least one player from Team 1');
   }
   else if(this.labelsToShow2.length==0)
   {
     alert('select at least one player from Team 2');
   }
   
     else{
   
   this.combinations = this.getUniqueCombinations(players, combinationLength,myisCheckedPlayersArray2);
     
   if (this.combinations){
     
     this.showpermutations=true
     this.combinationsLenght=this.combinations.length;
   }
 }
    // console.log(this.combinations)
   
 }

 getUniqueCombinations(players: string[], combinationLength: number, isCheckedPlayersArray1: string[]): string[][] {
   const combinations: string[][] = [];
   function backtrack(start: number, current: string[]) {
     if (current.length === combinationLength) {
       combinations.push([...isCheckedPlayersArray1,...current]);
          
       return;
     }

     for (let i = start; i < players.length; i++) {
       current.push(players[i].slice(0, -1));
       backtrack(i + 1, current);
       current.pop();
     }
   }

   backtrack(0, []);
   this.shuffle(combinations); 
   // console.log("after combination",combinations)
   return combinations;
 }

 
 shuffle(array:any) {
   for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [array[i], array[j]] = [array[j], array[i]];
   }
 }




//task rrr
 isCheckedArray=[];
 checkValue(event: any)
  {
   let value = event.target.value
   this.isCheckedArray.some(item=>item===value)?this.isCheckedArray =  this.isCheckedArray.filter(item => item !== value):this.isCheckedArray=this.isCheckedArray.concat(value)
   //console.log(this.isCheckedArray)

 }

 option: string = '';
 isRadioCheckedArray=[];
 checkRadioValue(event: any)
  {
   if (event.target.checked) {this.option = event.target.value;} 
   else {this.option = '';}
   let value = event.target.value
   let valueSelected=event.target.checked
   if(this.isRadioCheckedArray.some(item=>item===value)&&!valueSelected)
   {this.isRadioCheckedArray.pop()
   }
  else{this.isRadioCheckedArray=[];
    this.isRadioCheckedArray=this.isRadioCheckedArray.concat(value)   
      
   }
   //console.log(this.isRadioCheckedArray)
  
 }
 
}

