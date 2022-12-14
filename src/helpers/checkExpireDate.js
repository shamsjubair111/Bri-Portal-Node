export  const  expireDateHandler =() => {
    const currentDate = new Date();
    const expiryDate = new Date(localStorage.getItem('date'));

    console.log(currentDate, expiryDate);
    if(currentDate.getTime() > expiryDate.getTime()){
        window.localStorage.clear();
        window.location.reload();
    }
    
}