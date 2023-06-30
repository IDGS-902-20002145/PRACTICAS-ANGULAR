import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { VentasCComponent } from "./cinepolis/ventas-c/ventas-c.component";
import { CalculoD2PComponent } from "./distancia2p/calculo-d2-p/calculo-d2-p.component";
import { CalculosRComponent } from "./resistencia/calculos-r/calculos-r.component";

const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'Cinepolis', component: VentasCComponent },
{path: 'Distancia2P', component: CalculoD2PComponent},
{path: 'Resistencia', component: CalculosRComponent}

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
