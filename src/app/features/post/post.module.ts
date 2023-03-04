import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { EditorComponent } from './components/editor/editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { postFeature } from './store/post.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostEffects } from './store/post.effects';

@NgModule({
  declarations: [PostComponent, EditorComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(postFeature),
    EffectsModule.forFeature([PostEffects]),
  ],
})
export class PostModule {}
