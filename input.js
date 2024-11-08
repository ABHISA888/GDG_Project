// script.js  
document.getElementById('swapBtn').addEventListener('click', function() {  
    const offerDetails = document.getElementById('offerDetails').value;  
    const offerInstructor = document.getElementById('offerInstructor').value;  
    const wantDetails = document.getElementById('wantDetails').value;  
    const wantInstructor = document.getElementById('wantInstructor').value;  

    const data = {  
        offer: {  
            details: offerDetails,  
            instructor: offerInstructor  
        },  
        want: {  
            details: wantDetails,  
            instructor: wantInstructor  
        }  
    };  

    // Log the collected data  
    console.log('Swap Data:', JSON.stringify(data));  
    
    // Optionally, clear the input fields after submission  
    document.getElementById('offerDetails').value = '';  
    document.getElementById('offerInstructor').value = '';  
    document.getElementById('wantDetails').value = '';  
    document.getElementById('wantInstructor').value = '';  
});