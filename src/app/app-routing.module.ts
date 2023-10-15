import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule)
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule)
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
    path: "legacy",
    loadChildren: () =>
      import("./legacy/legacy.module").then((m) => m.LegacyModule)
  },
  {
    path: "",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule)
  },
  {
    path: "legacy",
    loadChildren: () =>
      import("./legacy/legacy.module").then((m) => m.LegacyModule)
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
