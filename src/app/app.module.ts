import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { TabsComponent } from './tabs/tabs.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProgressComponent } from './progress/progress.component';
import { GroupComponent } from './group/group.component';
import { UsersComponent } from './users/users.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { QuestionsComponent } from './questions/questions.component';
import { ExamsComponent } from './exams/exams.component';
import { ResultsComponent } from './results/results.component';
import { StudentsComponent } from './students/students.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { EmailandSmsComponent } from './emailand-sms/emailand-sms.component';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    FormsComponent,
    DashboardComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    TabsComponent,
    CarouselComponent,
    ProgressComponent,
    GroupComponent,
    UsersComponent,
    SubjectsComponent,
    QuestionsComponent,
    ExamsComponent,
    ResultsComponent,
    StudentsComponent,
    MailboxComponent,
    ConfigurationsComponent,
    EmailandSmsComponent,
    UserRegisterComponent,
    AddSubjectComponent,
    AddQuestionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot() 
    
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
