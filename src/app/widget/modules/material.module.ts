import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MAT_RIPPLE_GLOBAL_OPTIONS,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

import { MatCardModule } from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatExpansionModule,
    ClipboardModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // NativeDateModule,
    // MatMomentDateModule,
    MatBottomSheetModule,
    MatListModule,
    MatCardModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatExpansionModule,
    ClipboardModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // NativeDateModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatListModule,
    MatCardModule,
  ],
  declarations: [],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } },
    { provide: MatBottomSheetRef, useValue: {} },
  ],
})
export class MaterialModule {}
