export class LoggingService{
    logStatusChange(accountStatus: string) {
      throw new Error('Method not implemented.');
    }
    logStatusChange(status: string){

        console.log('A server status changed, new status: ' + status);
    }
}