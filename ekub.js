
let users = []
let total_Amount = 0
console.log('JavaScript connected')

let submit = document.getElementById('submit_btn')
submit.addEventListener('click', user_Info)



function user_Info() {
    let full_Name = document.getElementById('fullname').value
    let phone_no = document.getElementById('phone').value
    let amount = document.getElementById('customAmountInput').value


total_Amount += Number(amount)

if (full_Name === '' || /\d/.test(full_Name)){
    let error_MsgName = document.getElementById('error_MsgName')
    error_MsgName.innerHTML = 'Enter your name'
} else if (phone_no === '' || phone_no.length < 9){
    let error_MsgPhone = document.getElementById('error_MsgPhone')
    error_MsgPhone.innerHTML = 'What is your phone number'
}
 else if (amount == ''){
    let error_MsgAmount = document.getElementById('error_MsgAmount')
    error_MsgAmount.innerHTML = 'Ensert the amount of birr '
} else {



error_MsgName.textContent = ''
error_MsgPhone.textContent = ''
error_MsgAmount.textContent = ''



    let C_full_Name = document.getElementById('fullname')
    let C_phone_no = document.getElementById('phone')
    let C_amount = document.getElementById('customAmountInput')




let user = {
    full_Name : full_Name,
    phone_no : phone_no,
    amount : amount
}
 users.push(user)
 
let table = document.getElementById('users_Table')
let tbody = document.getElementsByTagName('tbody')[0]
let row = tbody.insertRow();
let full_Name_Cell = row.insertCell();
let phone_no_Cell = row.insertCell();
let amount_Cell = row.insertCell();


    
full_Name_Cell.innerHTML = full_Name
phone_no_Cell.innerHTML = phone_no
amount_Cell.innerHTML = amount


C_full_Name.value = ''
C_phone_no.value = ''
C_amount.value = ''
}}


let winner_Btn = document.getElementById('winner_btn')
winner_Btn.addEventListener('click',winner)


let winners_History = []  
let new_User = new Object()


function winner() {
   let winner_Name = document.getElementById('winner_Name')
    
    let count_User = 0;
    for ( user in users){
        count_User++
    }
  
   if (count_User >= 2){
        let rand = Math.floor(Math.random()*users.length)
        console.log(rand)
        let winner_User = users[rand].full_Name
        if (winners_History.includes(winner_User)){
            winner()
        } else if (winners_History.length == users.length) {
            alert('All of you done your cance')
        }
        else {
        winner_Name.innerHTML = 'Congrats ' + winner_User + ' you are the winer of  '+ total_Amount +'birr!!!'
        winners_History.push(winner_User)
        } 
   }
   else {
        alert(' You have tobe more than one! ')    
   }
}