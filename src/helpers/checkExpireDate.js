export  const  expireDateHandler =() => {
    const currentDate = new Date();
    const expiryDate = new Date(localStorage.getItem('date'));
    const referenceId = new Date(localStorage.getItem('referenceId'));
    const userType = new Date(localStorage.getItem('userType'));
    const token = new Date(localStorage.getItem('token'));
    const current_user = new Date(localStorage.getItem('current_user'));
    const permissions = new Date(localStorage.getItem('permissions'));

    console.log(currentDate, expiryDate);
    if(currentDate.getTime() > expiryDate.getTime()){
        window.localStorage.clear();
        window.location.reload();
    }
    if(referenceId == null || referenceId == undefined){
        window.localStorage.clear();
        window.location.reload();
    }
    if(userType == null || userType == undefined){
        window.localStorage.clear();
        window.location.reload();
    }
    if(token == null || token == undefined){
        window.localStorage.clear();
        window.location.reload();
    }
    if(JSON.parse(localStorage.getItem('current_user')) == null || JSON.parse(localStorage.getItem('current_user')) == undefined){
        window.localStorage.clear();
        window.location.reload();
    }
    if(JSON.parse(localStorage.getItem('permissions')) == null || JSON.parse(localStorage.getItem('permissions')) == undefined){
        window.localStorage.clear();
        window.location.reload();
    }

    
}