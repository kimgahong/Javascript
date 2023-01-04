const boardArray = new Array();
      
// 사용자 정의 객체 구성 (→ 생성자 함수 정의)
function Board(uName, uContent)
{
   // 주요 속성 구성
   this.userName=uName;
   this.content=uContent;
   this.writeDay=new Date();
}
         
// 프로토타입 구성을 통해... 사용자 정의 객체의 함수 정의
//프로토타입 구성을 통해 ... 사용자 정의 객체의 함수 정의
//★★★★★★★★모든 객체는 prototype이라는 숨겨진 객체가 존재한다 알아두기 !!★★★★★★★★
Board.prototype.userLocalString = function()
{
   return this.writeDay.getFullYear() + "-"
      + (this.writeDay.getMonth()+1) + "-"
      + this.writeDay.getDate() + "-"
      + this.writeDay.getHours() + ":"
      + this.writeDay.getMinutes() + ":"
      + this.writeDay.getSeconds();
                
      // 시 → getHours()
      // 분 → getMinutes()
      // 초 → getSeconds()          
}
      
function main()
{
   //alert("함수 호출 확인");
            
   const uName = document.getElementById("uName").value;
   const uContent = document.getElementById("uContent").value;
            
   const len = boardArray.length;
   //alert(len);      //-- 이 시점에서 테스트 시 → 0
            
   boardArray[len] = new Board(uName, uContent);
   //-- 『Board()』 → 사용자 정의 객체(생성자 함수)
            
   //alert(len);// -- 작성이 이루어질 때 마다... 『+1』
            
   print(len);
            
   clear(); //폼 클리어 하도록 호출 
}
         
// 내용 출력 함수
function print(idx)
{
   //var strTemp = boardArray[idx].content;
   //alert(strTemp);
            
   const tableNode = document.getElementById("tbl2");
   const trNode = document.createElement("tr");
            
   trNode.appendChild(createTdNode((idx+1).toString()));
   trNode.appendChild(createTdNode(boardArray[idx].userName));
   trNode.appendChild(createTdNode(boardArray[idx].content));
   trNode.appendChild(createTdNode(boardArray[idx].userLocalString()));
            
   tableNode.appendChild(trNode);
}
         
function createTdNode(val)
{
   const textNode = document.createTextNode(val);
   const tdNode = document.createElement("td");
   tdNode.appendChild(textNode);
   return tdNode;
}
         
function clear()
{      
   document.getElementById("uName").value="";
   document.getElementById("uContent").value="";
   document.getElementById("uName").focus();
}