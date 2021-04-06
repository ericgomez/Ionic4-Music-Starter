import { TestBed } from '@angular/core/testing';

import { SpotifyMusicService } from './spotify-music.service';

describe('SpotifyMusicService', () => {
  let service: SpotifyMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
