document.getElementById('canceltxt').addEventListener('click', function() {
    document.getElementById('usertxt').value = ''; // Clears the input field
});
document.getElementById('sendtxt').addEventListener('click',function(){
    const usertxt =document.getElementById('usertxt').value;

    
    if (usertxt === "1") {
        window.location.href = "yolo_guhamagara.html"; // Redirect to the corresponding file
    } 
})
