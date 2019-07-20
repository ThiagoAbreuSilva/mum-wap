
var g = (function accountType(){
	var AccoutArray =[];
	var acctType = document.getElementById("AccountType").value;
	var deposit = document.getElementById("Deposite").value;
		AccoutArray.push(acctType,deposit);
		document.getElementById("accountText").value='';
		for(var x=0 in AccoutArray){			
			document.getElementById("accountText").value += AccoutArray +'\n';
		}
	console.log(acctType,deposit);
	});
	function displayaccount(){
	}
	function clickbtn(){
		g();
	}
