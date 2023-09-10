import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule)
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule)
  },
  {
    path: "",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
