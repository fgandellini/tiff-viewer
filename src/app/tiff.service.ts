import { Injectable } from '@angular/core';
import { TiffDescriptor, TiffFile } from './types';

const API = 'http://localhost:4300/api';

@Injectable()
export class TiffService {
  getTiffs(): Promise<TiffDescriptor[]> {
    return fetch(`${API}/tiffs`).then(r => r.json());
  }
  getTiff(id: number): Promise<TiffFile> {
    return fetch(`${API}/tiffs/${id}`).then(r => r.json());
  }
}
