import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createPostAction } from '../../store/post.actions';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent {
  /**
   * The form group for the editor.
   */
  public form = new FormGroup({
    title: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    body: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
  });

  constructor(private store: Store) {}

  public createPost() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.store.dispatch(
      createPostAction({
        input: {
          title: this.form.get('title')?.value!,
          body: this.form.get('body')?.value!,
        },
      })
    );
  }
}
