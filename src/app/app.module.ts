import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SystelabComponentsModule} from 'systelab-components';
import {GridContextMenuCellRendererComponent} from 'systelab-components/widgets/grid/contextmenu/grid-context-menu-cell-renderer.component';
import {GridHeaderContextMenuComponent} from 'systelab-components/widgets/grid/contextmenu/grid-header-context-menu.component';
import {DialogService, MessagePopupService} from 'systelab-components/widgets/modal';
import {SystelabTranslateModule} from 'systelab-translate';
import {SystelabPreferencesModule} from 'systelab-preferences';
import {SystelabLoginModule} from 'systelab-login';
import {AgGridModule} from 'ag-grid-angular/main';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SystelabTranslateModule.forRoot(),
    SystelabPreferencesModule.forRoot(),
    SystelabLoginModule.forRoot(),
    SystelabComponentsModule.forRoot(),
    AgGridModule.withComponents([
      GridContextMenuCellRendererComponent,
      GridHeaderContextMenuComponent
    ]),
  ],
  providers: [
    MessagePopupService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
