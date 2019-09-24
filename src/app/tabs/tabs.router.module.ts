import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'drinks/:category',
            children: [
              {
                path: 'drink-details/:id',
                loadChildren: () =>
                  import('../drink-details/drink-details.module').then(m => m.DrinkDetailsPageModule)
              },
            {
              path: '',
              loadChildren: () =>
                  import('../drinks/drinks.module').then(m => m.DrinksPageModule)
            }]
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: 'drink-details/:id',
            loadChildren: () =>
                import('../drink-details/drink-details.module').then(m => m.DrinkDetailsPageModule)
          },
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: 'drink-details/:id',
            loadChildren: () =>
              import('../drink-details/drink-details.module').then(m => m.DrinkDetailsPageModule)
          },
          {
            path: '',
            loadChildren: () =>
                import('../tab4/tab4.module').then(m => m.Tab4PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
