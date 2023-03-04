import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * The routes are lazy loaded, so the app doesn't load all the modules at once.
 * This is a good practice for performance.
 */
const routes: Routes = [
  {
    path: 'feed',
    loadChildren: () =>
      import('./features/feed/feed.module').then(m => m.FeedModule),
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./features/post/post.module').then(m => m.PostModule),
  },
  { path: '**', redirectTo: 'feed' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
