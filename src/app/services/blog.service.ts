import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/posts/${id}`);
  }

  insert(post: Post): Observable<Post> {
    return this.http.post<Post>(`http://localhost:3000/posts`, post);
  }
}
