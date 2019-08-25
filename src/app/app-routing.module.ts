import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
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


import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProgressComponent } from './progress/progress.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'group', component: GroupComponent },

  { path: 'users', component: UsersComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'exams', component: ExamsComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'mailbox', component: MailboxComponent },
  { path: 'configurations', component: ConfigurationsComponent },
  { path: 'emailandsms', component: EmailandSmsComponent },

  { path: 'buttons', component: ButtonsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'dropdowns', component: DropdownComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'userRegisters', component: UserRegisterComponent },
  { path: 'addSubject', component: AddSubjectComponent },
  { path: 'addQuestion', component: AddQuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
