import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import { FormModule }
import { EditorModule } from "@tinymce/tinymce-angular";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { YourPostsComponent } from "./pages/your-posts/your-posts.component";
import { PostJobComponent } from "./pages/post-job/post-job.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { TestDemoComponent } from './pages/test-demo/test-demo.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostJobComponent,
    ProfileComponent,
    YourPostsComponent,
    TestDemoComponent
  ],

  imports: [
    CommonModule,
    EditorModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}
