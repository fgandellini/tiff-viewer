export class TiffDescriptor {
  id: number;
  name: string;
}

export class TiffFile extends TiffDescriptor {
  content: string;
}
