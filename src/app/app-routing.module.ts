import { NgModule } from '@angular/core'; //pacote que usa o decorador 
import { Routes, RouterModule } from '@angular/router';
import { NoticiaRoutes } from './noticia-pesquisa/noticias-routing.module';

//determinar que as minhas rotas terão o comportamento do objeto que estou importando 
//coloco minhas rotas dentro dos colchetes
//essas rotas que alteram o conteúdo da página, vou ter uma rota para cada página
export const router : Routes = [
  {
        path: 'noticia-pesquisa',
        redirectTo: 'noticia-pesquisa',
        pathMatch:'full'  //redireciona direto pra pasta raiz
    }, 
    ...NoticiaRoutes  //faz um merge das rotas de tarefas-routing.module aqui
];

//usar decorador para fazer com que o app.module seja considerado um módulo: 
@NgModule ({ 
  imports :[ RouterModule.forRoot(router) ], //dentro de router module use o forRoot (método especifico para configuração de rotas) 
  exports :[ RouterModule ] //exportando minha própria rota 
})

//exportar rota pois ela pode ser usada em outros componentes, para fazer referência: 
export class AppRoutingModule {}