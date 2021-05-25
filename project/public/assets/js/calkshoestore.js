 window.onscroll = function() {myFunction()};

        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;

        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }



	function validateForm(){
			
			var status = true; 

			
			var user = document.getElementById('txtUser').value;
			var pass = document.getElementById('txtPass').value;
			var mobile = document.getElementById('txtMobile').value;
			var mail = document.getElementById('txtMail').value;
			var pass1= document.getElementById('txtPass1').value;

			
			if(user == ""){
				
				document.getElementById("lbUser").innerHTML = "Tên không được để trống";
				document.getElementById("txtUser").style.border = "1px solid red";
				document.getElementById("lbUser").style.display = "block";
				status = false;
			}else{
				document.getElementById("lbUser").innerHTML = "";
				document.getElementById("txtUser").style.border = "1px solid #ddd";
				
			}

			if(pass == ""){
				
				document.getElementById("lbPass").innerHTML = "Mật khẩu không được để trống";
				document.getElementById("txtPass").style.border = "1px solid red";
				document.getElementById("lbPass").style.display = "block";
				status = false;
			}else{

				document.getElementById("lbPass").innerHTML = "";
				document.getElementById("txtPass").style.border = "1px solid #ddd";
				
			}
			if (pass1 != pass) {
					document.getElementById("lbPass1").innerHTML = "Mật khẩu nhập lại không đúng";
					document.getElementById("txtPass1").style.border = "1px solid red";
					document.getElementById("lbPass1").style.display = "block";
					status = false;	
				}else{
					document.getElementById("lbPass1").innerHTML = "";
					document.getElementById("txtPass1").style.border = "1px solid #ddd";
				}

			var m_reg = /^([0-9])+$/;
			var m_reg1 = /^([0-9]{10})$/;

			if(mobile == ""){
				document.getElementById("lbMobile").innerHTML = "SĐT không được để trống";
				document.getElementById("txtMobile").style.border = "1px solid red";
				document.getElementById("lbMobile").style.display = "block";
				status = false;
			}else{
				if(m_reg.test(mobile)==false){
					document.getElementById("lbMobile").innerHTML = "SĐT không đúng định dạng";
					document.getElementById("txtMobile").style.border = "1px solid red";
					document.getElementById("lbMobile").style.display = "block";
					status = false;
				}else{
					if(m_reg1.test(mobile)==false){
						document.getElementById("lbMobile").innerHTML = "SĐT phải là 10 số";
						document.getElementById("txtMobile").style.border = "1px solid red";
						document.getElementById("lbMobile").style.display = "block";
						status = false;
					}else{
						document.getElementById("lbMobile").innerHTML = "";
						document.getElementById("txtMobile").style.border = "1px solid #ddd";
					}
					
				}
			}

			var e_reg = /^([a-zA-Z0-9_\.])+\@([a-zA-Z])+\.([a-zA-Z]{2,4})$/;

			if(mail == ""){
				document.getElementById("lbMail").innerHTML = "Email không được để trống";
				document.getElementById("txtMail").style.border = "1px solid red";
				document.getElementById("lbMail").style.display = "block";
				status = false;
			}else{
				if(e_reg.test(mail)==false){
					document.getElementById("lbMail").innerHTML = "Email không đúng định dạng";
					document.getElementById("txtMail").style.border = "1px solid red";
					document.getElementById("lbMail").style.display = "block";
					status = false;
				}else{
					document.getElementById("lbMail").innerHTML = "";
					document.getElementById("txtMail").style.border = "1px solid #ddd";
				}
			}

			
			if(status == false){
				return false;
			}else{
				return true;
			}

		}
function validateFormLogin(){
			
			var status = true; 

			
			var mail = document.getElementById('txtMail').value;
			var pass = document.getElementById('txtPass').value;
			

			
			if(mail == ""){
				document.getElementById("lbMail").innerHTML = "Email không được để trống";
				document.getElementById("txtMail").style.border = "1px solid red";
				document.getElementById("lbMail").style.display = "block";
				status = false;
			}else{
				if(e_reg.test(mail)==false){
					document.getElementById("lbMail").innerHTML = "Email không đúng định dạng";
					document.getElementById("txtMail").style.border = "1px solid red";
					document.getElementById("lbMail").style.display = "block";
					status = false;
				}else{
					document.getElementById("lbMail").innerHTML = "";
					document.getElementById("txtMail").style.border = "1px solid #ddd";
				}
			}


			if(pass == ""){
				
				document.getElementById("lbPass").innerHTML = "Mật khẩu không được để trống";
				document.getElementById("txtPass").style.border = "1px solid red";
				document.getElementById("lbPass").style.display = "block";
				status = false;
			}else{
				document.getElementById("lbPass").innerHTML = "";
				document.getElementById("txtPass").style.border = "1px solid #ddd";
				
			}


			
			if(status == false){
				return false;
			}else{
				return true;
			}

		}

		function validateForm2(){
			
			var status = true; 

			
			var user = document.getElementById('txtUser').value;
			var address = document.getElementById('txtAddress').value;
			var mobile = document.getElementById('txtMobile').value;
			var mail = document.getElementById('txtMail').value;
			var atm= document.getElementById('txtATM').value;

			
			if(user == ""){
				
				document.getElementById("lbUser").innerHTML = "Tên không được để trống";
				document.getElementById("txtUser").style.border = "1px solid red";
				document.getElementById("lbUser").style.display = "block";
				status = false;
			}else{
				document.getElementById("lbUser").innerHTML = "";
				document.getElementById("txtUser").style.border = "1px solid #ddd";
				
			}

			if(address == ""){
				
				document.getElementById("lbAddress").innerHTML = "Địa chỉ không được để trống";
				document.getElementById("txtAddress").style.border = "1px solid red";
				document.getElementById("lbAddress").style.display = "block";
				status = false;
			}else{

				document.getElementById("lbAddress").innerHTML = "";
				document.getElementById("txtAddress").style.border = "1px solid #ddd";
				
			}
			if (atm == "") {
					document.getElementById("lbATM").innerHTML = "Thẻ ngân hàng không được để trống";
					document.getElementById("txtATM").style.border = "1px solid red";
					document.getElementById("lbATM").style.display = "block";
					status = false;	
				}else{
					document.getElementById("lbATM").innerHTML = "";
					document.getElementById("txtATM").style.border = "1px solid #ddd";
				}

			var m_reg = /^([0-9])+$/;
			var m_reg1 = /^([0-9]{10})$/;

			if(mobile == ""){
				document.getElementById("lbMobile").innerHTML = "SĐT không được để trống";
				document.getElementById("txtMobile").style.border = "1px solid red";
				document.getElementById("lbMobile").style.display = "block";
				status = false;
			}else{
				if(m_reg.test(mobile)==false){
					document.getElementById("lbMobile").innerHTML = "SĐT không đúng định dạng";
					document.getElementById("txtMobile").style.border = "1px solid red";
					document.getElementById("lbMobile").style.display = "block";
					status = false;
				}else{
					if(m_reg1.test(mobile)==false){
						document.getElementById("lbMobile").innerHTML = "SĐT phải là 10 số";
						document.getElementById("txtMobile").style.border = "1px solid red";
						document.getElementById("lbMobile").style.display = "block";
						status = false;
					}else{
						document.getElementById("lbMobile").innerHTML = "";
						document.getElementById("txtMobile").style.border = "1px solid #ddd";
					}
					
				}
			}

			var e_reg = /^([a-zA-Z0-9_\.])+\@([a-zA-Z])+\.([a-zA-Z]{2,4})$/;

			if(mail == ""){
				document.getElementById("lbMail").innerHTML = "Email không được để trống";
				document.getElementById("txtMail").style.border = "1px solid red";
				document.getElementById("lbMail").style.display = "block";
				status = false;
			}else{
				if(e_reg.test(mail)==false){
					document.getElementById("lbMail").innerHTML = "Email không đúng định dạng";
					document.getElementById("txtMail").style.border = "1px solid red";
					document.getElementById("lbMail").style.display = "block";
					status = false;
				}else{
					document.getElementById("lbMail").innerHTML = "";
					document.getElementById("txtMail").style.border = "1px solid #ddd";
				}
			}

			
			if(status == false){
				return false;
			}else{
				return true;
			}

		}
