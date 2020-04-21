// //    fetch('sample.txt')
// //    .then(res => res.text())
// //    .then(data => console.log(data))


// // fetch('text.json')
// //  .then( res => res.json())
// //  .then (data => {

// //     data.forEach( pl=>{
// //         console.log(`language : ${pl.lang}`)
// //         console.log(`name : ${pl.name}`)
// //         console.log(`default : ${pl.default}`)
// //     })
// //  })


//  fetch('https://jsonplaceholder.typicode.com/posts')
//  .then(res => res.json())
//  .then(data => {

//     data.forEach( pl=>{
//         console.log(`UserId : ${pl.id}`)
//         console.log(`title : ${pl.title}`)
//         console.log(`body : ${pl.body}`)
//     })
//  })

// let rollNumber = prompt('enter your roll number');

// fetch('text.json')
//   .then( res => res.json())
//     .then(data => {

//         data.forEach( user =>{
            
//             if(`${user.roll}` === rollNumber ){
            
//             console.log(`Roll : ${user.roll}`)
//             console.log(`Name : ${user.name}`)
//             console.log(`Result : ${user.result}`)
//             console.log(`Department : ${user.department}`)
//             }
            
//         })
//     })

// let country = prompt('Enter Country').toLowerCase();


   
getTotal();

function getTotal(){

    fetch('https://covid19.mathdro.id/api/daily')
 .then(res => res.json())
 
 .then(data => {
        data.forEach( item =>{

            
            if( `${item.reportDate}` === "2020-04-16"){
                
                
                let totalConfirmed = document.querySelector('.total-confirmed');
                totalConfirmed.innerHTML = `${item.confirmed.total}`

        let totalDeath = document.querySelector('.total-death');
        totalDeath.innerHTML = `${item.deaths.total}`


            }

            else{
                return;
            }
        })

       })

}






const btn= document.querySelector('.btn');
btn.addEventListener('click',showInput)

function showInput(e){
    e.preventDefault();
    let formInput = document.getElementById('form-entry').value.toLowerCase() ;

    if(formInput==="us"){
        
fetch('https://covid19.mathdro.id/api/countries/usa')
 .then(res => res.json())
 
 .then(data => {

     
    const country = 'Us'
    // const confirmed = data.confirmed;
    // const recovered = data.recovered;
    // const deaths = data.deaths;

        console.log("Country : " +  country)
        console.log(`Confirmed : ${data.confirmed.value}`)
        console.log(`Recovered : ${data.recovered.value}`)
        console.log(`Deaths : ${data.deaths.value}`)
        console.log(`Active : ${data.active}`)

        let disCon = document.querySelector('.dis-con');
        disCon.innerHTML = `${country}`

        let disConfirmed = document.querySelector('.dis-confirmed');
        disConfirmed.innerHTML = `${data.confirmed.value}`

        let disRecovered = document.querySelector('.dis-recovered');
        disRecovered.innerHTML = `${data.recovered.value}`

        let disDeaths = document.querySelector('.dis-deaths');
        disDeaths.innerHTML = `${data.deaths.value}`

        // let disActive = document.querySelector('.dis-active');
        // disActive.innerHTML = `${data.active}`
        document.getElementById('form-entry').value="";

    return ;
    })

    }





    else if(formInput==="china"){
        
        fetch('https://covid19.mathdro.id/api/countries/china')
         .then(res => res.json())
         
         .then(data => {
        
             
            const country = 'China'
            // const confirmed = data.confirmed;
            // const recovered = data.recovered;
            // const deaths = data.deaths;
        
                 console.log("Country : " +  country)
                console.log(`Confirmed : ${data.confirmed.value}`)
                console.log(`Recovered : ${data.recovered.value}`)
                console.log(`Deaths : ${data.deaths.value}`)
                console.log(`Active : ${data.active}`)
        
                let disCon = document.querySelector('.dis-con');
                disCon.innerHTML = `${country}`
        
                let disConfirmed = document.querySelector('.dis-confirmed');
                disConfirmed.innerHTML = `${data.confirmed.value}`
        
                let disRecovered = document.querySelector('.dis-recovered');
                disRecovered.innerHTML = `${data.recovered.value}`
        
                let disDeaths = document.querySelector('.dis-deaths');
                disDeaths.innerHTML = `${data.deaths.value}`
        
                // let disActive = document.querySelector('.dis-active');
                // disActive.innerHTML = `${data.active}`
                document.getElementById('form-entry').value="";
        
        
            })
        
            }

















    else {








    fetch('https://covid19.mathdro.id/api/confirmed')
    .then(res => res.json())
    .then(data => {
    data.forEach( item => {
        if(formInput === item.countryRegion.toLowerCase()){
        console.log(`Country : ${item.countryRegion}`)
        console.log(`Confirmed : ${item.confirmed}`)
        console.log(`Recovered : ${item.recovered}`)
        console.log(`Deaths : ${item.deaths}`)
        console.log(`Active : ${item.active}`)

        
        let disCon = document.querySelector('.dis-con');
        disCon.innerHTML = `${item.countryRegion}`

        let disConfirmed = document.querySelector('.dis-confirmed');
        disConfirmed.innerHTML = `${item.confirmed}`

        let disRecovered = document.querySelector('.dis-recovered');
        disRecovered.innerHTML = `${item.recovered}`

        let disDeaths = document.querySelector('.dis-deaths');
        disDeaths.innerHTML = `${item.deaths}`

        // let disActive = document.querySelector('.dis-active');
        // disActive.innerHTML = `${item.active}`
        document.getElementById('form-entry').value="";
}})
       
})


}
}
