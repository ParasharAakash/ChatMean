import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'; 
import { Observable } from 'rxjs';
// import { emit } from 'cluster';

@Injectable({ 
  providedIn: 'root'
})
export class RegisterService {
  static listen(arg0: string) {
    throw new Error("Method not implemented.");
  }
  static emit(arg0: string, userName: string) {
    throw new Error("Method not implemented.");
  }
  Socket:SocketIOClient.Socket;
  constructor() {
    this.Socket=io.connect('http://localhost:3000');
   }
   listen(eventname : string) : Observable<any>{
     return new Observable((subscribe)=>{
      this.Socket.on(eventname,(data)=>{
      subscribe.next(data);
       })
    })
   }

   emit(eventname :string,data:any)
   {
     this.Socket.emit(eventname,data);
   }
}
