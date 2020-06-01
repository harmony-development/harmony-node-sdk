class Channel {
  ID: string;
  Name?: string;

  constructor(ID: string);
  constructor(ID: string, Name?: string) {
    this.ID = ID;
    this.Name = Name;
  }
}
