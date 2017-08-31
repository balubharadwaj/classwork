import { TestBed, inject } from '@angular/core/testing';
import { CleanBlogService } from './clean-blog.service';

describe('CleanBlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CleanBlogService]
    });
  });

  it('should be created', inject([CleanBlogService], (service: CleanBlogService) => {
    expect(service).toBeTruthy();
  }));
});
