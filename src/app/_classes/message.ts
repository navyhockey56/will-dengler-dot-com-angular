export class Message {
  constructor (
    public id: number,
    public createdAt: string,
    public updatedAt: string,

    public email: string,
    public message: string
  ) {}

  path(): string {
    return `/message/${this.id}`
  }

  toJson(): any {
    return {
      id:         this.id,
      created_at:  this.createdAt,
      updated_at:  this.updatedAt,

      email:      this.email,
      message:   this.message,
    }
  }
}

export function mapToMessage(rawMessage : any): Message {
  if (!rawMessage) {
    // Invalid message
    return null;
  }

  return new Message(
    rawMessage.id,
    rawMessage.created_at,
    rawMessage.updated_at,

    rawMessage.email,
    rawMessage.message,
  );
}

export function mapToMessages(data: any[]): Message[] {
  return data.map( rawMessage => mapToMessage(rawMessage) );
}
