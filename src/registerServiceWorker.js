/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {

  /**
   * registration of service worker
   */
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready (registration) {
      console.log('Notification.permission: ', JSON.stringify(Notification.permission))
      if(!Notification.permission || Notification.permission === 'default'){
        Notification.requestPermission(result => {
          console.log('result from permission question', result);
          if(Notification.permission === 'granted'){
            const applicationServerKey = urlB64ToUint8Array(
              'BLZZt8aJWB-d4NLGb1Smda8K7NzxzIitOleVtSGmCbTEK3ma4muZlk6gyOi33W_eQAu8mqU0CoD7AyodnzoQE8Y'
            )
            const options = {applicationServerKey, userVisibleOnly: true}
            registration.pushManager.subscribe(options)
            .then(subscription=>{
              console.log('subscription: ', JSON.stringify(subscription))
            })
            .catch(error=>{
              console.error('error: ',error)
            })
          }
        });
      }      
    },
    /**
     * @description service worker is already registered.
     * @param {*} registration 
     */
    registered (registration) {  
      //check update every 1hr    
      setInterval(() => {
        registration.update();
      }, 1000 * 60 * 60);      
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    /**
     * @description service worker is updated
     * @param {*} registration 
     */
    updated (registration) {
      document.dispatchEvent(new CustomEvent('swUpdated', { detail: registration }));
    },
     /**
     * @description service worker is offline
     * @param {*} registration 
     */
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}


const urlB64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}
