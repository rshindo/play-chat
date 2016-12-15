export class Message {
  constructor(
    public id: number,
    public postedTime: Date,
    public text: string,
    public userId: string
  ){}

  get displayTime() {
    return this.postedTime.toLocaleTimeString();
  }
}

export var messages: Message[] = [
    new Message(1, new Date(), "test", "John"),
    new Message(2, new Date(), "test2", "Bill")
  ];
