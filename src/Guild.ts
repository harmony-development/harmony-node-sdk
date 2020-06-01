import { HarmonyConnection } from "./Connection";

class Guild {
  Connection: HarmonyConnection;
  ID: string;
  private _Owner?: string;
  private _Name?: string;
  private _Picture?: string;

  constructor(Connection: HarmonyConnection, ID: string);
  constructor(
    Connection: HarmonyConnection,
    ID: string,
    Owner?: string,
    Name?: string,
    Picture?: string
  ) {
    this.Connection = Connection;
    this.ID = ID;
    this._Owner = Owner;
    this._Name = Name;
    this._Picture = Picture;
  }

  async getChannels(): Promise<Channel[]> {
    const channelData = await this.Connection.getChannels(this.ID);
    return channelData.channels.map((data) => new Channel(data.id));
  }

  async fetchDetails() {
    const data = await this.Connection.getGuild(this.ID);
    this._Name = data.GuildName;
    this._Owner = data.GuildOwner;
    this._Picture = data.GuildPicture;
  }

  async changeName(name: string) {
    return this.Connection.updateGuildName(this.ID, name);
  }

  async changePicture(file: File) {
    return this.Connection.updateGuildPicture(this.ID, file);
  }

  get Owner() {
    return (async () => {
      if (!this._Owner) {
        await this.fetchDetails();
      }
      return this._Owner;
    })();
  }

  get Name() {
    return (async () => {
      if (!this._Name) {
        await this.fetchDetails();
      }
      return this._Name;
    })();
  }

  get Picture() {
    return (async () => {
      if (!this.Picture) {
        await this.fetchDetails();
      }
      return this._Picture;
    })();
  }
}
