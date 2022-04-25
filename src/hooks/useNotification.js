const useNotification = (title,options) => {
    if(!("Notification" in window)){
      return ;
    }
    
    const fireNotif = () => {
      if (Notification.permission==="granted"){
        new Notification(title,options)
      }
      else{
        Notification.requestPermission().then(permission=>{
          if (permission==="granted"){
            new Notification(title,options)
          }
        })
      }
    }
    return fireNotif;
  }
  export default useNotification;