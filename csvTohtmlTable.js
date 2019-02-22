//output
class Csvgui
{
	createUI()
	{	
				var input=document.createElement("INPUT");
				input.type="file";
				input.setAttribute("id","getfile");
				document.body.appendChild(input);
	}
	
	insertCells(arr,tr,isHeader){
				arr.forEach(text =>{
				let cell = tr.insertCell();
				if(isHeader)
				cell.innerHTML = "<b>"+text+"</b>";
				else
				cell.innerHTML = text;
				});
				return tr;
	}
	
	createRow(rows){
				const _this = this;
				var table = document.createElement("table");table.border = '1';
				
				rows.map(row => {
				var tr=document.createElement("tr");
				table.append(tr);
				return  _this.insertCells(row.split(","),tr);
				});
				var dvCSV = document.getElementById("print");
                dvCSV.innerHTML = "";
                dvCSV.append(table);
	}
	readFile()
	{
				var _this = this;
				var fileinput=document.getElementById('getfile');
				fileinput.onchange = function(){
				var file=fileinput.files[0];
				var fr=new FileReader();
				fr.readAsText(file);
                fr.onload =function(e)
				{
					var rows = e.target.result.split("\n");
					_this.createRow(rows);
				}
		}
	}
	
	
}
var u=new Csvgui();
u.createUI();
u.readFile();
              