let myDate = new Date()//creating new vriable fo date type obj
//console.log(myDate.toString());//=Wed Jan 24 2024 17:05:57 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString());//=Wed Jan 24 2024
//console.log(myDate.toLocaleString());//=1/24/2024, 5:05:57 PM
//console.log(typeof myDate);//=object

// let myCreatedDate = new Date(2023, 0, 23)//mounth starts from 0 in JS 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
 let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);//op=>1727848175038
// console.log(myCreatedDate.getTime());//op=>1673654400000 //give value in milli sec
// console.log(Math.floor(Date.now()/1000));//conrt mili sec to sec

let newDate = new Date()
//console.log(newDate);//op=>2024-10-02T05:51:17.971Z
//console.log(newDate.getMonth() + 1);//op=>10 //month
//console.log(newDate.getDay());//op=>3//ie wednesday

newDate.toLocaleString('default', {
    weekday: "long",    
})///set default weekday as long