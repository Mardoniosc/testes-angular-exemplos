import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { asyncData, asyncError } from 'src/testing/async-observable-helpers';
import { BlogService } from './blog.service';

interface Post {
  id: number;
  title: string;
  author: string;
}

/**
 * @Test Testando service assincronos
 */

describe('BlogService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let blogService: BlogService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    blogService = new BlogService(httpClientSpy);
  });

  it('Deve retornar uma lista de posts com chamada HttpClient', (done: DoneFn) => {
    const expectedHeroes: Post[] = [
      { id: 1, title: 'A', author: '1' },
      { id: 2, title: 'B', author: '2' }
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

    blogService.getAllPosts().subscribe({
      next: (posts) => {
        expect(posts).withContext('expected posts').toEqual(expectedHeroes);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('Deve retornar um erro com status 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found',

    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    blogService.getAllPosts().subscribe({
      next: posts => done.fail('expected an error, not posts'),
      error: error  => {
        expect(error.message).toContain('404 Not Found');
        done();
      }
    });
  });

  it('Deve retornar um post com chamada HttpClient', (done: DoneFn) => {
    const expectedHeroes: Post = { id: 1, title: 'A', author: '1' };

    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

    blogService.getPostById(2).subscribe({
      next: (posts) => {
        expect(posts).withContext('expected post').toEqual(expectedHeroes);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('Deve retornar um erro com status 404 ao passar um post que não existe', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found',

    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    blogService.getPostById(5).subscribe({
      next: posts => done.fail('expected an error, not posts'),
      error: error  => {
        expect(error.message).toContain('404 Not Found');
        done();
      }
    });
  });

  it('Deve retornar um post ao cadastrar o mesmo com chamada HttpClient', (done: DoneFn) => {
    const postInsert: Post = { id: 5, title: 'titulo insert', author: 'author inser' }

    httpClientSpy.post.and.returnValue(asyncData(postInsert));

    blogService.insert(postInsert).subscribe({
      next: (posts) => {
        expect(posts).withContext('expected post').toEqual(postInsert);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.post.calls.count()).withContext('one call').toBe(1);
  });
});
